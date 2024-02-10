import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoBag } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";

const user = {
  _id: "",
  role: "admin",
};
const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const logoutHandler = () => {
    setOpen(false);
  };
  return (
    <div className=" flex justify-between p-5 font-bold bg-slate-950 text-white">
      <div className="ml-2 uppercase tracking-wide ">logo </div>
      <div className="flex">
        <Link
          to={"/"}
          onClick={() => setOpen(false)}
          className=" tracking-wide ml-4"
        >
          HOME
        </Link>
        <Link
          to={"/search"}
          onClick={() => setOpen(false)}
          className="ml-4 pt-1 text-lg "
        >
          <IoMdSearch />
        </Link>
        <Link
          to={"/cart"}
          onClick={() => setOpen(false)}
          className="ml-4 pt-1 text-lg"
        >
          <IoBag />
        </Link>
        {user?._id ? (
          <div className=" flex flex-row-reverse ">
            <div
              onClick={() => setOpen((prev) => !prev)}
              className=" cursor-pointer ml-4 mr-2 pt-1 text-lg"
            >
              <CgProfile />
            </div>

            <div className=" z-10 relative drop-shadow-md select-none  ">
              <dialog className=" -left-7 top-8 " open={open}>
                {user.role === "admin" && (
                  <div className=" p-2  ">
                    <Link onClick={() => setOpen(false)} to="/admin/dashboard">
                      Admin
                    </Link>{" "}
                    <br />
                    <Link onClick={() => setOpen(false)} to="/order">
                      Order
                    </Link>
                  </div>
                )}
                <p
                  className=" cursor-pointer flex justify-center pb-2 "
                  onClick={logoutHandler}
                >
                  <IoIosLogOut />
                </p>
              </dialog>
            </div>
          </div>
        ) : (
          <Link className="ml-4" to={"/login"}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
