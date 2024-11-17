import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center h-full space-y-4">
           
           <div className="logo mx-auto w-11/12">
           <img className="w-[300px]" src={logo} alt="Logo"  />
            </div> 

            <h2 className="text-base-300">
                       Journalism Without Fear or Favour
            </h2>    
        </div>
    );
};

export default Header;