import {motion} from "framer-motion";
import {ArrowRight} from "lucide-react";

const HeroSection = () => {

    const handleProject = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <motion.div
            className={"min-h-screen relative pb-30 pt-14"}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, ease: "easeIn"}}
        >
            <section className={'relative'}>
                <div className="max-w-3xl relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border borderPrimaryColor
                    border-green-500/30 bg-green-500/10  text-green-500 text-xs tracking-wider font-medium mb-8">
                        <span className="size-2 rounded-full plusAnimation bg-green-500"/>
                        Доступен для новых проектов
                    </div>
                    <h1 className="text-[38px] md:text-[52px] leading-[1.1] tracking-[-0.04em] font-extrabold
                    text-mercury mb-6 glowText">Кривенко Артём Михайлович</h1>
                    <h2
                        className={"text-[24px] md:text-[32px] leading-[1.3] tracking-[-0.01em] font-semibold text-submarine mb-6"}
                    >
                        Junior Frontend Engineer
                        <br/>
                        <span className={'text-electric-violet'}>& Креативный разработчик</span>
                    </h2>
                    <p
                        className={"text-[18px] leading-[1.6] text-submarine/80 max-w-2xl mb-12"}
                    >
                        Я занимаюсь цифровым опытом на стеке дизайна и технологий. В основном это мощные веб-приложения,
                        современные подходы и зрелищный пользовательский интерфейс.</p>
                    <div className="flex flex-wrap gap-6">
                        <button
                            onClick={() => handleProject('https://github.com/Artem14072003')}
                            className={'bg-black text-white transition-all primaryBtn px-8 py-3.5 rounded text-sm ' +
                                'leading-[1.4] tracking-wider font-medium flex items-center gap-2 cursor-pointer'}
                        >
                            Посмотреть проекты
                            <ArrowRight className={'animateRight size-4.5 transition-transform duration-500'}/>
                        </button>
                        <a
                            href={'#contact'}
                            className="px-8 py-4 rounded text-sm leading-[1.4] tracking-wider font-medium text-mercury
                        hover:border-limed-spruce/50 hover:bg-shark transition-all cursor-pointer border border-transparent">Написать
                            мне
                        </a>
                    </div>
                </div>
                <div className="absolute right-0 top-1/5 -translate-y-1/5 w-1/2 h-150 hidden lg:block opacity-60">
                    <div className="w-full h-full border border-cyan/20 rounded-full
                    animate-[spin_20s_linear_infinite] border-dashed"/>
                    <div className="absolute inset-8 border border-electric-violet/35 rounded-full
                    animate-[spin_15s_linear_infinite_reverse] border-dashed"></div>
                </div>
            </section>
        </motion.div>
    );
};

export default HeroSection;