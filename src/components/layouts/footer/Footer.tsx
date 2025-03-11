import { Link } from "react-router-dom"
import { imgs } from "@/constant/index"

import { CiFacebook, CiInstagram, CiMail, CiPhone } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="flex flex-col items-center">
            <img src={imgs.favIcon} alt="karma logo" width={30} />
            <p className="text-white mt-5">All Your needs just in one place</p>
          </div>

          <div>
            <h2 className="footer_titles">
              Our Products
            </h2>
            <ul className="footer_list">
              <li className="footer_links">
                <Link to="/">Kitchens</Link>
              </li>
              <li className="footer_links">
                <Link to="/">Electronics</Link>
              </li>
              <li className="footer_links">
                <Link to="/">Clothes</Link>
              </li>
            </ul>
          </div>

          <div className="mt-4 md:mt-0">
            <h2 className="footer_titles">
              Links
            </h2>
            <ul className="footer_list">
              <li className="footer_links">
                <Link to="/" className="footer_links">About</Link>
              </li>
              <li className="footer_links">
                <Link to="/" className="footer_links">Terms &amp; Condition</Link>
              </li>
              <li className="footer_links">
                <Link to="/" className="footer_links">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="mt-4 md:mt-0">
            <h2 className="footer_titles">
              Contact US
            </h2>
            <address className="mt-5">

              <ul className="text-white mb-4 flex flex-col gap-3 items-center md:items-start">
                <li className="flex gap-3">
                  <CiMail size={20} />
                  <a href="mailto:info@karma.co" className="footer_links">info@karma.co</a>
                </li>
                <li className="flex gap-3">
                  <CiPhone size={20} />
                  <a href="tel:+96655555332" className="footer_links">966 5555 5332</a>
                </li>
              </ul>

              {/* Social Media Icons */}
              <ul className="flex gap-6 text-white items-center justify-center md:justify-start">
                <li>
                  <a href="" className="footer_links">
                    <CiFacebook size={20} />
                  </a>
                </li>
                <li>
                  <a href="" className="footer_links">
                    <CiInstagram size={20} />
                  </a>
                </li>
                <li>
                  <a href="" className="footer_links">
                    <FaXTwitter size={20} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaTiktok size={20} />
                  </a>
                </li>
              </ul>

            </address>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer