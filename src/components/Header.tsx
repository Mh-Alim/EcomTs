import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoBag } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";

const user = {
  _id: "12322",
  role: "admin",
};
const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const logoutHandler = () => {};
  return (
    <div className="flex justify-between p-2 font-bold bg-slate-950 text-white">
      <div className="ml-2">Logo</div>
      <div className="flex">
        <Link to={"/home"} className="ml-4">
          Home
        </Link>
        <Link to={"/search"} className="ml-4 pt-1 text-lg ">
          <IoMdSearch />
        </Link>
        <Link to={"/order"} className="ml-4 pt-1 text-lg">
          <IoBag />
        </Link>
        {user._id ? (
          <>
            <div onClick={() => setOpen((prev) => !prev)} className="ml-4 mr-2 pt-1 text-lg">
              <CgProfile />
            </div>
            <dialog open={open}>
              <p onClick={logoutHandler}>
                <IoIosLogOut />
              </p>
              {user.role === "admin" && (
                <>
                  <Link to="/admin/dashboard">Admin</Link>
                  <Link to="/order">Order</Link>
                </>
              )}
            </dialog>
          </>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
