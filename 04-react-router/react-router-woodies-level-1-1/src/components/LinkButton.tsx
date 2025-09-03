import { Link } from "react-router"

interface LinkButtonProps {
  to: string
  label: string
}

export default function LinkButton({ to, label }: LinkButtonProps) {
  return (
    <Link className="px-6 py-3.5 rounded-sm bg-button-bg text-white cursor-pointer w-fit h-fit" to={to}>
      {label}
    </Link>
  )
}
