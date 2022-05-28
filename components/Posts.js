import Post from './Post'

const posts = [
  {
    id: '123',
    username: 'kibutan',
    useImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'Dope!',
  },
  {
    id: '124',
    username: 'kibutan',
    useImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'Dope!!',
  },
]

function Posts() {
  return (
    <div>
      {/* Posts */}
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          useImg={post.useImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
      {/* Posts */}
      {/* Posts */}
      {/* Posts */}
      {/* Posts */}
    </div>
  )
}

export default Posts
