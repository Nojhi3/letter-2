import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gift() {
    const [isOpen, setIsOpen] = useState(false);

    const handleReveal = () => setIsOpen(true);

    return (
        <section className="w-screen h-screen bg-princessPurple flex items-center justify-center px-4">
            <div className="w-full max-w-2xl h-auto flex flex-col items-center justify-center text-center">
                <h2 className="text-4xl font-fancy text-softGold mb-10 drop-shadow-scrollTitle">
                    A Scroll Just for You 💌
                </h2>

                <div className="w-full">
                    <AnimatePresence>
                        {!isOpen ? (
                            <motion.div
                                initial={{ scaleY: 1 }}
                                animate={{ scaleY: 1 }}
                                exit={{ scaleY: 0.8, opacity: 0 }}
                                transition={{ duration: 0.6 }}
                                className="cursor-pointer bg-white rounded-full border-4 border-softGold px-10 py-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                                onClick={handleReveal}
                            >
                                <p className="text-lg text-princessPurple font-fancy">
                                    Tap to unroll the scroll 🎀
                                </p>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ height: 0, scaleY: 0, opacity: 0 }}
                                animate={{ height: "auto", scaleY: 1, opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="w-full bg-white border-4 border-softGold rounded-xl p-8 mt-4 text-princessPurple shadow-xl origin-top overflow-hidden"
                            >
                                <p className="text-left text-lg font-light leading-relaxed mb-4">
                                    Dear{" "}
                                    <span className="text-softGold font-semibold outline-text">
                                        Kumkum
                                    </span>
                                    ,
                                </p>
                                <p className="text-left text-lg font-light leading-relaxed mb-4">
                                    You've filled my life with light, laughter, and love. There are a
                                    thousand things I could say, but none will ever feel enough for
                                    what you mean to me.
                                </p>
                                <p className="text-left text-lg font-light leading-relaxed mb-4">
                                    This scroll is just a small way of saying thank you for being the
                                    magical person you are ✨
                                </p>
                                <p className="text-left text-lg font-light leading-relaxed">
                                    With all my heart,
                                    <br />
                                    <span className="text-softGold font-semibold outline-text">
                                        — Akshat
                                    </span>
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
