import { DotsHorizontalIcon } from '@heroicons/react/outline'

function Post({ id, username, useImg, img, caption }) {
  return (
    <div className="my-7 rounded-sm border bg-white">
      {/* header */}
      <div className="flex items-center p-5">
        <img
          src={useImg}
          className="mr-3 h-12 w-12 rounded-full border object-contain p-1"
          alt=""
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* img */}

      {/* Buttons */}
      {/* caption */}
      {/* comments */}
      {/* input Bos */}
    </div>
  )
}

export default Post
