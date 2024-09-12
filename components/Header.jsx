import Link from 'next/link'
import { useState } from 'react'
import Search from './Search'
import { useCart } from '../context/CartContext'
import NavLink from './NavLink'
import Image from 'next/image'
import logo from "./../public/images/logo.png"
import MenuOverlay from "./MenuOverlay";

import {
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  Bars3Icon, XMarkIcon
} from '@heroicons/react/24/outline'

const navLinks = [
  {
    title: 'About',
    path: '/#about'
  },
  {
    title: 'Products',
    path: '/#products'
  },
  {
    title: 'Contact',
    path: '/contact'
  }
]

const Header = ({ setCartSliderIsOpen }) => {
  const { getTotalQuantity } = useCart();
  const [open, setOpen] = useState(false)
  const [navbarOpen, setNavbarOpen] = useState(false);


  return (
    <header className='fixed top-0 left-0 right-0 z-20   bg-gray-200 drop-shadow-lg'>
      <div className='flex container lg:py-2 flex-wrap items-center justify-between mx-auto  '>
        <Link href='/'>
          <a className='flex items-center hover:scale-110 '>
            <Image src={logo} fill height={65} width={65} />
            <div className=' md:text-2xl hidden md:block  font-medium uppercase  text-sky-700 hover:text-purple-400 '>
              Designs By Khoi
            </div>
          </a>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center ml-8 px-3 py-2  text-sky-700  "
            >
              <Bars3Icon className="h-9 w-9" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center  ml-8 px-3 py-2  text-sky-700  "
            >
              <XMarkIcon className="h-9 w-9" />
            </button>
          )}
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
            <ul className='flex   md:flex-row md:space-x-14 mt-0 sm:text-sm'>
              {navLinks.map((link, index) => (
                <li className='text-sky-700  hover:text-purple-400 hover:scale-125 text-lg' key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
          {/* //////////////////////// */}
        <div className='flex items-center gap-2'>
          {/* //////////////////////// adds additional header options*/}
          {/* <MagnifyingGlassIcon
            onClick={() => setOpen(open => !open)}
            className='mt-1 h-5 w-5 cursor-pointer text-sky-700 group-hover:text-sky-800'
          /> */}
          <div className=' flow-root lg:ml-8'>
            <div
              className='group hover:scale-110 p-2 flex items-center cursor-pointer'
              onClick={() => setCartSliderIsOpen(open => !open)}
            >
              <ShoppingBagIcon
                className='flex-shrink-0 h-7 w-7 text-sky-700 group-hover:text-purple-400 '
                aria-hidden='true'
               
              />
              <span className='ml-2 text-lg font-medium text-sky-700 group-hover:text-purple-400'>
                ( {getTotalQuantity()} )
              </span>
              <span className='sr-only'>items in cart, view bag</span>
            </div>
          </div>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
      <Search open={open} setOpen={setOpen} />
    </header>
  )
}

export default Header
