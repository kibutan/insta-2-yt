import { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'
function Suggestions() {
  const [suggestions, setSuggestions] = useState([])
  const array = [
    { hoge: 1 },
    { hoge: 2 },
    { hoge: 3 },
    { hoge: 4 },
    { hoge: 5 },
  ]
  // お手本では以下のMapで [Array[5]].mapとしてるけど、そのかわりのダミーarray。これ自体に意味はないがループ処理に必要。

  useEffect(() => {
    const suggestions = array.map((_, i) => ({
      avatar: faker.image.avatar(),
      username: faker.name.firstName(),
      email: faker.internet.email(),
      company: { name: faker.company.companyName() },
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
        <div
          key={profile.id}
          className="mt-3 flex items-center justify-between"
        >
          <img
            className="h-10 w-10 rounded-full p-[2px]"
            src={profile.avatar}
            alt=""
          />
          <div className=" ml-4 flex-1">
            <h2 className="text-sm font-semibold">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">
              Works at {profile.company.name}
            </h3>
          </div>
          <button className="text-sm text-blue-400">Follow</button>
        </div>
      ))}
    </div>
  )
}

export default Suggestions
