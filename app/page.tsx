"use client"

import axios from "axios"
import { useQuery } from "react-query"

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: "collection",
    queryFn: () => axios.get("/api/collections"),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })
  if (isLoading) {
    return <>Loading...</>
  } else if (data) {
    return <main className="bg-red-400">Hello World</main>
  }
}
