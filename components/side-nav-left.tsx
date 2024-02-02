"use client"
import Link from "next/link"

const SideNavLeft = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 767.98
  const nav = [
    {
      link: "hoodie",
    },
    {
      link: "jacket",
    },
    {
      link: "shop-all",
    },
    {
      link: "hoodie",
    },
  ]
  return (
    <>
      {!isMobile && (
        <nav className="w-44 h-60 px-3">
          <div className="text-xs text-neutral-500">Collections</div>
          <ul className="text-slate-50 space-y-1 mt-1 capitalize text-sm">
            {nav.map((e, i) => (
              <li key={i} className="hover:underline underline-offset-4">
                <Link href={`/search/${e.link}`}>
                  {e.link.replaceAll("-", " ")}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  )
}

export default SideNavLeft
