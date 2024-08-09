import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";
import { IoLogoGoogle } from "react-icons/io5";
import { Link } from "react-router-dom";
import qZone1 from "../assets/qZone1.png";
import qZone2 from "../assets/qZone2.png";
import qZone3 from "../assets/qZone3.png";

const RightSide = () => {
    return (
        <div className="space-y-10 col-span-1">
            <div className="px-2">
                <h1 className="text-xl font-semibold mb-5">Login With</h1>
                <div className="space-y-3">
                <button className="btn w-full text-base">
                  <IoLogoGoogle></IoLogoGoogle>
                  Login with google
                </button>
                <button className="btn w-full text-base">
                  <FaGithub></FaGithub>
                  Login with github
                </button>
                </div>
                </div>
                <div className="px-2">
                <h1 className="text-xl font-semibold mb-5">Find Us On</h1>
                <div className="">
                <Link className="flex gap-4 px-5 py-3 border items-center w-full text-base font-semibold">
                  <FaFacebookF></FaFacebookF>
                  Facebook
                </Link>
                <Link className="flex gap-4 px-5 py-3 border border-y-0 items-center w-full text-base font-semibold">
                  <FaTwitter></FaTwitter>
                  Twitter
                </Link>
                <Link className="flex gap-4 px-5 py-3 border items-center w-full text-base font-semibold">
                  <FaInstagram></FaInstagram>
                  Instagram
                </Link>
                </div>
                </div>
                <div className="px-2 bg-base-200 py-4">
                <h1 className="text-xl font-semibold mb-5">Q-Zone</h1>
                <div className="">
                <Link className="flex gap-4 px-5 py-3 items-center w-full text-base font-semibold">
                  <img src={qZone1} alt="" />
                </Link>
                <Link className="flex gap-4 px-5 py-3 items-center w-full text-base font-semibold">
                  <img src={qZone2} alt="" />
                </Link>
                <Link className="flex gap-4 px-5 py-3 items-center w-full text-base font-semibold">
                  <img src={qZone3} alt="" />
                </Link>
                </div>
            </div>
        </div>
    );
};

export default RightSide;