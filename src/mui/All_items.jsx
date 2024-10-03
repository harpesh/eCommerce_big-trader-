import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link, useNavigate } from 'react-router-dom';


export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-[200px]  h-[56px] justify-center items-center gap-x-1.5  bg-[#DC4326] px-3 py-2 text-sm font-bold text-white ">
          All Categories
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute  z-10  w-56 origin-top-left  bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <Menu as="div" className="relative">
            {({ open }) => (
              <div>
                <MenuButton className="flex w-full justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Cloths
                  <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                </MenuButton>
                <MenuItems
                  className={`absolute left-full top-0 z-20 mt-0 w-56 origin-top-left  bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none ${open ? 'block' : 'hidden'} `}
                >
                  <MenuItem>
                  <Link to="/AllItems/Men">
                        <span className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>Men</span>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Woman
                    </a>
                  </MenuItem>
                </MenuItems>
              </div>
            )}
          </Menu>
          <Menu as="div" className="relative">
            {({ open }) => (
              <div>
                <MenuButton className="flex w-full justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Tech
                  <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                </MenuButton>
                <MenuItems
                  className={`absolute left-full top-0 z-20 mt-0 w-56 origin-top-left  bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none ${open ? 'block' : 'hidden'} `}
                >
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Laptop
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      mobile
                    </a>
                  </MenuItem>
                </MenuItems>
              </div>
            )}
          </Menu>
        </div>
      </MenuItems>
    </Menu>
  )
}
