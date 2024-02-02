"use client"

import { useQuery } from "react-query"
import axios from "axios"
import dynamic from "next/dynamic"
const Collection = dynamic(() => import("./collection"))

const ShopAllPage = () => {
  const { data } = useQuery({
    queryKey: "collection",
    queryFn: () => axios.get("/api/collections"),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })
  if (!data) {
    return <>Loading...</>
  } else {
    return <Collection data={data.data} />
  }
}

export default ShopAllPage
