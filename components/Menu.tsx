import NextLink from 'next/link'
import { XIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'
import { Column } from 'components'

const mainItems = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Methods', href: '/methods' },
]

const subItems = [
  { label: 'Join the team', href: '/join' },
  { label: 'Contact us', href: '/contact' },
  { label: 'Blog', href: '/blog' },
]

const Menu = ({ onClose }) => {
  return (
    <div className="absolute top-0 w-screen h-screen backdrop-filter backdrop-blur-xl">
      <Column>
        <div className="flex items-center justify-between w-full my-14">
          <img src="/A.png" alt="Appsquare logo" className="w-auto h-10" />
          <button onClick={onClose}>
            <XIcon className="w-auto h-8 cursor-pointer hover:text-gray-600" />
          </button>
        </div>
      </Column>

      <motion.div initial={{ y: -50 }} animate={{ y: 0 }} exit={{ y: -15 }}>
        <div className="flex flex-col justify-between max-w-xl px-10 mx-auto my-16 space-y-8 text-black sm:my-32 sm:space-y-0 sm:flex-row lg:px-0">
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
  )
}

export default Menu

const MenuLink = ({ children, href }) => (
  <NextLink href={href} passHref>
    <a className="text-3xl font-extrabold text-black sm:text-5xl hover:text-gray-700">
      {children}
    </a>
  </NextLink>
)
const MenuLinkSmall = ({ children, href }) => (
  <NextLink href={href} passHref>
    <a className="text-xl font-extrabold hover:text-gray-700">{children}</a>
  </NextLink>
)
