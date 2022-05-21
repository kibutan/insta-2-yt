import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from "@heroicons/react/solid"


function Header() {
  return (
    <div className="flex max-w-6xl justify-between">
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
      <div className='max-w-xs'>
        <div className="relative mt-1 rounded-md p-3">
          <div className="absolute inset-y-0 flex items-center pl-3">
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            className="am:text-sm border-gray block w-full rounded-md bg-gray-50 pl-10 focus:ring-black border-gray-300"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      {/* right */}
    </div>
  )
}

export default Header
