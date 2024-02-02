"use client"

import Collection from "../shop-all/collection"
import { useQuery } from "react-query"
import axios from "axios"

type TSweater = {
  jenis: string
}

const SweaterPage = () => {
  const { data } = useQuery({
    queryKey: "collection",
    queryFn: () => axios.get("/api/collections"),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  const sweaterData = data?.data.filter(
    (jaket: TSweater) => jaket.jenis === "sweater"
  )

  if (!SweaterPage) {
    return <>Loading...</>
  } else {
    return (
      <>
        <title>Worthystore.com | Sweater</title>
        <Collection data={sweaterData} />
      </>
    )
  }
}

export default SweaterPage
