import React, { useRef } from "react"

const CopyText = ({ value, handleButtonClick }) => {
  const inputRef = useRef(null)

  const handleCopyClick = () => {
    if (inputRef.current) {
      inputRef.current.select()
      // eslint-disable-next-line no-undef
      document.execCommand("copy")
    }
    handleButtonClick()
  }

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        className="hided_input"
        value={value}
      />
      <button
        className={"clean-btn blue_color"}
        onClick={handleCopyClick}
      >
        Скопировать ID
      </button>
    </div>
  )
}

export default CopyText
