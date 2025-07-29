import { motion } from "framer-motion";

const memories = [
    {
        id: 1,
        image: "pic-one.jpg",
        text: "To the day we both were happy with a 38 in English and ma'am appreciated us, to the initial days when we started becoming close to each other, moments I’ll always recall… and be endlessly grateful for.",
        direction: "right",
    },
    {
        id: 2,
        image: "pic-two.jpg",
        text: "You turned 18. And trust me, those were some of the best days — when we were genuinely excited, full of energy, planning surprises, and putting our hearts into each other’s birthdays like they meant the world. I still remember how you found your gift, playing that little treasure hunt... and someone didn’t know (or conveniently forgot 😤) my phone number. From the day filled with endless laughter, pretty pictures, and memories I’ll never let go of ♥️",
        direction: "left",
    },
    {
        id: 3,
        image: "pic-three.jpg",
        text: "haha \n introduced to Khushi's boyfriend blowing together...pretty rough but worth remembering still recall how excited you were to get your first tattoo ..that is one special moment to me as well how i saw you getting ur first tattoo and u seemed happy for once but not so happy for the dragon fly, but trust me... to me they seemed pretty 🍀✨",
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
