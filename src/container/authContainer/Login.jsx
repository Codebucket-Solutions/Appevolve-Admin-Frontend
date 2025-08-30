"use client"

import React, { useState } from "react"
import right_bottom__img from "../../assets/auth/screenshot-appevolve.png"
import { Input } from "@/components/ui/input"
import logo from "../../assets/logos/square_logo.png"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff } from "lucide-react"

const Login = ({ onLogin, onForgotPassword }) => {
    const [isForgot, setIsForgot] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const handleForgotSubmit = (e) => {
        e.preventDefault()
        const email = (e.currentTarget.elements.namedItem("email")).value
        if (onForgotPassword) {
            onForgotPassword(email)
        }
        alert(`Password reset link sent to ${email}`)
    }

    return (
        <div className="flex w-full h-screen">
            {/* Left Container */}
            <div className="flex flex-col justify-center items-start md:w-[50vw] p-20 xl:p-20 dark:bg-[#151515] bg-white rounded-l-lg">
                <div className="flex items-center mb-8">
                    <img src={logo} alt="logo" className="object-fit h-[80px]" />
                </div>

                {!isForgot ? (
                    <>
                        <h1 className="text-3xl font-semibold text-white mb-2">Welcome Admin</h1>
                        <p className="text-white mb-8">
                            Enter your email and password to access your account
                        </p>

                        <form className="w-full" onSubmit={onLogin}>
                            <div className="mb-6">
                                <label
                                    htmlFor="email"
                                    className="block text-white text-md mb-2"
                                >
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter Email"
                                    className="w-full p-4 rounded-[4px] focus:outline-none h-12 
             border border-[#D5D5D5] dark:border-[#676879] 
             bg-black text-white placeholder:text-[#676879]"
                                    required
                                />

                            </div>

                            <div className="mb-4 relative">
                                <label
                                    htmlFor="password"
                                    className="block text-white text-md mb-2"
                                >
                                    Password
                                </label>
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter Password"
                                    className="w-full p-4 pr-12 bg-black border rounded-[4px] focus:outline-none h-12 border-[#D5D5D5] dark:border-[#676879] placeholder:text-[#676879]"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-[45px] text-gray-400 hover:text-white"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>

                            <div className="flex justify-end mb-8">
                                <button
                                    type="button"
                                    className="text-sm text-white underline hover:text-blue-500 transition-colors border-[#D5D5D5] dark:border-[#676879] placeholder:text-[#676879]"
                                    onClick={() => setIsForgot(true)}
                                >
                                    Forgot Password?
                                </button>
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-white text-[#323338] text-lg py-3 px-4 rounded-[4px] transition-colors h-12"
                            >
                                Login
                            </Button>
                        </form>

                    </>
                ) : (
                    <>
                        <h1 className="text-3xl font-semibold text-white mb-2">Reset Password</h1>
                        <p className="text-white mb-8">Enter your email to receive a reset link</p>

                        <form className="w-full" onSubmit={handleForgotSubmit}>
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                                    Email *
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter Email"
                                    className="w-full p-4 rounded-[4px] focus:outline-none h-12  border-[#D5D5D5] dark:border-[#676879] placeholder:text-[#676879]"
                                    required
                                />
                            </div>

                            <div className="flex justify-between mb-8">
                                <button
                                    type="button"
                                    className="text-sm text-white underline hover:text-blue-500 transition-colors"
                                    onClick={() => setIsForgot(false)}
                                >
                                    Back to Login
                                </button>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white text-[#323338] text-lg py-3 px-4 rounded-[4px] transition-colors h-12"
                            >
                                Send Reset Link
                            </button>
                        </form>
                    </>
                )}
            </div>

            {/* Right Container */}
            <div className="relative w-full min-h-screen md:flex flex-col pt-20 pl-42 overflow-hidden bg-[#000000] hidden">
                <img
                    src={right_bottom__img}
                    alt="Dashboard Preview"
                    className="object-fit h-full top-0 right-0 absolute"
                />
            </div>
        </div>
    )
}

export default Login
