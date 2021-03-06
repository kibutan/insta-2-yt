import { signOut, useSession } from 'next-auth/react'

function MiniProfile() {
  const { data: session } = useSession()
  return (
    <div className="mt-14 ml-10 flex items-center justify-between">
      <img
        className="h-16 w-16 rounded-full border p-[2px]"
        src={session ? session.user.image : 'https://links.papareact.com/3ke'}
        alt=""
      />
      <div className="mx-4 flex-1">
        <h2 className="font-bold">
          {session ? session.user.username : 'sssanga'}
        </h2>
        <h3 className="text-sm text-gray-400">Welcome to insta v2</h3>
      </div>
      <button onClick={signOut} className="text-sm font-semibold text-blue-400">
        Sign Out
      </button>
    </div>
  )
}

export default MiniProfile
