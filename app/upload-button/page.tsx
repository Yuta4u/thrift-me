"use client"

import { UploadButton } from "../../utils/uploadthing"
import { useState } from "react"
import axios from "axios"

type FormDataType = {
  code: string
  nama: string
  size: string
  jenis: string
  harga: number
  imgUrl: string
}

export default function UploadButtonPage() {
  const [formData, setFormData] = useState<FormDataType>({
    code: "",
    nama: "",
    size: "",
    jenis: "",
    harga: 0,
    imgUrl: "",
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "harga" ? Number(value) : value,
    }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    await axios.post("/api/collections", formData)
    setFormData({
      code: "",
      nama: "",
      size: "",
      jenis: "",
      harga: 0,
      imgUrl: "",
    })
    alert("done")
  }
  return (
    <main className="min-h-screen flex-col items-center justify-between p-24 ">
      <form onSubmit={handleSubmit}>
        <input
          name="code"
          placeholder="code"
          value={formData.code}
          onChange={handleChange}
        />
        <input
          name="nama"
          placeholder="nama"
          value={formData.nama}
          onChange={handleChange}
        />
        <input
          name="size"
          placeholder="size"
          value={formData.size}
          onChange={handleChange}
        />
        <input
          name="jenis"
          placeholder="jenis"
          value={formData.jenis}
          onChange={handleChange}
        />
        <input
          name="harga"
          placeholder="harga"
          value={formData.harga}
          onChange={handleChange}
        />
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            setFormData((prevData) => ({
              ...prevData,
              ["imgUrl"]: res.map((e) => e.url).join("|"),
            }))
            alert("upload data success")
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`)
          }}
        />
        <button type="submit">submit</button>
      </form>
    </main>
  )
}
