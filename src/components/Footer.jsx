import React from "react";
import { FiHome, FiShoppingCart, FiAlignJustify } from "react-icons/fi";
import { TbCategoryMinus } from "react-icons/tb";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white shadow-t h-16 ">
      <div className="flex justify-center gap-16 p-6 text-2xl">
        <Link to="/">
          <FiHome className=" text-red-600"/>
        </Link>
        <Link to="/categories">
          <TbCategoryMinus />
        </Link>
        <Link to="/cart">
          <FiShoppingCart />
        </Link>
        <Link to="/more">
          <FiAlignJustify />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
