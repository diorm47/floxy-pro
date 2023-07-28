import { Tooltip } from "react-tooltip"

const CustomSettingsItem = ({ event, activeBot }) => {
  return (
    <>
      <Tooltip id="my-tooltip" />
      <div
        data-tooltip-id="my-tooltip"
        data-tooltip-content={event.description}
        data-tooltip-place="bottom"
        className={`bots-settings-bot ${
          event?._id === activeBot?._id ? "active" : ""
        }`}
      >
        <p className={"bots-settings-text"}>{event.description}</p>
        <div
          className={`bots-settings-status ${
            event.enabled ? "green" : "red"
          }`}
        ></div>
      </div>
    </>
  )
}
export default CustomSettingsItem
