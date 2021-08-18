import { createContext, useContext } from 'react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { XIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'
import cn from 'classnames'
import Column from 'components/Column'
import Logo from 'components/Logo'

const mainItems = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Tools', href: '/tools' },
]

const subItems = [
  { label: 'Home', href: '/' },
  { label: 'Contact us', href: '/contact' },
  { label: 'Blog', href: '/blog' },
]

const MenuContext = createContext({ closeMenu: () => null })

const Menu = ({ onClose }) => {
  return (
    <MenuContext.Provider value={{ closeMenu: onClose }}>
      <div className="absolute top-0 w-screen h-screen backdrop-filter backdrop-blur-xl">
        <Column>
          <div className="flex items-center justify-between w-full my-14">
            <NextLink href="/">
              {/* <img
                src="/A.png"
                alt="Appsquare logo"
                className="w-auto h-10 cursor-pointer"
              /> */}
              <Logo className="w-auto h-10 cursor-pointer" />
            </NextLink>
            <button onClick={onClose}>
              <XIcon className="w-auto h-8 cursor-pointer hover:text-gray-600" />
            </button>
          </div>
        </Column>

        <motion.div initial={{ y: -50 }} animate={{ y: 0 }} exit={{ y: -15 }}>
          <div className="flex flex-col justify-between max-w-xl px-10 mx-auto my-16 space-y-8 sm:my-32 sm:space-y-0 sm:flex-row lg:px-0">
            <div className="flex flex-col space-y-8 sm:space-y-10">
              {mainItems.map((item) => (
                <MenuLink href={item.href} key={item.label}>
                  {item.label}
                </MenuLink>
              ))}
            </div>
            <div className="flex flex-col pt-3 space-y-8 sm:space-y-10">
              {subItems.map((item) => (
                <MenuLinkSmall href={item.href} key={item.label}>
                  {item.label}
                </MenuLinkSmall>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </MenuContext.Provider>
  )
}

export default Menu

const MenuLink = ({ children, href }) => (
  <Link href={href} className="text-3xl sm:text-5xl">
    {children}
  </Link>
)
const MenuLinkSmall = ({ children, href }) => (
  <Link href={href} className="text-xl ">
    {children}
  </Link>
)

const Link = ({ children, href, className }) => {
  const { push, pathname } = useRouter()
  const { closeMenu } = useContext(MenuContext)

  const active = pathname === href

  const handleClick = () => {
    if (active) {
      closeMenu()
    } else {
      push(href)
    }
  }

  return (
    <a
      className={cn(
        className,
        'font-extrabold text-black hover:text-gray-700 cursor-pointer',
        active && 'underline menu-link'
      )}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}
