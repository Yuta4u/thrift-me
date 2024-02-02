"use client"

import { FC } from "react"
import { useQueryClient } from "react-query"

type TPageProps = {
  params: { code: string }
}

type TCollectionData = {
  code: string
}

type TAllDatas = {
  data: TCollectionData[]
}
const DetailPage: FC<TPageProps> = ({ params }) => {
  const queryClient = useQueryClient()
  const temp: TAllDatas | undefined = queryClient.getQueryData("collection")
  const detailData =
    temp && temp?.data.filter((data) => data.code === params.code[1])

  return <div className="bg-slate-200">INI DETAIL</div>
}

export default DetailPage
