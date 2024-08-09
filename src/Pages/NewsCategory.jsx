import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NewsCategory = () => {

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch("/categories.json")
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    console.log(categories);
    return (
        <div className="grid gap-1 grid-cols-1 text-xl font-medium text-gray-400">
            {
                categories.map(ctg=><Link className="py-2 px-8 rounded-lg hover:text-black transition-all  hover:bg-base-200" key={ctg.id}>{ctg.name}</Link>)
            }
        </div>
    );
};

export default NewsCategory;