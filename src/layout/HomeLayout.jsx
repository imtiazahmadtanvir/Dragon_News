import Header from "../Components/Header";
import Latestnews from "../Components/Latestnews";
import Navbar from "../Components/Navbar";
import LeftNavbar from "../Components/layout-component/LeftNavbar";
import RightNav from "../Components/layout-component/RightNav";
import { Outlet } from "react-router-dom";


const HomeLayout = () => {
    return (
        <div className="bg-white py-7">
        
            <Header></Header>
            <section>
            <Latestnews></Latestnews>
            </section>
            <nav className="w-11/12 mx-auto py-2">
              <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
        <aside className="left col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
            <footer></footer>
        </div>
    );
};

export default HomeLayout;