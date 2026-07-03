import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full sticky  flex items-center justify-between px-6 sm:px-10 py-4 bg-amber-50 border-b border-olive-200 font-serif">
      {/* Logo */}
      <div className="">
        <svg width="180" height="36" viewBox="0 0 190 36" xmlns="http://www.w3.org/2000/svg">
          <text
            x="0"
            y="26"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="26"
            letterSpacing="4"
            fill="#3f3b2e"
          >
            NASHRAE
          </text>
          {/* small diamond accent */}
          <path d="M180 18 L184 12 L188 18 L184 24 Z" fill="#b08d57" />
        </svg>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-5 sm:gap-8">
        {/* Search bar - desktop */}
        <div className="hidden sm:flex items-center border border-olive-300 rounded-full px-4 py-1.5 bg-white/60">
          <i className="fa-solid fa-magnifying-glass text-olive-700 text-sm mr-2"></i>
          <input
            type="text"
            placeholder="Search jewelry..."
            className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 w-32 sm:w-44"
          />
        </div>

        {/* Search icon - mobile only */}
        <i className="fa-solid fa-magnifying-glass sm:hidden text-lg text-olive-700 cursor-pointer"></i>

        {/* Wishlist */}
        <i className="fa-regular fa-heart text-lg text-olive-700 cursor-pointer"></i>

        {/* Cart */}
        <div className="relative cursor-pointer">
          <i className="fa-solid fa-bag-shopping text-lg text-olive-700"></i>
          <span className="absolute -top-2 -right-2 bg-[#b08d57] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;