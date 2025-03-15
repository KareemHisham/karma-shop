import { imgs } from "@/constant/index"
import { Link, NavLink } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"


import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { FaLock, FaDoorOpen, FaUserEdit } from "react-icons/fa";
import { useEffect } from "react";



const Navbar = () => {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const navELement = document.getElementsByTagName("nav")[0];
      if (window.scrollY > 100) {
        navELement.classList.add("nav_translated")
      } else {
        navELement.classList.remove("nav_translated")
      }
    })
  }, [])
  return (
    <nav className="fixed w-full top-10 left-[50%] -translate-x-[50%] bg-white shadow-md z-50 py-3" >
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img src={imgs.karmaLogo} alt="Karma logo" width={137} loading="lazy" draggable={false} />
          </div>
          <ul className="flex gap-4 items-center">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/offers">Offers</NavLink>
            </li>
            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ol className="grid gap-3 p-4 lg:grid-cols-[.75fr_1fr]">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="">Link</Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="">Link</Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="">Link</Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="">Link</Link>
                          </NavigationMenuLink>
                        </li>
                      </ol>

                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li>
              <NavLink to="/cart">
                <HiOutlineShoppingCart size={20} />
              </NavLink>
            </li>
            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger><MdOutlineAccountCircle size={20} /></NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ol>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/login" className="flex items-center gap-2">
                              <CiLogin size={20} />
                              <span>SignIn</span>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/register" className="flex items-center gap-2">
                              <FaLock size={20} />
                              <span>Register</span>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="" className="flex items-center gap-2">
                              <FaDoorOpen size={20} />
                              <span>Logout</span>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="" className="flex items-center gap-2">
                              <FaUserEdit size={20} />
                              <span>Profile</span>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ol>

                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar