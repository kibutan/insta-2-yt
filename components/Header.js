import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
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
      <div className="relative mt-1 rounded-md p-3">
        <div className="absolute inset-y-0 flex items-center pl-3">
          <SearchIcon className="h-5 w-5 text-gray-500" />
        </div>
        <input type="text" placeholder="Search" />
      </div>
      {/* right */}
    </div>
  )
}

export default Header
