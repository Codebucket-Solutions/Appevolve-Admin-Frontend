import React from 'react';
import right_bottom__img from '../../assets/auth/rightside_banner_login.png'
import { Input } from '@/components/ui/input';



const Login = () => {
    return (
        <div className="flex w-full h-screen">
            {/* Left Container: Login Section */}
            <div className="flex flex-col justify-center items-start w-[50vw] p-20 xl:p-20 dark:bg-[#000000] bg-white rounded-l-lg">
                <div className="flex items-center mb-10">
                    {/* <div className="text-blue-500 mr-2 text-xl">
                        <FaCloud />
                    </div> */}
                    <span className="text-white font-bold">IntellectCloud</span>
                </div>
                <h1 className="text-3xl font-semibold text-white mb-2">Welcome Admin</h1>
                <p className="text-white mb-8">Enter your email and password to access your account</p>

                <form className="w-full">
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-white text-sm font-medium mb-2">Email *</label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Enter Email"
                            className="w-full p-4 rounded-md focus:outline-none  h-12"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-white text-sm font-medium mb-2">Password *</label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Enter Password"
                            className="w-full p-4 bg-black border rounded-md focus:outline-none  h-12"
                        />
                    </div>

                    <div className="flex justify-end mb-8">
                        <a href="#" className="text-sm text-white underline hover:text-blue-500 transition-colors">Forgot Password?</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-white text-black font-bold py-3 px-4 rounded-md transition-colors"
                    >
                        Login
                    </button>
                </form>
            </div>


            <div className="relative w-full h-full flex flex-col pt-20 pl-42 overflow-hiddenborder-2">
                {/* Top Image */}
                {/* <img
                    src={right_top_img}
                    alt="Dashboard Preview"
                    className="object-cover w-full h-full"
                /> */}



                {/* <div className="absolute right-0  top-0 h-64 rounded-full bg-gradient-radial from-purple-500/40 via-transparent to-transparent" /> */}
                {/* <div className="absolute -right-70  top-0 size-300 rounded-full bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90% opacity-10" /> */}
                {/* */}
                <img
                    src={right_bottom__img}
                    alt="Dashboard Preview"
                    className="object-fit h-[90%] right-0 absolute"
                />

            </div>

        </div>

    );
};

export default Login;