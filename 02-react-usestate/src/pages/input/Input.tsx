import { useState } from "react"

export default function Input() {
  const [firstname, setFirstname] = useState<string>("")
  const [lastname, setLastname] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  return (
    <>
      <div className="flex justify-between items-start flex-col gap-8 w-[30vw] p-8 border bg-gray-500">
        <div className="flex justify-center items-center gap-4 w-full">
          <input className="bg-white p-2 w-1/3" type="text" onChange={(e) => setFirstname(e.target.value)} />
          <input className="bg-white p-2 w-1/3" type="text" onChange={(e) => setLastname(e.target.value)} />
          <input className="bg-white p-2 w-1/3" type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <p>Vorname: {firstname}</p>
        <p>Nachname: {lastname}</p>
        <p>Email: {email}</p>
      </div>
    </>
  )
}
