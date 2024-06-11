"use client";


import { motion } from 'framer-motion'
import useScrollProggres from "@/hooks/useScrollProggres";

const variants = {
    hidden: { opaciy: 0 },
    enter: { opaciy: 1 },
};

const template = ({ children }) => {
    const completion = useScrollProggres();
    return (
        <>
            <motion.main variants={variants} initial='hidden' animal='enter' transition={{ type: 'linear', delay: 0.2, duration: 0.4 }}>{children}</motion.main>
            <span style={{ transform: `translately(${completion - 100}%)` }}
                className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"
            >

            </span>
        </>
    );
};

export default template;
