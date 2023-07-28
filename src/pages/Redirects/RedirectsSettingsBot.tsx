const RedirectsSettingsBot = ({ bot, activeBot }) => {
  return (
    <div
      className={`bots-settings-bot ${
        bot._id === activeBot._id ? "active" : ""
      }`}
    >
      <p className={"bots-settings-text"}>{bot.description}</p>
      <div
        className={`bots-settings-status ${
          bot.state === "active" ? "green" : "red"
        }`}
      ></div>
    </div>
  )
}
export default RedirectsSettingsBot
