import Line from "./Line"
import Logo from "./Logo"

interface PageTitleProps {
  left: string
  right: string
}

export default function PageTitle({ left, right }: PageTitleProps) {
  return (
    <div className="flex justify-center items-center">
      <Logo />
      <p className="ml-2 text-4xl font-bold text-text">{left}</p>
      <Line />
      <h2 className="text-7xl font-extrabold text-pagetitle">{right.toUpperCase()}</h2>
    </div>
  )
}
