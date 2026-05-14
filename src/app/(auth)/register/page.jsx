'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
// export const metadata = {
//     title: "Dragon News | login"
// }
const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegisterSubmit = async (data) => {
        const { name, photo, email, password } = data;

        const { data:res,error} = await authClient.signUp.email({
            name: name ,
            email: email , // required
            password: password, // required
            image: photo,
            callbackURL: '/',
        });
        console.log(res, error)
    }

    return (
        <div className='container mx-auto min-h-[100vh] flex items-center justify-center bg-slate-100 my-6'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl mb-4 text-center'>Register Your Account</h2>
                <form onSubmit={handleSubmit(handleRegisterSubmit)} className='space-y-2' action="">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text"
                            {...register("name", { required: "name is required" })}
                            className="input" placeholder="Type your name" />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input type="text"
                            {...register("photo", { required: "photo url is required" })}
                            className="input" placeholder="Type your name" />
                        {errors.photo && <p className='text-red-600'>{errors.photo.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email"
                            {...register("email", { required: "email is required" })}
                            className="input" placeholder="Type your email" />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password"
                            {...register("password", { required: "password is required" })}
                            className="input" placeholder="Type your password" />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </fieldset>
                    <button className='btn bg-slate-800 w-full text-white font-medium'>Register</button>
                </form>
                <p className='text-center mt-2'> Already have account?<Link className='text-blue-500 font-medium' href='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default RegisterPage;