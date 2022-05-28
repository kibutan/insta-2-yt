import Stories from './Stories'
import Posts from './Posts'
function Feed() {
  return (
    <main className="mx-auto grid grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3">
      {/* Section */}
      <section>
        {/* Stories */}
        <Stories />
        {/* Posts */}
        <Posts />
      </section>

      {/* Section */}
      <section>
        {/* Mini profile */}
        {/* Suggestion */}
      </section>
    </main>
  )
}

export default Feed
