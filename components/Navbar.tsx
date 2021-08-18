import { useCallback, useEffect, useState } from 'react'
import NextLink from 'next/link'
import { MenuAlt4Icon } from '@heroicons/react/outline'
import { AnimatePresence } from 'framer-motion'
import Column from 'components/Column'
import Menu from 'components/Menu'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const closeMenu = useCallback((event) => {
    if (event.keyCode === 27) setShowMenu(false)
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', closeMenu, false)

    return () => {
      document.removeEventListener('keydown', closeMenu, false)
    }
  }, [])
  return (
    <>
      <AnimatePresence>
        {showMenu && <Menu onClose={() => setShowMenu(false)} />}
      </AnimatePresence>
      <Column>
        <div className="flex items-center justify-between w-full my-14">
          <NextLink href="/">
            <img
              src="/A.png"
              alt="Appsquare logo"
              className="w-auto h-10 cursor-pointer"
            />
          </NextLink>
          <button onClick={() => setShowMenu(true)}>
            <MenuAlt4Icon className="w-auto h-8 cursor-pointer hover:text-gray-600" />
          </button>
        </div>
      </Column>
    </>
  )
}

export default Navbar
