import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='h-[80vh] flex flex-col gap-4 justify-center items-center'>
            <h2 className='font-bold text-5xl  text-red-600'>This Page Is Not Found</h2>
            <Link href='/'>
                <button className='btn bg-primary text-white'>Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;