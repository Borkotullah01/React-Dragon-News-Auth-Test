import Header from "../Shared/Header";
import BreakingNews from "./BreakingNews";
import Navbar from "../Shared/Navbar";
import NewsCategory from "./NewsCategory";
import LeftCard from "./LeftCard";

import NewsCard from "./NewsCard";
import RightSide from "./RightSide";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const news = useLoaderData()
    console.log(news);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid gap-5 grid-cols-4 mt-10">
                <div className="col-span-1">
                    <h1 className="text-xl font-semibold mb-5">All Caterogy</h1>
                    <NewsCategory></NewsCategory>
                    <LeftCard></LeftCard>
                </div>
                <div className="col-span-2">
                    <h1 className="text-xl font-semibold mb-5">Dragon News Home</h1>
                    {news.map(aNews=><NewsCard key={aNews._id} aNews={aNews}></NewsCard>)}
                </div>
                <div>
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default Home;