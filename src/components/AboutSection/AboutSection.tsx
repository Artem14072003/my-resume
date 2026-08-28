import {SquareCode} from "lucide-react";
import BlockArsenal from "./BlockArsenal/BlockArsenal.tsx";
import BlockSkills from "./BlockSkills/BlockSkills.tsx";
import MotionSection from "../UI/MotionSection.tsx";

const AboutSection = () => {
    return (
        <MotionSection
            className={"relative py-30"}
        >
            <section id={'about'}>
                <h2 className={'text-[32px] md:text-[48px] leading-[1.2] tracking-[-0.02em] font-bold mb-16 text-mercury'}>
                    Мой путь
                </h2>
                <div className={'grid grid-cols-1 lg:grid-cols-2 mb-24 gap-8'}>
                    <div className={'space-y-6 text-submarine text-base md:text-[18px] leading-[1.6] tracking-normal'}>
                        <p>
                            Всё началось с обычного текстового редактора — тогда меня заворожила магия превращения
                            логических конструкций в зримые образы. Десять лет спустя я прошёл через множество сте́кей и
                            технологий, но неизменным остаётся одно: моё сердце принадлежит фронтенду, тому самому
                            месту,
                            где сухой код обретает плоть интерфейса.
                        </p>
                        <p>Всё началось с обычного текстового редактора — тогда меня заворожила магия превращения
                            логических
                            конструкций в зримые образы. Десять лет спустя я прошёл через множество сте́кей и
                            технологий, но
                            неизменным остаётся одно: моё сердце принадлежит фронтенду, тому самому месту, где сухой код
                            обретает плоть интерфейса.</p>
                        <p>
                            Вне работы я не расстаюсь с кодом: экспериментирую с генеративным искусством, помогаю
                            развивать открытые UI-библиотеки и постоянно ищу новые грани взаимодействия формы и функции.
                        </p>
                    </div>
                    <div className={'relative h-100 lg:h-auto rounded-xl overflow-hidden ' +
                        'glassPanel flex items-center justify-center group'}>
                        <div
                            className={'absolute inset-0 ' +
                                'bg-[radial-gradient(circle_at_center, rgba(0, 240, 255, 0.05)_0%, transparent_100%)' +
                                'group-hover:bg-[radial-gradient(circle_at_center, rgba(0, 240, 255, 0.05)_0%, ' +
                                'transparent_100%) transition-all duration-500'}
                        />
                        <div className={'relative size-48'}>
                            <div className={'absolute inset-0 border-2 rounded-lg border-cyan transform rotate-45 ' +
                                'group-hover:rotate-90 transition-transform duration-700 ease-in-out ' +
                                'shadow-[0_0_30px_rgba(0,240,255,0.2)]'}
                            />
                            <div
                                className={'absolute inset-4 border-2 rounded-lg border-electric-violet transform -rotate-12 ' +
                                    'group-hover:-rotate-45 transition-transform duration-700 ease-in-out delay-75 ' +
                                    'shadow-[0_0_20px_rgba(182,0,248,0.2)'}
                            />
                            <div className={"absolute inset-0 flex justify-center items-center"}>
                                <SquareCode className={'size-12 text-mercury'}/>
                            </div>
                        </div>
                    </div>
                </div>
                <BlockArsenal/>
                <BlockSkills/>
            </section>
        </MotionSection>
    )
        ;
};

export default AboutSection;