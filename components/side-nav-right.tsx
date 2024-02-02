"use client"

const SideNavRight = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 767.98
  const nav = [
    {
      link: "Newest",
    },
    {
      link: "Latest",
    },
    {
      link: "Harga:Tinggi ke rendah",
    },
    {
      link: "Harga:Rendah ke tinggi",
    },
  ]
  return (
    <>
      {!isMobile && (
        <nav className="w-44 h-60">
          <div className="text-xs text-neutral-500">Sort by</div>
          <ul className="text-slate-50 space-y-1 mt-1 capitalize text-sm">
            {nav.map((e) => (
              <li key={e.link} className="hover:underline underline-offset-4">
                {e.link.replaceAll("-", " ")}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  )
}

export default SideNavRight
