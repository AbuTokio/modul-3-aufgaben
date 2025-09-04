import { Outlet } from "react-router"
import Header from "../../components/woodies/Header"
import Footer from "../../components/woodies/Footer"

function Woodies() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Woodies
