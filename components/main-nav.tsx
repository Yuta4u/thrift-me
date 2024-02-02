"use client"

import Link from "next/link"
import { Input } from "./ui/input"
import { Box } from "@radix-ui/themes"
import { useState, useEffect } from "react"

const MainNav = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 767.98
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const scrollThreshold = 50
      setScrolling(scrollPosition > scrollThreshold)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const nav = [
    {
      link: "jacket",
    },
    {
      link: "hoodie",
    },
    {
      link: "shop-all",
    },
    {
      link: "sweater",
    },
  ]
  return (
    <nav
      className={`flex z-20 space-x-6 px-5 items-center h-20 w-full text-neutral-500 text-sm fixed ${
        scrolling &&
        "backdrop-blur-sm bg-[rgba(0,0,0,0.4)] text-neutral-300 shadow-xl"
      } `}
    >
      <Box
        width="7"
        height="7"
        className="border border-neutral-500 rounded-lg text-red-400 bg-slate-200"
      ></Box>

      <Link href="/" className="text-base text-white font-medium">
        WORTHY STORE
      </Link>
      {!isMobile && (
        <ul className="flex space-x-6 capitalize pr-10">
          {nav.map((e) => (
            <li
              key={e.link}
              className={`hover:text-neutral-300 hover:underline transition-colors underline-offset-4 ${
                scrolling && "hover:text-neutral-100"
              }`}
            >
              <Link href={`${e.link === "home" ? "/" : `/search/${e.link}`}`}>
                {e.link.replaceAll("-", " ")}
              </Link>
            </li>
          ))}

          {/* UPLOAD BUTTON (UNTUK UPLOAD BARANG) */}
          {/* <li
            key={"upload-button"}
            className="hover:text-neutral-300 hover:underline transition-colors underline-offset-4"
          >
            <Link href={`/upload-button`}>Upload</Link>
          </li> */}
        </ul>
      )}
      <Input
        placeholder="Search your style here..."
        className={`${
          scrolling &&
          "border-neutral-300 text-neutral-300  placeholder:text-neutral-300"
        }`}
      />
    </nav>
  )
}

export default MainNav
