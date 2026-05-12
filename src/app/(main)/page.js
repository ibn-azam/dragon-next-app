import LeftSideBar from "@/components/HomePage/news/LeftSideBar";
import RightSideBar from "@/components/HomePage/news/RightSideBar";

async function getCategories() {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  return data.data.news_category; 
}

export default async function Home() {
  const categories = await getCategories();

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 mt-6">

      {/* Sidebar - Categories */}
      <aside className="col-span-3 p-4">
       <LeftSideBar categories={categories} activeId={null}/>
      </aside>

      {/* Main Content */}
      <main className="col-span-6 bg-yellow-500 p-4">
        <h2>News Feed</h2>
      </main>

      {/* Right Panel */}
      <aside className="col-span-3  p-4">
        <RightSideBar/>
      </aside>

    </div>
  );
}