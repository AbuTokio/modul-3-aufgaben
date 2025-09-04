import { Link } from "react-router"

interface AufgabeProps {
  label: string
  to?: string
}

export default function Aufgabe({ label, to }: AufgabeProps) {
  return (
    <>
      <Link
        className="px-8 py-4 border w-64 text-center cursor-pointer bg-blue-500 hover:bg-blue-700 text-white"
        to={to ? to : label.toLowerCase()}>
        {label}
      </Link>
    </>
  )
}
