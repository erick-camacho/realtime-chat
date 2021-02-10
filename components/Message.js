import formatDate from '../utilities/formatDate'

const Message = ({ text, createdAt, displayName, photoUrl }) => {
  if (!text) return null
  return (
    <div>
      {photoUrl ? ( 
        <img 
          src={photoUrl} 
          alt="Avatar"
          width={45}
          height={45}
        /> 
      ) : null}
      {displayName ? <p>{displayName}</p> : null}
      {createdAt?.seconds ? (
        <span>{formatDate(new Date(createdAt.seconds * 1000))}</span>
      ) : null}
      <p>{text}</p>
    </div>
  )
}
 
export default Message