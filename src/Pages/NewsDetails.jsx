import { useParams } from "react-router-dom";
import Header from "../Shared/Header";
import Navbar from "../Shared/Navbar";
import RightSide from "./RightSide";

const NewsDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 mt-10">
                <div className="col-span-3">
                <h1 className="text-5xl font-semibold">News Details</h1>
                <p>{id}</p>
                </div>
                <div className="col-span-1">
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;