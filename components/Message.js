import Image from 'next/image'
import formatDate from '../utilities/formatDate'

const Message = ({ text, createdAt, displayName, photoURL }) => {
  if (!text) return null
  return (
    <div className="flex max-w-3xl mx-auto">
      <div className="mr-4">
        {photoURL ? ( 
          <img
            src={photoURL}
            alt="Avatar"
            width={45}
            height={45}
            className="rounded-full"
          /> 
        ) : null}
      </div>
      <div className="flex flex-col">
        <div className="col-span-2 flex flex-wrap">
          {displayName ? <p className="font-bold mr-2">{displayName}</p> : null}
          {createdAt?.seconds ? (
            <span className="text-gray-500 text-xs self-center">{formatDate(new Date(createdAt.seconds * 1000))}</span>
          ) : null}
        </div>
        <div className="col-span-2">
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}
 
export default Message

