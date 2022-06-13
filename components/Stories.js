import { faker } from '@faker-js/faker'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Story from './Story'
function Stories() {
  const [suggestions, setSuggestions] = useState([])
  const { data: session } = useSession()

  useEffect(() => {
    const name = faker.name.findName()
    const suggestions = [...Array(20)].map((_, i) => ({
      address: faker.address.streetAddress(),
      avatar: faker.image.avatar(),
      company: faker.company.companyName(),
      dob: faker.date.past(),
      email: faker.internet.email(),
      id: i,
      name: faker.name.firstName(),
      phone: faker.phone.phoneNumber(),
      userName: faker.internet.userName(),
      website: faker.internet.domainName(),
    }))
    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-8 flex space-x-2 overflow-x-scroll rounded-sm border border-gray-200 bg-white scrollbar-thin scrollbar-thumb-black">
      {/* {session && (
        <Story img={session.user.image} username={session.user.username} />
      )} */}
      {/* Story */}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.userName}
        />
      ))}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
    </div>
  )
}

export default Stories
