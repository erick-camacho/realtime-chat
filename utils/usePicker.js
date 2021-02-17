import { useEffect, useState, useRef } from "react";

const usePicker = () => {
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [isOpen])

  useEffect(() => {
    document.body.addEventListener('keyup', handleKeyUp)
    return () => {
      document.body.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  const close = () => {
    setIsOpen(false)
  }

  const handleKeyUp = (e) => {
    if (e.key === "Escape") {
      setIsOpen(false)
    }
  }

  return { isOpen, inputRef, toggle, close }
}
 
export default usePicker;