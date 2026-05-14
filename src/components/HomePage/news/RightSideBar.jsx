'use client'
import { authClient } from '@/lib/auth-client';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {

    const handleGoogleSignIn =async()=>{
         const data = await authClient.signIn.social({
            provider: "google",
  });
    }
    const handleGithubSignIn =async()=>{
      const data = await authClient.signIn.social({
        provider: "github"
    });
    console.log(data,'data')
    }

    return (
        <div>
            <h2 className='text-lg font-bold mb-2'>Login With</h2>
            <div className='flex flex-col gap-2'>
                <button onClick={handleGoogleSignIn} className='btn text-blue-500 border-blue-500'><FaGoogle/> SignIn with google</button>
                <button onClick={handleGithubSignIn} className='btn'><FaGithub/> SignIn with github</button>
            </div>
        </div>
    );
};

export default RightSideBar;