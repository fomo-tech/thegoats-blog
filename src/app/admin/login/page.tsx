

'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import logo from '@/assets/images/logo.png'
import Link from 'next/link';
import { Image } from '@/components/ui/Image';
import { useRouter } from 'next/navigation';
import { handleSubmitWithErrorHandling } from '@/utils/asyncHelpers';
import { toast } from 'react-toastify';
import { login } from '@/lib/db/auth';


type PostFormValues = {
    email: string;
    password: string;
};

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<PostFormValues>();
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    const onSubmit = async (formValues: PostFormValues) => {
        setLoading(true);

        // Gọi hàm login
        const loginRes = await handleSubmitWithErrorHandling(
            () => login(formValues.email, formValues.password),
            (err) => toast(err.message),
            setLoading
        );

        if (!loginRes || !loginRes.session) {
            return;
        }

        // Gửi session lên server để lưu cookie HttpOnly
        const setSessionRes = await fetch('/api/auth/set-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                access_token: loginRes.session.access_token,
                refresh_token: loginRes.session.refresh_token,
            }),
        });

        if (!setSessionRes.ok) {

            return;
        }

        router.push('/admin');
    };


    return (
        <div className="auth-main relative">
            <div className="auth-wrapper v1 flex items-center w-full h-full min-h-screen">
                <form className="auth-form flex items-center justify-center grow flex-col min-h-screen relative p-6 "
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="w-full max-w-[350px] relative">
                        <div className="auth-bg ">
                            <span className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] block rounded-full bg-theme-bg-1 animate-[floating_7s_infinite]" />
                            <span className="absolute top-[150px] right-[-150px] w-5 h-5 block rounded-full bg-primary-500 animate-[floating_9s_infinite]" />
                            <span className="absolute left-[-150px] bottom-[150px] w-5 h-5 block rounded-full bg-theme-bg-1 animate-[floating_7s_infinite]" />
                            <span className="absolute left-[-100px] bottom-[-100px] w-[300px] h-[300px] block rounded-full bg-theme-bg-2 animate-[floating_9s_infinite]" />
                        </div>
                        <div className="card sm:my-12  w-full shadow-none">
                            <div className="card-body !p-10">
                                <div className="text-center flex justify-center mb-8">
                                    <Link href="/">
                                        <Image
                                            src={logo.src}
                                            alt='logo'
                                            width={150}
                                        />
                                    </Link>
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="Email Address"
                                        {...register('email', {
                                            required: "Vui lòng nhập email"
                                        })}
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="floatingInput1"
                                        placeholder="Password"
                                        {...register('password', {
                                            required: "Vui lòng nhập mật khẩu"
                                        })}
                                    />
                                </div>

                                <div className="mt-4 text-center">
                                    <button
                                        type="submit"

                                        className="min-w-[100px] flex justify-center btn btn-dark mx-auto shadow-2xl"
                                    >
                                        Login

                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage