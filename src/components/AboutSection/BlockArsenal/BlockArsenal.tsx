import {motion} from "framer-motion";
import {TECH_STACK} from "../../../constants.ts";

const BlockArsenal = () => {
    return (
        <div className={'mb-16'}>
            <h3 className={'text-[28px] md:text-[32px] leading-[1.3] tracking-[0.03em] font-semibold text-mercury mb-8'}>
                Основной арсенал
            </h3>
            <div className={"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"}>
                {TECH_STACK.map(({label: text, id, icon: Icon}, idx) => (
                    <motion.div
                        key={id + text}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, amount: 0.2}}
                        initial={{opacity: 0, y: 15}}
                        transition={{
                            delay: idx * 0.2,
                            ease: "easeOut",
                            duration: 0.2,
                        }}
                        className={
                            'glassPanel p-4 flex flex-col rounded-lg items-center justify-center ' +
                            'gap-2 hover:-translate-y-1 transition-transform'
                        }
                    >
                        < Icon className={'text-cyan'}/>
                        <span className={'text-xs leading-[1.4] tracking-widest font-medium text-mercury'}>{text}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default BlockArsenal;