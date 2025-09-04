import { Outlet } from "react-router"
import Navbar from "../../components/simpleblog/Navbar"

function SimpleBlog() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default SimpleBlog
