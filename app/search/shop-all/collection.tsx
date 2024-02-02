import Link from "next/link"
import Image from "next/image"

type TCollectionData = {
  nama: string
  imgUrl: string
  size: string
  harga: number
  jenis: string
  code: string
}

type TCollection = {
  data: TCollectionData[]
}

const Collection = ({ data }: TCollection) => {
  const convertRp = (num: number) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1.")
  }
  return (
    <div className="flex flex-wrap gap-5">
      {data?.map((e: TCollectionData) => (
        <Link href={`./${e.jenis}/${e.code}`}>
          <div
            key={e.nama}
            className="relative w-80 h-80 font-bold hover:cursor-pointer bg-neutral-950 border border-neutral-500 rounded-lg"
          >
            <div className="flex z-10 absolute bottom-5 left-5 pl-3 border-2 border-gray-500 rounded-2xl  bg-neutral-950 text-slate-50 text-xs items-center">
              {`${e.nama} ${e.size}`}
              <div className="rounded-xl bg-blue-600 p-1  ml-3 m-1">
                Rp {convertRp(e.harga)}
              </div>
            </div>
            <div className="relative w-full h-full rounded-lg overflow-hidden inline-block hover:border-2 hover:border-sky-500 ">
              <img
                alt="collection"
                className="w-full h-full rounded-lg hover:scale-110 ease-out duration-500"
                src={e.imgUrl.split("|")[0]}
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Collection
