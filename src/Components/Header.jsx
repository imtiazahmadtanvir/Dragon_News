import logo from "../assets/logo.png"
import moment from "moment";
const Header = () => {
    return (

    <div className="flex flex-col justify-center items-center gap-2 py-2">
           
           <div className="logo mx-auto ">
                  <img className="w-[300px]" src={logo} alt="Logo"  />
           </div> 
           <div>           
                <h2 className="text-base-300 text-center">
                        Journalism Without Fear or Favour
                </h2> 
           </div>
           <div className="text-base-300">
                <p>{moment().format("dddd, MMMM Do YYYY")}</p>
           </div>


   
    </div>
    );
};

export default Header;