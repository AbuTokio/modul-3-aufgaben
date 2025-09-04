import { NavLink } from "react-router"

export default function Navbar() {
  return (
    <>
      <nav>
        <div>
          <h3>My Life</h3>
        </div>
        <div>
          <NavLink to="/simpleblog">Home</NavLink>
          <NavLink to="blog">Blog</NavLink>
        </div>
      </nav>
    </>
  )
}
