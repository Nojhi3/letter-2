// components/common/RevealCard.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RevealCard({ preview, children, className = "" }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleReveal = () => setIsOpen(true);

    return (
        <AnimatePresence>
            {!isOpen ? (
                <motion.div
                    initial={{ rotateY: 0 }}
                    animate={{ rotateY: 0 }}
                    exit={{ rotateY: 90, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className={`cursor-pointer ${className}`}
                    onClick={handleReveal}
                >
                    {preview}
                </motion.div>
            ) : (
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 1 }}
                    className={className}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
