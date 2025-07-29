import { motion } from "framer-motion";

export default function Header() {
    return (
        <header className="w-full bg-blush py-12 flex justify-center items-center">
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-5xl font-fancy text-rosePink text-center"
            >
                🎀 Happy Birthday, Princess! 🎀
            </motion.h1>
        </header>
    );
}
