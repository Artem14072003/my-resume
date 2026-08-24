import React from "react";
import {motion} from "framer-motion"

const MotionSection = (
    {children, className}: {children: React.ReactNode, className: string}
) => {
    return (
        <motion.div
            className={`${className}`}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.2}}
            initial={{opacity: 0, y: 0}}
            transition={{duration: 0.8, ease: "easeIn"}}
        >
            {children}
        </motion.div>
    );
};

export default MotionSection;