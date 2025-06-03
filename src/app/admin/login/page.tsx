/* eslint-disable @next/next/no-img-element */
import React from 'react'

const LoginPage = () => {
    return (
        <div className="auth-main relative">
            <div className="auth-wrapper v1 flex items-center w-full h-full min-h-screen">
                <div className="auth-form flex items-center justify-center grow flex-col min-h-screen relative p-6 ">
                    <div className="w-full max-w-[350px] relative">
                        <div className="auth-bg ">
                            <span className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] block rounded-full bg-theme-bg-1 animate-[floating_7s_infinite]" />
                            <span className="absolute top-[150px] right-[-150px] w-5 h-5 block rounded-full bg-primary-500 animate-[floating_9s_infinite]" />
                            <span className="absolute left-[-150px] bottom-[150px] w-5 h-5 block rounded-full bg-theme-bg-1 animate-[floating_7s_infinite]" />
                            <span className="absolute left-[-100px] bottom-[-100px] w-[300px] h-[300px] block rounded-full bg-theme-bg-2 animate-[floating_9s_infinite]" />
                        </div>
                        <div className="card sm:my-12  w-full shadow-none">
                            <div className="card-body !p-10">
                                <div className="text-center mb-8">
                                    <a href="#">
                                        {/* <img
                                            src={profileImg?.src}
                                            alt="img"
                                            className="mx-auto auth-logo w-[100px]"
                                        /> */} logo
                                    </a>
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="Email Address"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="floatingInput1"
                                        placeholder="Password"
                                    />
                                </div>

                                <div className="mt-4 text-center">
                                    <button
                                        type="button"

                                        className="btn btn-primary mx-auto shadow-2xl"
                                    >
                                        Login
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage