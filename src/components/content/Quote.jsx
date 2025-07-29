import { motion } from "framer-motion";

export default function Quote() {
    return (
        <section className="w-full bg-princessPurple py-20 px-6 flex items-center justify-center">
            <motion.blockquote
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-3xl text-center text-2xl font-fancy text-softGold outline-text leading-snug"
            >
                “In your smile, I see something more beautiful than the stars.”
            </motion.blockquote>
        </section>
    );
}
