'use client'
import Image from 'next/image';
import Link from 'next/link';
import userAvatar from '@/assets/user.png'
import Navlink from './Navlink';
import { authClient} from '@/lib/auth-client';
const Navbar = () => {
    const {data: session,isPending} = authClient.useSession();
    const user = session?.user
    console.log(user,'session')
    return (
        <div className='container mx-auto flex justify-between gap-4 mt-6'>
            <div></div>
           <ul className='flex items-center gap-2 text-gray-700'>
            <li><Navlink href='/'>Home</Navlink></li>
            <li><Navlink href='/about'>About</Navlink></li>
            <li><Navlink href='/career'>Career</Navlink></li>
           </ul>
           {isPending ?(<span className="loading loading-spinner text-error"></span>) :user ? (
            <div className='flex gap-2 items-center'>
            <h2>Hellow,{user.name}</h2>
            <Image src={user.image || userAvatar} alt='User Avatar' width={40} height={40}/>
            <Link href="/">
                <button onClick={async()=>await authClient.signOut()} className='btn bg-red-600 text-white'>Log Out</button>
            </Link>
           </div>
           ):(
            <Link href="/login">
                <button className='btn bg-red-600 text-white'>Log In</button>
            </Link>
           )}
        </div>
    );
};

export default Navbar;