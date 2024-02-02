"use client"

import { useQuery } from "react-query"
import axios from "axios"
import dynamic from "next/dynamic"
const Collection = dynamic(() => import("../shop-all/collection"))

type THoodie = {
  jenis: string
}

const HoodiePage = () => {
  const { data } = useQuery({
    queryKey: "collection",
    queryFn: () => axios.get("/api/collections"),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  const hoodieData = data?.data.filter(
    (jaket: THoodie) => jaket.jenis === "hoodie"
  )

  if (!hoodieData) {
    return <>Loading...</>
  } else {
    return (
      <>
        <title>Worthystore.com | Hoodie</title>
        <Collection data={hoodieData} />
      </>
    )
  }
}

export default HoodiePage
