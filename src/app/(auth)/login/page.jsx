'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
// export const metadata = {
//     title: "Dragon News | login"
// }
const LoginPage = () => {

    const {register,handleSubmit,formState:{errors}} = useForm();

    const handleLoginSubmit =async(data)=>{
        const {email,password} = data;
        const { data:res, error } = await authClient.signIn.email({
    email: email, // required
    password: password, // required
    rememberMe: true,
    callbackURL: '/',
});
    if(error){
        alert(error.message);
    }
    if(res){
        alert("Login Successful");
    }
    }

    return (
        <div className='container mx-auto min-h-[80vh] flex items-center justify-center bg-slate-100 my-6'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl mb-4 text-center'>Login Your Account</h2>
                <form onSubmit={handleSubmit(handleLoginSubmit)} className='space-y-2' action="">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" 
                        {...register("email",{ required: "email is required" })}
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
                    <button className='btn bg-slate-800 w-full text-white font-medium'>Login</button>
                </form>
                <p className='text-center mt-2'> Don&apos;t have an account?<Link className='text-blue-500 font-medium' href='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;