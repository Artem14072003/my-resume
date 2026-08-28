import {motion} from "framer-motion";
import React from "react";

const Alert = ({isError, text, visible, duration}: {
    isError: boolean | null,
    text: string,
    visible: boolean,
    duration: number
}) => {
    return (
        <motion.div
            className={'fixed bottom-[30px] right-3 leading-[1.4] tracking-[-0.01em] font-medium text-woodsmoke ' +
                `text-base p-2 overflow-hidden ${isError ? 'bg-red-400' : 'bg-cyan'}`}
            initial={{opacity: 0, y: 30}}
            animate={visible ? {opacity: 1, y: 0} : {opacity: 0, y: 30}}
            transition={{duration: 0.8, ease: "easeIn"}}
        >
            {text}
            <motion.div
                className={'absolute bottom-0 left-0 h-[4px] w-full bg-woodsmoke/70 origin-left'}
                initial={false}
                animate={visible ? {scaleX: [1, 0]} : {scaleX: 0}}
                transition={{
                    duration: duration,
                    ease: "linear"
                }}
            />
        </motion.div>
    );
};

export default React.memo(Alert);