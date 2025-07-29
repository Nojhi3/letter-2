import { motion } from "framer-motion";

export default function Message() {
    return (
        <section className="w-full bg-blush py-16 px-6 flex justify-center items-center">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-2xl text-center"
            >
                <h2 className="text-3xl md:text-4xl font-fancy text-rosePink mb-6">
                    A Message From the Heart 💖
                </h2>
                <p className="text-lg md:text-xl text-deepPurple font-light leading-relaxed">
                    You bring joy, calm, and color into the lives of everyone around you.
                    This little page is just my way of saying — thank you for being you.
                    For being kind, magical, and simply unforgettable.
                </p>
            </motion.div>
        </section>
    );
}
