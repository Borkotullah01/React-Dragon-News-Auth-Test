import HeaderLogo from "../../src/assets/logo.png"
import moment from 'moment';

const Header = () => {

    const date = new Date()
    console.log(date);

    return (
        <div className="grid gap-1 justify-center">
            <img className="pb-3" src={HeaderLogo} alt="" />
            <p className="text-lg text-[#706F6F] text-center">Journalism Without Fear or Favour</p>
            <p className="text-xl text-center">
            {
                moment().format("dddd, MMMM DD, YYYY")
            }
            </p>
        </div>
    );
};

export default Header;