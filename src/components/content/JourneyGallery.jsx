import { motion } from "framer-motion";

const memories = [
    {
        id: 1,
        image: "pic-one.jpg",
        text: "Our very first picture together 💕 aisubxciadjbcijbdwsijcbdsbjcbdsjbcsdb kjcdskcnkdsnkmndsamnxdsnakn dksn dnsndsnxlndsnxdsnxndsnxkj",
        direction: "right",
    },
    {
        id: 2,
        image: "pic-two.jpg",
        text: "That random laugh that made everything better 🤭",
        direction: "left",
    },
    {
        id: 3,
        image: "pic-three.jpg",
        text: "The day we made a thousand memories in one sunset 🌇",
        direction: "right",
    },
    // Add more memories here
];

export default function JourneyGallery() {
    return (
        <section className="w-full bg-twilightLilac py-20 px-6">
            <h2 className="text-4xl font-fancy text-center text-indigo mb-16">
                Our Journey Together 📸
            </h2>

            <div className="space-y-32">
                {memories.map(({ id, image, text, direction }) => (
                    <motion.div
                        key={id}
                        initial={{ opacity: 0, x: direction === "left" ? -100 : 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className={`flex flex-col md:flex-row ${direction === "left" ? "md:flex-row-reverse" : ""
                            } items-center gap-10`}
                    >
                        {/* Image */}
                        <div className="flex-shrink-0 w-full md:w-1/2 max-w-lg shadow-xl rounded-xl overflow-hidden border-4 border-mauve">
                            <img
                                src={image}
                                alt="Memory"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Text */}
                        <p className="md:w-1/2 text-xl font-light text-mauve text-center md:text-left">
                            {text}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
