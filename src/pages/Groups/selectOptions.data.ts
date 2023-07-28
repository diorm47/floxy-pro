export const filterOptions = [
  {
    value: "object.user_id",
    event: "group_join",
    label: "новый подписчик вступил в группу",
  },
  {
    value: "object.message.from_id",
    event: "message_new",
    label: "пользователь написал в группу",
  },
  {   
    value: "object.from_id",
    event: "wall_post_new",
    label: "пользователь написал на стене",
  },
]
