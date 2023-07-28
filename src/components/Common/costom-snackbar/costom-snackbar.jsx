import React, { useEffect, useState } from "react"
import "./costom-snackbar.css"

const CustomSnackbar = ({
  message,
  type = "info",
  duration = 2000,
  show,
}) => {
  const [visible, setVisible] = useState(show)

  useEffect(() => {
    setVisible(show)

    if (show) {
      // eslint-disable-next-line no-undef
      const timer = setTimeout(() => {
        setVisible(false)
      }, duration)

      // eslint-disable-next-line no-undef
      return () => clearTimeout(timer)
    }
  }, [show, duration])

  if (!visible) {
    return null
  }

  return (
    <div className={`custom-snackbar ${type}`}>
      <span>{message}</span>
    </div>
  )
}

export default CustomSnackbar
