import formatDate from '../utilities/formatDate'
import MessageSettings from './MessageSettings'

const Message = ({ id, text, createdAt, displayName, photoURL, uid, userId }) => {
  if (!text) return null
  return (
    <div className="px-4 py-2 flex max-w-3xl mx-auto hover:bg-gray-100 group">
      <div className="mr-4">
        {photoURL ? ( 
          <img
            src={photoURL}
            alt="Avatar"
            width={45}
            height={45}
            className="rounded-full mt-1"
          /> 
        ) : null}
      </div>
      <div className="flex flex-col w-full">
        <div className="flex relative ">
          {displayName ? <p className="font-bold mr-2 truncate">{displayName}</p> : null}
          {createdAt?.seconds ? (
            <span className="text-gray-500 text-xs self-center">{formatDate(new Date(createdAt.seconds * 1000))}</span>
          ) : null}
          {uid === userId &&
            <div className="hidden group-hover:block absolute top-0 right-0">
              <MessageSettings id={id}/>
            </div>
          }
        </div>
        <div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}
 
export default Message

