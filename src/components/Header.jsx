import React from 'react'
import { Search, User } from "lucide-react";

function Header() {
  return (
    <header className="bg-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Add your equipment</h1>
        <div className="relative w-3/5">
          <input
            type="text"
            placeholder="Enter Equipment Name"
            className="w-full p-2 pl-4 pr-10 rounded-lg border border-gray-300"
          />
          <Search className="absolute top-2 right-3 text-gray-500" />
        </div>
        <User className="text-gray-500" />
      </div>
    </header>
  )
}

export default Header