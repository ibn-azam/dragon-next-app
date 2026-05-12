import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({categories,activeId}) => {
    return (
        <div>
             <h2 className="text-lg font-bold mb-2">All Categories</h2>
        <ul className="space-y-1 mt-4">
          {categories.map((category) => (
            <li className={`${activeId === category.category_id ? "bg-red-600 text-white" : "bg-slate-100"}      p-2 text-md font-bold rounded-lg`} key={category.category_id}>
              <Link className='block' href={`/category/${category.category_id}`}>
              {""}
              {category.category_name}</Link>
            </li>
          ))}
        </ul>
        </div>
    );
};

export default LeftSideBar;