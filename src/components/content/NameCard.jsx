import { motion } from "framer-motion";

export default function NameCard() {
    return (
        <section className="w-full bg-blush py-12 flex justify-center items-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <h2 className="text-3xl md:text-4xl font-fancy text-rosePink mb-4">
                    To the sweetest soul I know 💗
                </h2>

                <h1 className="text-5xl md:text-6xl font-fancy mb-6">
                    <span className="animated-gradient bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 bg-[length:200%_200%] text-transparent bg-clip-text animate-gradient">
                        Preeti
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-deepPurple font-light max-w-xl mx-auto">
                    This little corner of the internet is just for you. Because someone as
                    special as you deserves to be celebrated in the most magical way.
                </p>
            </motion.div>
        </section>
    );
}
