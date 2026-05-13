import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2, CiStar } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";


const NewsCard = ({news}) => {
    return (
     <div className="card bg-base-100 shadow-sm">
  <div className="card-body">

      
      <div className="flex justify-between items-center bg-slate-200 py-2 px-4 rounded-md">
        <div>
            {/* <Image src={news.author?.img} 
            width={40} 
            height={40}
            alt={news.author?.name}/> */}
           <div>
             <h2 className="font-semibold">{news.author?.name}</h2>
            <h2 className="text-xs">{news.author?.published_date}</h2>
           </div>
        </div>
        <div className="flex items-center gap-2">
            <CiShare2 className="text-xl"/>
            <CiBookmark className="text-xl"/>
        </div>
      </div>

    <h2 className="card-title">{news.title}</h2>
    <figure>
    <Image
      src={news.image_url}
      alt={news.title}
      width={300}
      height={300} 
      className="w-full"/>
  </figure>
  <p className="line-clamp-3">{news.details}</p>

  <div className="flex justify-between items-center">
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        <span><IoIosStar className="text-xl"/></span>
      <h2>{news.rating.number}</h2>
      </div>
      <h2>{news.total_view}</h2>
    </div>
    <div>
      <Link href={`/news/${news._id}`}>
        <button className="btn btn-accent"><FaEye className="text-xl"/> See Details</button>
      </Link>
    </div>
  </div>
  </div>
  
</div>
    );
};

export default NewsCard;