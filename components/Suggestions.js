import { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'
function Suggestions() {
  const [suggestions, setSuggestions] = useState([])
  useEffect(() => {
    const suggestions = [Array[5]].map((_, i) => ({
      avatar: faker.image.avatar(),
      username: faker.name.firstName(),
      id: i,
    }))
    setSuggestions(suggestions)
  }, [])
  return (
    <div className="mt-4 ml-10">
      <div className="mb-5 flex justify-between text-sm">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="font-semibold text-gray-600">See All</button>
      </div>
      {suggestions.map((profile) => (
        <div key={profile.id}>
          <img className="h-10 w-10 rounded-full" src={profile.avatar} alt="" />
          <div>
            <h2>{profile.username}</h2>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Suggestions
