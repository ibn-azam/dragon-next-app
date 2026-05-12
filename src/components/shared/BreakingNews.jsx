import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
  {
    "id": 1,
    "title": "Global Tech Conference Opens in Singapore"
  },
  {
    "id": 2,
    "title": "National Team Wins International Cricket Series"
  },
  {
    "id": 3,
    "title": "New Renewable Energy Project Announced"
  }
]

const BreakingNews = () => {
    return (
        <div className='bg-gray-200 flex justify-between items-center py-4 px-2 container mx-auto'>
            <button className='btn bg-red-600 text-white'>Latest News</button>
            <Marquee pauseOnHover={true} speed={100}>
               {
                news.map(n =>
                    <span key={n.id}>{n.title}</span>
                )
               }
            </Marquee>
        </div>
    );
};

export default BreakingNews;