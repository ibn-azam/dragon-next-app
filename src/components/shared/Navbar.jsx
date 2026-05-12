import Image from 'next/image';
import Link from 'next/link';
import userAvatar from '@/assets/user.png'
import Navlink from './Navlink';

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between gap-4 mt-6'>
            <div></div>
           <ul className='flex items-center gap-2 text-gray-700'>
            <li><Navlink href='/'>Home</Navlink></li>
            <li><Navlink href='/about'>About</Navlink></li>
            <li><Navlink href='/career'>Career</Navlink></li>
           </ul>
           <div className='flex gap-2 items-center'>
            <Image src={userAvatar} alt='User Avatar' width={40} height={40}/>
            <Link href="/login">
                <button className='btn bg-red-600 text-white'>Log In</button>
            </Link>
           </div>
        </div>
    );
};

export default Navbar;