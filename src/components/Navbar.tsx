"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import SignIn from "./sign-in"
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const handleNav = () => {
  setMenuOpen(!menuOpen);
  }

  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href='/'>
          <Image
            src={"/temp_logo.png"}
            alt="Logo"
            width="205"
            height="75"
            className="cursor-pointer"
            priority
          />
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href={"/page1"}>
              <li className="ml-10 uppercase hover:border-b text-xl">Page1</li>
            </Link>
            <Link href={"/page2"}>
              <li className="ml-10 uppercase hover:border-b text-xl">Page2</li>
            </Link>
            <li className="ml-10 uppercase text-xl"><SignIn/></li>
          </ul>
        </div>
        <div className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} onClick={handleNav}/>
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[60%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div className="cursor-pointer">
            <AiOutlineClose size={25} onClick={handleNav}/>
          </div>
        </div>
        <div className="flex-col py-4">
          <ul>
          <Link href={"/" /* todo */}
              onClick={() => setMenuOpen(false)}
              className="py-4 cursor-pointer hover:border-b text-xl"
            >
              <li>Home</li>
            </Link>
            <Link href={"/" /* todo */}
              onClick={() => setMenuOpen(false)}
              className="py-4 cursor-pointer hover:border-b text-xl"
            >
              <li>About</li>
            </Link>
            <Link href={"/" /* todo */}
              onClick={() => setMenuOpen(false)}
              className="py-4 cursor-pointer hover:border-b text-xl"
            >
              <li>Contact</li>
            </Link>
            <Link href={"/" /* todo */}
              onClick={() => setMenuOpen(false)}
              className="py-4 cursor-pointer hover:border-b text-xl"
            >
              <li>My Page</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}
