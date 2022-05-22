import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <div className="mx-5 flex max-w-6xl justify-between xl:mx-auto">
      {/* Left  */}
      <div className="relative hidden h-24 w-24 cursor-pointer lg:inline-grid">
        <Image
          src="https://links.papareact.com/ocw"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="relative h-10 w-10 flex-shrink-0 cursor-pointer lg:hidden">
        <Image
          src="https://links.papareact.com/jjm"
          layout="fill"
          objectFit="contain"
        />
      </div>
      {/* middle */}
      <div className="max-w-xs">
        <div className="relative mt-1 rounded-md p-3">
          <div className="absolute inset-y-0 flex items-center pl-3">
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            className="am:text-sm border-gray block w-full rounded-md border-gray-300 bg-gray-50 pl-10 focus:ring-black"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      {/* right */}
      <HomeIcon className="h-10 w-10" />
    </div>
  )
}

export default Header
