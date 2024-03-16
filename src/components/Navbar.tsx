"use client";

import React from "react";
import { useMediaQuery } from "@/components/hooks/useMediaQuery";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";

const navigation = [
  { title: "Home", path: "/", id: 1 },
  { title: "About", path: "/about", id: 2 },
  { title: "Contact", path: "/contact", id: 3 },
  { title: "Blog", path: "/blog", id: 4 },
];

const Navbar = () => {
  const isDextop = useMediaQuery("(min-width:768px)");

  return (
    <div>
      {isDextop ? (
        <div className="border-b-2">
          <nav className="container">
            <div className="flex items-center justify-between py-5">
              <div>
                <Link href={"/"} className="font-bold text-3xl">
                  Dev<span className="text-blue-600">CT BD</span>
                </Link>
              </div>
              <ul className="flex gap-x-5">
                {navigation.map((linkitem: any) => (
                  <li
                    key={linkitem.id}
                    className="text-sm uppercase font-semibold relative group overflow-hidden"
                  >
                    <Link href={linkitem.path} className="">
                      {linkitem.title}
                    </Link>
                    <span className="w-full h-[2px] bg-blue-700 absolute inline-block left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200" />
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      ) : (
        <div>
          <Drawer direction="right">
            <div className="flex justify-between border-b-2 px-5 py-3 ">
              <Link href={"/"} className="font-bold text-3xl">
                Dev<span className="text-blue-600">CT BD</span>
              </Link>
              <DrawerTrigger>
                <MenuIcon />
              </DrawerTrigger>
            </div>
            <DrawerContent>
              {/* mobile header  */}
              <div className="py-2 border-b-2 px-3 ">
                <DrawerTrigger>
                  <X className="hover:text-red-500 du" />
                </DrawerTrigger>
              </div>
              {/* link item  */}
              <ul className="px-3 py-3 flex flex-col gap-y-4">
                {navigation.map((linkitem) => (
                  <li key={linkitem.id}>
                    <Link
                      href={linkitem.path}
                      className="duration-300 hover:text-blue-500"
                    >
                      <DrawerTrigger>{linkitem.title}</DrawerTrigger>
                    </Link>
                  </li>
                ))}
              </ul>
            </DrawerContent>
          </Drawer>
        </div>
      )}
    </div>
  );
};

export default Navbar;
