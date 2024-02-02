"use client"

import { useQuery } from "react-query"
import axios from "axios"
import dynamic from "next/dynamic"
const Collection = dynamic(() => import("../shop-all/collection"))

type TJaket = {
  jenis: string
}

const jacketPage = () => {
  const { data } = useQuery({
    queryKey: "collection",
    queryFn: () => axios.get("/api/collections"),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  const jaketData = data?.data.filter(
    (jaket: TJaket) => jaket.jenis === "jaket"
  )

  if (!jaketData) {
    return <>Loading...</>
  } else {
    return (
      <>
        <title>Worthystore.com | Jacket</title>
        <Collection data={jaketData} />
      </>
    )
  }
}

export default jacketPage
