"use client"

import { SidebarRoutes } from "./sidebar-routes"
import Image from "next/image"

export function Sidebar() {

  return (
    <>
      <div className="h-full flex flex-col justify-between border-r shadow-sm 
      overflow-y-auto bg-[#1d2535]">
        <div className="m-6">
          <h2 className="text-white font-extrabold text-2xl">LeanSkills</h2>
          <div className="flex flex-col w-full overflow-hidden">
          <SidebarRoutes />
        </div>
        </div>
        <div className="p-4 bg-slate-100/5 rounded-s-md m-3 text-white">
           <Image 
             src="/sidebar-img.jpg"
             width={250}
             height={150}
             alt="sidebar-image"
             className="rounded-md"
           />
           <p>Upgrade to user space</p>
           <p className="font-[100] text-sm">Daily new updates and mentor 1v1 feature</p>
        </div>
      </div>
    </>
  )
}


