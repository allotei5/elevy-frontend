import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FiChevronLeft, FiCreditCard, FiHome, FiPrinter } from "react-icons/fi";

const Dashboard = () => {
    const [open, setOpen] = useState(true);

    const Menus = [
        { title: "Dashboard", path: "/", icon: <FiHome size="25px" />},
        { title: "Media", path: "/media", icon: <FiPrinter size="25px" />},
        { title: "Publication", path: "/publication", icon: <FiPrinter size="25px" />},
    ]
    // "h-screen bg-red-900 p-5 pt-8 relative"

    return (
      <div className="flex">
        <div
          className={`${
            open ? "w-72" : "w-20"
          } duration-300 md:bg-red-900 relative md:pt-8 md:left-0 h-16 md:h-screen p-5`}
        >
          <FiChevronLeft
            onClick={() => setOpen(!open)}
            className={`absolute bg-white cursor-pointer text-red-900 text-3xl rounded-full -right-3 top-9 w-7 border-2 border-red-900 ${
              !open && "rotate-180"
            }`}
          />
          <div className="flex gap-x-4 items-center">
            <div className="">
              <FiCreditCard
                className={`cursor-pointer duration-500 text-white`}
                size="30px"
              />
            </div>
  
            <h1
              className={`text-white origin-left font-medium text-xl ${
                !open && "scale-0 duration-100"
              }`}
            >
              Elevy News
            </h1>
          </div>
          <ul className="pt-6">
              {
                Menus.map((menu, index) => (
                    <Link to={menu.path} key={index} className="text-white text-sm flex items-center gap-x-4 cursor-pointer my-5 py-3 px-2 rounded hover:bg-white hover:bg-opacity-25 hover:duration-300">
                        <div>{menu.icon}</div>
                        
                        <span className={`ml-5 ${!open && "scale-0 duration-100"}`}> {menu.title}</span>
                    </Link>
                ))
              }
          </ul>
        </div>
        <div className="p-7 text-2xl font-semibold flex-1 h-screen">
            <Outlet />
        </div>
      </div>
    );
}

export default Dashboard