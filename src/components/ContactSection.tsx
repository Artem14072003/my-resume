import MotionSection from "./UI/MotionSection.tsx";
import {Mail, MapPin} from "lucide-react";
import {useState} from "react";
import FormSection from "./UI/FormSection.tsx";
import Alert from "./UI/Alert.tsx";

export const ContactSection = () => {

    const [formKey, setFormKey] = useState(0);
    const [showAlert, setShowAlert] = useState<{
        show: boolean,
        isError: boolean | null,
        text: string
    }>({
        show: false,
        isError: null,
        text: ''
    });
    return (
        <MotionSection className={'max-w-300 mx-auto px-8'}>
            <section id={'contact'}>
                <div className={'grid grid-cols-1 lg:grid-cols-2 gap-16'}>
                    <div>
                        <h2
                            className={'text-[20px] lg:text-[42px] tracking-[-0.04em] font-extrabold ' +
                                'text-mercury mb-6 leading-tight'}
                        >
                            Открыт к партнерству
                            <br/>
                            <span className={'text-cyan neonText'}>и проектам</span>
                        </h2>
                        <p className={'text-[18px] leading-[1.6] tracking-normal text-submarine mb-12 max-w-md'}>
                            Есть идея, задача или просто хотите, что-то написать? Напишите — я с удовольствием отвечу.
                        </p>
                        <div className={'flex items-start gap-6 group mb-3'}>
                            <div
                                className={'w-12 h-12 rounded-full border! flex items-center border-limed-spruce! ' +
                                    'justify-center text-cyan transition-all! group-hover:border-cyan! skillGlassPanel'}
                            >
                                <Mail/>
                            </div>
                            <div>
                                <p
                                    className={'text-xs leading-[1.4] tracking-widest font-medium text-submarine mb-1'}
                                >
                                    Почта
                                </p>
                                <a
                                    href="mailto:krivenko.artyom@mail.ru"
                                    className={'text-[20px] md:text-[32px] leading-[-0.01em] font-semibold text-submarine ' +
                                        'hover:text-cyan transition-colors'}
                                >
                                    krivenko.artyom@mail.ru
                                </a>
                            </div>
                        </div>
                        <div className={'flex items-start gap-6 group'}>
                            <div
                                className={'w-12 h-12 rounded-full border! flex items-center border-limed-spruce! ' +
                                    'justify-center text-mauve transition-all! group-hover:border-mauve! skillGlassPanel'}
                            >
                                <MapPin/>
                            </div>
                            <div>
                                <p
                                    className={'text-xs leading-[1.4] tracking-widest font-medium text-submarine mb-1'}
                                >
                                    Локация
                                </p>
                                <a
                                    href="https://yandex.ru/maps/geo/sergiyev_posad/53063289/?ll=38.103399%2C56.290729&z=12"
                                    target={'_blank'}
                                    className={'text-[32px] leading-[1.3] tracking-[-0.01em] font-semibold text-submarine ' +
                                        'hover:text-mauve transition-colors'}
                                >
                                    МО, г. Сергиев Посад
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={'skillGlassPanel p-10 rounded-xl lg:ml-8'}>
                        <FormSection
                            formKey={formKey}
                            setFormKey={setFormKey}
                            setShowAlert={setShowAlert}
                        />
                    </div>
                </div>
                <Alert
                    isError={showAlert.isError}
                    text={showAlert.text}
                    visible={showAlert.show}
                    duration={8}
                />
            </section>
        </MotionSection>
    );
};