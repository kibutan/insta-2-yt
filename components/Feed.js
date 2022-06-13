import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'
import { useSession } from 'next-auth/react'
function Feed() {
  return (
    <main className="mx-auto grid grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3">
      {/* <main className=`mx-auto grid grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3 ${!session && "!grid-cols-1 !max-w-3xl"}`> */}

      {/* Section */}
      <section className="col-span-2">
        {/* Stories */}
        <Stories />
        {/* Posts */}
        <Posts />
      </section>
      {/* {session && <></> } */}
      {/* Section */}
      <section className="hidden md:col-span-1 xl:inline-grid">
        <div className="fixed top-20">
          {/* Mini profile */}
          <MiniProfile />
          {/* Suggestion */}
          <Suggestions />
        </div>
      </section>
    </main>
  )
}

export default Feed
