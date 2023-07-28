import React from "react"

const ChatsModalItem = ({ chat }) => {
  return (
    <div className={"group-modal-item d-flex align-items-center"}>
      <img
        className={"bots-avatar"}
        src={
            chat?.photo
            ? chat?.photo
            : "https://t3.ftcdn.net/jpg/02/33/46/24/360_F_233462402_Fx1yke4ng4GA8TJikJZoiATrkncvW6Ib.jpg"
        }
        alt={chat.title}
      />
      <p>{chat?.title}</p>
    </div>
  )
}
export default ChatsModalItem
