
import { motion } from "framer-motion";

export default function Image() {
    return (
        <section className="w-full bg-blush py-16 px-4 flex justify-center items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center"
            >
                <div className="mx-auto max-w-xl rounded-xl overflow-hidden shadow-xl border-4 border-rosePink">
                    <img
                        src="main-pic.jpg" // Replace this with your image path
                        alt="Captured memory"
                        className="w-full h-auto object-cover"
                    />
                </div>

                <p className="mt-4 text-deepPurple text-lg font-light italic">
                    Just one of the many moments where you lit up everything around you ✨
                </p>
            </motion.div>
        </section>
    );
}

