import LeftSideBar from '@/components/HomePage/news/LeftSideBar';
import NewsCard from '@/components/HomePage/news/NewsCard';
import RightSideBar from '@/components/HomePage/news/RightSideBar';
import { getCategories, getNewsCategoryId } from '@/lib/data';



const CatagoryNewsPage = async({params}) => {
    const {id} = await params;

    const categories = await getCategories();

    const news =await getNewsCategoryId(id);

    
    return (
        <div className="container mx-auto grid grid-cols-12 gap-4 mt-6">

      {/* Sidebar - Categories */}
      <aside className="col-span-3 p-4">
       <LeftSideBar categories={categories} activeId={id}/>
      </aside>

      {/* Main Content */}
      <main className="col-span-6  p-4">
        <h2 className='text-lg font-bold mb-2'>News Feed</h2>
        <div className="">
          {news.length > 0 ?
            news.map((n) => {
              return  <NewsCard news={n} key={n._id}></NewsCard>
            })
           : <h2>No Data Available</h2>
        }
        </div>
      </main>

      {/* Right Panel */}
      <aside className="col-span-3  p-4">
        <RightSideBar/>
      </aside>

    </div>
    );
};

export default CatagoryNewsPage;