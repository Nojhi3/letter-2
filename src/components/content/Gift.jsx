import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gift() {
    const [isOpen, setIsOpen] = useState(false);

    const handleReveal = () => setIsOpen(true);

    return (
        <section className="w-full min-h-screen bg-princessPurple flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
            <div className="w-full max-w-2xl flex flex-col items-center text-center">
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
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="w-full bg-white border-4 border-softGold rounded-xl p-8 mt-4 text-princessPurple shadow-xl origin-top"
                            >
                                <p className="text-left text-lg font-light leading-relaxed mb-4">
                                    Dear{" "}
                                    <span className="text-softGold font-semibold outline-text">
                                        Preeti
                                    </span>
                                    ,
                                </p>

                                <p className="text-left text-lg font-light leading-relaxed mb-4">
                                    Hi Grown-Up Lady,<br /><br />

                                    🌷HAPPIEST BIRTHDAY PRITI 🌷<br />
                                    Damn the gifts in Hong Kong would cost me my laptop. Just a little thing for you.<br />
                                    Since I couldn’t send you gifts and hugs,<br />
                                    I’m genuinely so proud of you... for holding it all together, for making things work, for growing into the incredible woman you are becoming.<br />
                                    And I always will be… no matter what you do, no matter where life takes you.<br /><br />

                                    Life has pulled us far apart in distance. We don’t share everyday updates anymore — not like before.<br />
                                    But deep down, I know... we’re all fighting our little battles, carrying our silent storms.<br /><br />

                                    And Priti, even if we’re not always in touch…<br />
                                    when the world feels too heavy, when you're troubled or tired — just know, we’ll always be here.<br />
                                    Come to us when you need someone.<br />
                                    Come to us even when you don’t.<br /><br />

                                    That’s what this bond is — to me, that’s the purest form of friendship. And it always will be.
                                </p>

                                <p className="text-left text-lg font-light leading-relaxed mb-4">
                                    I hope, baby, that everything you dream of — every little wish on your bucket list — finds its way to you.<br />
                                    That you stay healthy, surrounded by people who love you the way you deserve to be loved... like the princess you are.<br />
                                    And if life throws something difficult your way, I hope it doesn’t break you down — but builds you into someone even stronger.<br />
                                    May you always stand tall for yourself, with grace and fire in your heart.
                                </p>

                                <p className="text-left text-lg font-light leading-relaxed">
                                    I love you, sweetheart.<br />
                                    <span className="text-softGold font-semibold outline-text">
                                        — Komal
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
