import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom"
import { useSignoutMutation } from "@/lib/react-query/AuthQuery";
import { useGetUserQuery } from "@/lib/react-query/UserQuery";

import { imgs } from "@/constant/index"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"


import { Button } from "@/components/ui/button";

import { CiLogin } from "react-icons/ci";
import { FaLock, FaDoorOpen, FaUserEdit } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";


const Navbar = () => {
  const { mutate: signout } = useSignoutMutation();
  const { data: user } = useGetUserQuery();

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const navELement = document.getElementsByTagName("nav")[0];
      if (window.scrollY > 100) {
        navELement.classList.add("nav_translated")
      } else {
        navELement.classList.remove("nav_translated")
      }
    })
  }, []);


  return (
    <nav className="fixed w-full top-10 left-[50%] -translate-x-[50%] bg-white shadow-md z-50 py-3" >
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img src={imgs.karmaLogo} alt="Karma logo" width={137} loading="lazy" draggable={false} />
          </div>
          <ul className="gap-4 items-center hidden md:flex">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {/* <li>
              <NavLink to="/offers">Offers</NavLink>
            </li> */}
            <li>
              <NavLink to="/categories">Categories</NavLink>
            </li>
            {user && (
              <li>
                <NavLink to="/cart">
                  <HiOutlineShoppingCart size={20} />
                </NavLink>
              </li>
            )}

            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger><MdOutlineAccountCircle size={20} /></NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white">
                      <ol className="flex flex-col gap-4">
                        {!user && (
                          <>
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
                                <Link to="/signup" className="flex items-center gap-2">
                                  <FaLock size={20} />
                                  <span>Register</span>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          </>
                        )}
                        {user && (
                          <>
                            <li>
                              <NavigationMenuLink asChild>
                                <Button onClick={() => signout()} className="flex items-center gap-2 bg-transparent">
                                  <FaDoorOpen size={20} />
                                  <span>Logout</span>
                                </Button>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link to="/profile" className="flex items-center gap-2">
                                  <FaUserEdit size={20} />
                                  <span>Profile</span>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          </>
                        )}

                      </ol>

                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
          </ul>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" className="border-primary"><FaBarsStaggered /></Button>
              </DrawerTrigger>
              <DrawerContent className="bg-dark">
                <ul className="flex flex-col items-center gap-5 mx-auto py-10">
                  <li>
                    <NavLink to="/" className="text-white">Home</NavLink>
                  </li>
                  {/* <li>
              <NavLink to="/offers">Offers</NavLink>
            </li> */}
                  <li>
                    <NavLink to="/categories" className="text-white">Categories</NavLink>
                  </li>
                  {user && (
                    <>
                      <li>
                        <NavLink to="/cart"  className="text-white flex items-center gap-2">
                          <HiOutlineShoppingCart size={20} />
                          <span>Cart</span>
                        </NavLink>
                      </li>
                      <li>
                        <Button onClick={() => signout()} className="flex items-center gap-2 bg-transparent text-white">
                          <FaDoorOpen size={20} />
                          <span>Logout</span>
                        </Button>
                      </li>
                      <li>
                        <Link to="/profile" className="flex items-center gap-2 text-white">
                          <FaUserEdit size={20} />
                          <span>Profile</span>
                        </Link>
                      </li>
                    </>
                  )}
                  <li>
                    <Link to="/login" className="flex items-center gap-2 text-white">
                      <CiLogin size={20} />
                      <span>SignIn</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/signup" className="flex items-center gap-2 text-white">
                      <FaLock size={20} />
                      <span>Register</span>
                    </Link>
                  </li>
                </ul>
              </DrawerContent>
            </Drawer>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar