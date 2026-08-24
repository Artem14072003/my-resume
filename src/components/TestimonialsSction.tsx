import MotionSection from "./UI/MotionSection.tsx";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {TESTIMONIALS} from "../constants.ts";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const TestimonialsSction = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [
        Autoplay({delay: 5000})
    ])

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();

    return (
        <MotionSection className={'max-w-300 mx auto px-8 mb-40 relative'}>
            <section>
                <div className={'mb-16 flex justify-between items-end'}>
                    <div>
                        <h2
                            className={'text-[48px] leading-[1.2] tracking-[-0.02em] font-bold text-mercury mb-4'}
                        >
                            Отзывы
                        </h2>
                        <p
                            className={'text-[18px] leading-[1.6] tracking-normal max-w-xl text-submarine'}
                        >
                            Мой подход — превращать сложные макеты в живой код, сохраняя каждую деталь. Так говорят обо мне дизайнеры, с которыми я работал.
                        </p>
                    </div>
                    <div className={'hidden md:flex gap-4'}>
                        <button
                            onClick={scrollPrev}
                            className={'cursor-pointer w-12 h-12 rounded-full border! flex border-limed-spruce! ' +
                                'items-center justify-center text-mercury hover:border-oyster-bay! ' +
                                'hover:text-oyster-bay transition-all skillGlassPanel'}
                        >
                            <ArrowLeft/>
                        </button>
                        <button
                            onClick={scrollNext}
                            className={'cursor-pointer w-12 h-12 rounded-full border! flex border-limed-spruce! ' +
                                'items-center justify-center text-mercury hover:border-oyster-bay! ' +
                                'hover:text-oyster-bay transition-all skillGlassPanel'}
                        >
                            <ArrowRight/>
                        </button>
                    </div>
                </div>

                <div className={'overflow-hidden'} ref={emblaRef}>
                    <div className="flex">
                        {TESTIMONIALS.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className={'min-w-[95%] ml-10 skillGlassPanel p-10 rounded-xl'}
                            >
                                <div className={'flex items-center gap-4 mb-6'}>
                                    <img
                                        src={testimonial.profile}
                                        alt={testimonial.name}
                                        className={'size-16 rounded-full object-cover'}
                                    />
                                    <div>
                                        <h4
                                            className={'test-sm leading-[1.4] tracking-wider text-mercury font-bold'}
                                        >
                                            {testimonial.name}
                                        </h4>
                                        <p
                                            className={'text-xs leading-[1.4] tracking-widest font-medium text-submarine'}
                                        >
                                            {testimonial.subtitle}
                                        </p>
                                    </div>
                                </div>
                                <p
                                    className={'text-base leading-[1.6] tracking-normal italic text-submarine'}
                                >
                                    {testimonial.message}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </MotionSection>
    );
};

export default TestimonialsSction;