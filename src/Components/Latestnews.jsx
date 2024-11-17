
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Latestnews = () => {
    return (
        <div className="w-11/12 mx-auto rounded flex gap-2 items-center bg-base-200 p-2">
          <p className="bg-[#D72050] rounded px-3 py-1">Latest</p>
          <Marquee pauseOnHover={true} speed={100} className="space-x-10">
            <Link to="/news">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
              illum.
            </Link>
            <Link to="/news">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
              illum.
            </Link>
            <Link to="/news">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
              illum.
            </Link>
          </Marquee>
        </div>
      );
    };

export default Latestnews;