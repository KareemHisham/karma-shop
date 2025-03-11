import { Navbar, Footer } from "@/components"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  )
}

export default RootLayout