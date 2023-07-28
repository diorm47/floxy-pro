import React from "react"

const GroupsModalItem = ({ group }) => {
  return (
    <div className={"group-modal-item d-flex align-items-center"}>
      <img
        className={"bots-avatar"}
        src={
          group?.photo
            ? group?.photo
            : "https://t3.ftcdn.net/jpg/02/33/46/24/360_F_233462402_Fx1yke4ng4GA8TJikJZoiATrkncvW6Ib.jpg"
        }
        alt={group.title}
      />
      <p>{group?.title}</p>
    </div>
  )
}
export default GroupsModalItem
