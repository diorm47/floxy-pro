import { useEffect, useState } from "react"

const BotsSettingsBot = ({ bot, activeBot }) => {
  const [currentState, setCurrentState] = useState("")

  useEffect(() => {
    if (bot.enabled) {
      setCurrentState("green")
    } else if (bot.state === "blocked") {
      setCurrentState("red")
    } else if (!bot.enabled && bot.state === "active") {
      setCurrentState("gray")
    } else {
      setCurrentState("gray")
    }
  }, [])

  return (
    <div
      className={`bots-settings-bot ${
        bot?._id === activeBot?._id ? "active" : ""
      }`}
    >
      <p className={"bots-settings-text"}>{bot.description}</p>
      <div className={`bots-settings-status ${currentState}`}></div>
    </div>
  )
}
export default BotsSettingsBot
