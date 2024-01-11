import Link from 'next/link'
import { useState } from 'react'
import Search from './Search'
import { useCart } from '../context/CartContext'
import NavLink from './NavLink'

import {
  ShoppingBagIcon,
  MagnifyingGlassIcon
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

  return (
    <header className='fixed top-0 left-0 right-0 z-10  px- py-3 bg-gray-200'>
      <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <Link href='/'>
          <a>
            <div className='text-lg font-medium uppercase  text-sky-700'>
              Designs By Khoi
            </div>
          </a>
        </Link>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
            <ul className='flex text-sky-700 md:flex-row md:space-x-14 mt-0 '>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
          {/* //////////////////////// */}
        <div className='flex items-center gap-4'>
          {/* //////////////////////// adds additional header options*/}
          {/* <MagnifyingGlassIcon
            onClick={() => setOpen(open => !open)}
            className='mt-1 h-5 w-5 cursor-pointer text-sky-700 group-hover:text-sky-800'
          /> */}
          <div className='ml-4 flow-root lg:ml-8'>
            <div
              className='group p-2 flex items-center cursor-pointer'
              onClick={() => setCartSliderIsOpen(open => !open)}
            >
              <ShoppingBagIcon
                className='flex-shrink-0 h-5 w-5 text-sky-700 group-hover:text-sky-800'
                aria-hidden='true'
              />
              <span className='ml-2 text-sm font-medium text-sky-700 group-hover:text-sky-800'>
                ( {getTotalQuantity()} )
              </span>
              <span className='sr-only'>items in cart, view bag</span>
            </div>
          </div>
        </div>
      </div>

      <Search open={open} setOpen={setOpen} />
    </header>
  )
}

export default Header
