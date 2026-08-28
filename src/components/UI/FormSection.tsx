import {type Dispatch, type SetStateAction, useState} from 'react';
import {useForm, type SubmitHandler} from "react-hook-form"
import emailjs from '@emailjs/browser'

interface IDataEmail {
    name: string,
    email: string,
    subject: string,
    message: string
}

type TAlert = {
    show: boolean,
    isError: boolean | null,
    text: string
}

const FormSection = ({setFormKey, formKey, setShowAlert}: {
    formKey: number,
    setFormKey: Dispatch<SetStateAction<number>>,
    setShowAlert: Dispatch<SetStateAction<TAlert>>
}) => {
    const [isLoading, setIsLoading] = useState(false);

    const {register, handleSubmit, formState: {errors}, reset} = useForm<IDataEmail>({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    });

    const sendEmail: SubmitHandler<IDataEmail> = (data) => {
        if (!data) return;

        setFormKey((prev) => prev + 1);
        setIsLoading(true);
        reset();

        emailjs
            .send(
                'service_gktkds5',
                'template_1ytw7zr',
                {...data},
                {publicKey: 'bxfeVnF8BcRDq8CPe'}
            )
            .then(
                () => {
                    setShowAlert({
                        isError: null,
                        show: true,
                        text: 'Успешная отправка формы!',
                    });
                    setIsLoading(false)
                    setTimeout(() => {
                        setShowAlert((prev) => ({...prev, show: false, text: ''}));
                    }, 7500);
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    setIsLoading(false)
                    setShowAlert({
                        isError: true,
                        show: true,
                        text: `Ошибка: ${error.text}`,
                    });
                    setTimeout(() => {
                        setShowAlert((prev) => ({...prev, show: false, text: ''}));
                    }, 7500);
                    setTimeout(() => {
                        setShowAlert((prev) => ({...prev, isError: null}));
                    }, 9000);
                }
            );
    };

    return (
        <form
            key={formKey}
            onSubmit={handleSubmit(sendEmail)}
            className={'space-y-6'}
        >
            <div className={'grid grid-cols-1 md:grid-cols-2 gap-6'}>
                <div className={'flex gap-2 flex-col'}>
                    <label
                        className={'text-sm text-submarine'}
                    >
                        Имя
                    </label>
                    <input
                        type="text"
                        placeholder={'Артём'}
                        className={'w-full px-4 py-3 bg-white border-pale-sky text-base leading-6 formInput text-black'}
                        {...register('name', {
                            required: 'Введите своё имя!',
                            minLength: {
                                value: 2,
                                message: 'Имя должно содержать минимум 2 символа'
                            },
                            maxLength: {
                                value: 50,
                                message: 'Имя не должно превышать 50 символов'
                            },
                            pattern: {
                                value: /^[А-ЯЁа-яё-]+$/,
                                message: 'Введи корректное имя!'
                            }
                        })}
                    />
                    {errors.name &&
                        <span className={'text-red-400 text-xs pl-2'}>{errors.name.message}</span>
                    }
                </div>
                <div className={'flex gap-2 flex-col relative'}>
                    <label
                        className={'text-sm text-submarine'}
                    >
                        Почта
                    </label>
                    <input
                        type={'email'}
                        placeholder={'test@gmail.ru'}
                        className={'w-full px-4 py-3 bg-white border-pale-sky text-base leading-6 formInput text-black'}
                        {...register('email', {
                            required: 'Введите почту!',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Введите корректный email'
                            }
                        })}
                    />
                    {errors.email &&
                        <span className={'text-red-400 text-xs pl-2'}>{errors.email.message}</span>
                    }
                </div>
            </div>
            <div className={'flex gap-2 flex-col '}>
                <label
                    className={'text-sm text-submarine'}
                >
                    Ваша должность
                </label>
                <input
                    type={'text'}
                    placeholder={'HR-менеджер'}
                    className={'w-full px-4 py-3 bg-white border-pale-sky text-base leading-6 formInput text-black'}
                    {...register('subject', {
                        required: 'Введите должность!',
                        minLength: {
                            value: 2,
                            message: 'Введи корректную должность!'
                        },
                        maxLength: {
                            value: 50,
                            message: 'Слишком длинная должность!'
                        },
                        pattern: {
                            value: /^[A-Za-zА-Яа-яЁё\s\-.]+$/,
                            message: 'Введи корректную должность!'
                        }
                    })}
                />
                {errors.subject &&
                    <span className={'text-red-400 text-xs pl-2'}>{errors.subject.message}</span>
                }
            </div>
            <div className={'flex gap-2 flex-col '}>
                <label
                    className={'text-sm text-submarine'}
                >
                    Сообщение
                </label>
                <textarea
                    rows={5}
                    placeholder={'Введите ваш текст'}
                    className={'w-full px-4 py-3 bg-white resize-none border-pale-sky ' +
                        'text-base leading-6 formInput text-black'}
                    {...register('message', {
                        required: 'Введите сообщение!',
                        minLength: {value: 10, message: 'Минимум 10 символов'},
                        maxLength: {value: 500, message: 'Не более 500 символов'}
                    })}
                />
                {errors.message &&
                    <span className={'text-red-400 text-xs pl-2'}>{errors.message.message}</span>
                }
            </div>
            <button
                type={'submit'}
                disabled={isLoading}
                className={'w-full py-4 mt-4 bg-mercury text-woodsmoke text-sm ' +
                    'leading-[1.4] tracking-wider font-medium rounded border border-transparent ' +
                    'transition-all ' +
                    `duration-300 ${!isLoading ? 'hover:text-mercury hover:border-cyan ' +
                        'hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:bg-transparent cursor-pointer'
                        : 'cursor-default'}`}
            >
                Отправить сообщение
            </button>
        </form>
    );
};

export default FormSection;