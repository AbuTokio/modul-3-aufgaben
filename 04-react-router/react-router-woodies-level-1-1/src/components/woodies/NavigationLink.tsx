import { NavLink } from "react-router"

interface NavigationLinkProps {
  to: string
  label: string
}

export default function NavigationLink({ to, label }: NavigationLinkProps) {
  return (
    <NavLink className="text-navlink" to={to}>
      {label}
    </NavLink>
  )
}
