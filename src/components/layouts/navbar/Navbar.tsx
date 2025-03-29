import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom"
import { useSignoutMutation } from "@/lib/react-query/AuthQuery";
import { useGetUserQuery } from "@/lib/react-query/UserQuery";
import { useGetCategoriesQuery } from "@/lib/react-query/CategoriesQuery";

import { imgs } from "@/constant/index"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import { Button } from "@/components/ui/button";

import { CiLogin } from "react-icons/ci";
import { FaLock, FaDoorOpen, FaUserEdit } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { ICategory } from "@/constant/Interfaces";

const Navbar = () => {
  const { mutate: signout } = useSignoutMutation();
  const { data: user } = useGetUserQuery();
  const { data: categories } = useGetCategoriesQuery();

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
                    <NavigationMenuContent className="bg-white">
                      <ol className="p-1">
                        {categories && categories.map((category: ICategory, i) =>
                          <li key={i}>
                            <NavigationMenuLink asChild>
                              <Link to={`categories/products/${category.prefix}`} className="text-xs capitalize transition-all duration-300 hover:bg-primary hover:text-white rounded-md p-2">{category.name}</Link>
                            </NavigationMenuLink>
                          </li>
                        )}
                      </ol>

                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
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

        </div>
      </div>
    </nav>
  )
}

export default Navbar