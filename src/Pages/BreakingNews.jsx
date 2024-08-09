import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex items-center bg-base-200 my-5">
            <button className="btn btn-secondary text-xl">Breaking News</button>
            <Marquee speed={80} pauseOnHover={true} className="cursor-pointer text-lg font-semibold">
              <p className="mx-5">Election Commission Office and Freedom Fighters' Building Vandalized in Sylhet ....</p>
              <p className="mx-5">Fire Breaks Out in Five Garment Factories in Savar ....</p>
              <p className="mx-5">PM's Office Warns of Terrorist Attack, Urges People to Return Home ....</p>
              <p className="mx-5">Awami League Calls for United Resistance Against Anti-Liberation Forces ....</p>
              <p className="mx-5">13 Police Officers Killed in Attack on Sirajganj Police Station ....</p>
              <p className="mx-5">Political Unrest and Protests Across Major Cities ....</p>
              <p className="mx-5">Major Fire at DEPZ Factory in Ashulia ....</p>
              <p className="mx-5">Government Implements Curfew in Dhaka ....</p>
            </Marquee>
        </div>
    );
};

export default BreakingNews;