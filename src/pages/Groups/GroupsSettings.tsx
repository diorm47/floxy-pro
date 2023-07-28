import { Floxy } from "floxy-web-api"
import { IEvent, personalMessage } from "models/types"
import { useEffect, useRef, useState } from "react"
import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form"
import { Link, useNavigate, useParams } from "react-router-dom"
import Select from "react-select"
import { Tooltip } from "react-tooltip"
import { CardTitle, Container, Modal, ModalHeader } from "reactstrap"
import DeleteButton from "../../assets/images/delete-button.svg"
import PackDel from "../../assets/images/pack-del.svg"

import AccountStatus from "../../components/Common/account-status/accountStatus"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import CustomSnackbar from "../../components/Common/costom-snackbar/costom-snackbar"
import HeaderSelected from "../../components/Common/HeaderSelected"

import React from "react"
import {
  intervalHours,
  intervalMinutes,
  logic,
} from "../CustomMailing/selectOptions.data"
import "./Groups.scss"
import UnitSelect from "./groupsComponents/UnitSelect.jsx"
import GroupsSettingsItem from "./GroupsSettingsItem"
import { filterOptions } from "./selectOptions.data"

const apis = new Floxy(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaWQiOiI2M2QxNTI2YzIyOGI1NGRiZjY2NjAzMWIiLCJyaWQiOiI2M2QxNTJhMTIyOGI1NGRiZjY2NjAzMWYiLCJ0eXAiOiJtb250aCIsImlhdCI6MTY3NDY2MjU2MX0.o6MCpKoJVcYKBuwYvsZ28JJNIy6HceaN1vllh2ZIw9w"
)

// @ts-ignore
const GroupsSettings: FC = () => {
  const { groupId, eventId } = useParams()
  const [events, setEvents] = useState([])
  const [redirects, setRedirects] = useState([])
  const [activeGroup, setActiveGroup] = useState()
  const [activeEvent, setActiveEvent] = useState()
  const [bots, setBots] = useState()

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
    useState(false)
  const [isMessageTemplateModalOpen, setIsMessageTemplateModalOpen] =
    useState(false)
  const [isPinModalOpen, setIsPinModalOpen] = useState(false)
  const [proModalOpen, setIsProModalOpen] = useState(false)
  const [filterModalOpen, setIsFilterModalOpen] = useState(false)
  const [activeDescription, setActiveDescription] = useState("")
  const [isCreatingItem, setIsCreatingItem] = useState(false)
  const navigate = useNavigate()
  const scrollRef = useRef(null)
  const [messages, setMessages] = useState([
    "%group_name%",
    "%chat_name%",
    "%user_name%",
    "%user_lastname%",
    "%user_city%",
    "%Greeting%",
    "%greeting%",
    "%group_id%",
    "%chat_id%",
    "%group_url%",
    "%group_nameurl%",
    "%chat_url%",
    "%user_id%",
    "if(%male%){Ты пришел}",
    "%male%",
    "if(%female%){Ты пришлa}",
    "%female%",
    "random[anytext|anytext2]",
  ])
  const messageValues = {
    "%group_name%": "Название группы",
    "%chat_name%": "Название чата",
    "%user_name%": "Имя пользователя",
    "%user_lastname%": "Фамилия пользователя",
    "%user_city%": "Город пользователя",
    "%Greeting%": "Приветствие",
    "%greeting%": "приветствие",
    "%group_id%": "ID группы",
    "%chat_id%": "ID чата",
    "%group_url%": "URL группы",
    "%group_nameurl%": "URL с названием группы",
    "%chat_url%": "URL чата",
    "%user_id%": "ID пользователя",
    "if(%male%){Ты пришел}": "Если мужчина: Ты пришел",
    "%male%": "Мужчина",
    "if(%female%){Ты пришлa}": "Если женщина: Ты пришла",
    "%female%": "Женщина",
    "random[anytext|anytext2]":
      "Случайный выбор между anytext и anytext2",
  }
  const [showSnackbar, setShowSnackbar] = useState(false)
  const [snackbarText, setSnackbarText] = useState("")
  const [text, setText] = useState("")
  const textareaRef = useRef(null)
  const [activeTextarea, setActiveTextarea] = useState(null)
  const [activeGroupMessages, setActiveGroupMessages] = useState()
  const [selectedBots, setSelectedBots] = useState([])
  const [attachmentPacks, setAttachmentPacks] = useState([[""]])
  interface FieldGroup {
    id: number
    value1: string
    value2: string
    value3: string
  }

  interface FieldEditorState {
    filterfields: FieldGroup[]
  }

  const createEmptyFieldGroup = (id) => {
    return { id, value1: "", value2: "e", value3: "" };
  };
  
  const [filterfields, setFields] = useState<FieldGroup[]>([
    createEmptyFieldGroup(0),
  ]);
  const [fieldId, setFieldId] = useState<number>(1)
  const [filterField, setFilterField] = useState([])

  const [activeMessageIndex, setActiveMessageIndex] = useState(null)
  const [selectedValue, setSelectedValue] = useState(null)
  const [friendsText, setFriends] = useState()
  const [friends, setFriendss] = useState(false)
  const [friendsTextField, setFriendsField] = useState()
  const [eventName, setEventName] = useState()
  const [customUserIdPath, setCustomUserIdPath] = useState()
  const [customUserIdPathActiv, setCustomUserIdPathActiv] =
    useState(true)
  const [startTimeout, setStartTimeout] = useState()
  const [days, setDays] = useState()
  const [hours, setHours] = useState()
  const [minutes, setMinutes] = useState()
  const [seconds, setSeconds] = useState()
  const [initialValues, setInitialValues] = useState({
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
  })
  const [isLoading, setIsLoading] = useState(true)

  React.useEffect(() => {
    document.title = `${activeGroup?.title} - Группы | Floxy.pro`
  }, [activeGroup?.title])

  const customStylesSelect = {
    menu: (base: any) => ({
      ...base,
      marginTop: "0px !important",
    }),
    option: (provided: any, state: { isSelected: any }) => ({
      ...provided,

      backgroundColor: state.isSelected ? "#556ee6" : "#fff",
      ":hover": {
        backgroundColor: "#556ee6",
        color: "#fff",
      },
    }),
  }
  const [customFields, setCustomFields] = useState<(typeof fields)[]>(
    [{ text: "", timeout: "", attachment: "" }]
  )

  useEffect(() => {
    const makeRequest = async () => {
      const activeGroupData = await apis.getGroup(Number(groupId))
      setActiveGroup(activeGroupData)

      const eventsData = await apis.getEvents()
      const filteredEvents = eventsData?.filter(
        (event: { param_id: any }) =>
          event.param_id === activeGroupData?.group_id
      )
      setEvents(filteredEvents)
      const filteredRedirects = eventsData.filter(event => {
        return event.event_name === "redirect"
      })
      const redirectsItems = [
        ...filteredRedirects.map(redirect => ({
          value: redirect._id,
          label: `${redirect.description}`,
        })),
      ]
      setRedirects(redirectsItems)

      const activeEventData = filteredEvents.filter(
        (event: { _id: any }) => {
          return event._id === eventId
        }
      )[0]
      setActiveEvent(activeEventData)
      setActiveDescription(activeEventData.description || "")
    }

    makeRequest()
  }, [])

  useEffect(() => {
    function convertObjectsBack(objects: any[]) {
      return objects.map((obj, index) => {
        const newObj = {
          id: index,
          value1: obj.path,
        };
  
        for (const key in obj) {
          if (key === "e") {
            newObj.value2 = "e";
            newObj.value3 = obj[key];
          } else if (key === "ne") {
            newObj.value2 = "ne";
            newObj.value3 = obj[key];
          } else if (key === "gt") {
            newObj.value2 = "gt";
            newObj.value3 = obj[key];
          } else if (key === "gte") {
            newObj.value2 = "gte";
            newObj.value3 = obj[key];
          } else if (key === "lt") {
            newObj.value2 = "lt";
            newObj.value3 = obj[key];
          } else if (key === "lte") {
            newObj.value2 = "lte";
            newObj.value3 = obj[key];
          } else if (key === "search") {
            newObj.value2 = "search.regex";
            newObj.value3 = obj[key].regex;
          }
        }
  
        return newObj;
      });
    }
    if (activeEvent && activeEvent.filter_fields) {
      const convertedObjects = convertObjectsBack(activeEvent.filter_fields);
    
      if (convertedObjects.length === 0) {
        convertedObjects.push(createEmptyFieldGroup(fieldId));
      }
    
      setFields(convertedObjects);
    } else if (activeEvent) {
      setFields([createEmptyFieldGroup(0)]);
    }
  }, [activeEvent]);
  
  useEffect(() => {
    const makeRequest = async () => {
      const bots = await apis.getBots()
      const botsData = [
        { value: "all", label: "Выбрать всех" },
        ...bots.map((bot: { _id: any; photo: any; title: any }) => ({
          value: bot._id,
          label: ` ${bot.title}`,
        })),
      ]
      setBots(botsData)
    }
    makeRequest()
  }, [])
  useEffect(() => {
    if (activeEvent && activeEvent.bots) {
      const botIds = activeEvent.bots.map(obj => obj.bot_id)
      const activeEventBots = bots.filter(obj =>
        botIds.includes(obj.value)
      )
      setSelectedBots(activeEventBots)
    }
  }, [activeEvent])
  const findOptionByValue = (options: any[], value: any) => {
    return options.find(option => option.value === `${value}`)
  }
  const convertFromMilliseconds = (milliseconds: number) => {
    const days = Math.floor(milliseconds / (24 * 60 * 60 * 1000))
    milliseconds %= 24 * 60 * 60 * 1000

    const hours = Math.floor(milliseconds / (60 * 60 * 1000))
    milliseconds %= 60 * 60 * 1000

    const minutes = Math.floor(milliseconds / (60 * 1000))
    milliseconds %= 60 * 1000

    const seconds = Math.floor(milliseconds / 1000)
    setDays(days)
    setHours(hours)
    setMinutes(minutes)
    setSeconds(seconds)
    return { days, hours, minutes, seconds }
  }

  useEffect(() => {
    if (
      activeEvent &&
      activeEvent.messages &&
      activeEvent.messages[0] &&
      activeEvent.messages[0].timeout
    ) {
      setIsLoading(true)
      setTimeout(() => {
        const initialTime = convertFromMilliseconds(
          activeEvent.messages[0].timeout
        )

        setInitialValues({
          days: findOptionByValue(intervalMinutes, initialTime.days),
          hours: findOptionByValue(intervalHours, initialTime.hours),
          minutes: findOptionByValue(
            intervalMinutes,
            initialTime.minutes
          ),
          seconds: findOptionByValue(
            intervalMinutes,
            initialTime.seconds
          ),
        })

        setIsLoading(false)
      }, 10)
    } else {
      setIsLoading(true)
      setTimeout(() => {
        setInitialValues({
          days: null,
          hours: null,
          minutes: null,
          seconds: null,
        })

        setIsLoading(false)
      }, 10)
    }
  }, [activeGroupMessages])
  const convertTimeoutToReceive = (data: { timeout: number }) => {
    return {
      ...data,
      timeout: data.timeout / 1000,
    }
  }

  useEffect(() => {
    if (
      activeEvent &&
      activeEvent.messages &&
      activeEvent.messages[0] &&
      activeEvent.messages[0].personal
    ) {
      const convertedReceivedData =
        activeEvent.messages[0].personal.map((item: any) =>
          convertTimeoutToReceive(item)
        )
      setActiveGroupMessages(convertedReceivedData)
    }
  }, [activeEvent])

  useEffect(() => {
    if (
      activeEvent &&
      activeEvent.messages &&
      activeEvent.messages[0] &&
      activeEvent.messages[0].friends &&
      activeEvent.messages[0].friends != "none"
    ) {
      setFriends(activeEvent.messages[0].friends)
      setFriendsField(true)
      setFriendss(true)
    } else {
      setFriends("")
      setFriendsField(false)
    }

    if (
      activeEvent &&
      activeEvent.messages &&
      activeEvent.messages[0] &&
      activeEvent.messages[0].friends &&
      activeEvent.messages[0].friends == "none"
    ) {
      setFriendss(true)
      setFriends("")
      setFriendsField(false)
    }
  }, [activeEvent])
  useEffect(() => {
    if (activeEvent && activeEvent.user_id_path) {
      setCustomUserIdPath(activeEvent.user_id_path)
    }
  }, [activeEvent])

  useEffect(() => {
    if (activeEvent && activeEvent.event_name) {
      const activeOption = filterOptions.find(
        obj => obj.event === activeEvent.event_name
      )
      setEventName(activeOption)
      setValue("selectedFilter", activeOption)
    }
  }, [activeEvent])
  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
    setValue,
    reset,
    getValues,
    watch,
  } = useForm<IEvent>({
    defaultValues: {
      selectedFilter: eventName || filterOptions[0],
      redirect_event_id: redirects,
      friends:
        activeEvent &&
        activeEvent.messages &&
        activeEvent.messages[0] &&
        activeEvent.messages[0].friends
          ? true
          : false,
    },
  })

  const { fields, append } = useFieldArray({
    control,
    name: "messages[0].personal",
  })

  useEffect(() => {
    if (fields.length === 0) {
      append({ text: "", timeout: "", attachment: "" })
    }
  }, [fields, append])
  const {
    handleSubmit: createTemplates,
    formState: { errors: templateErrors },
    register: templateRegister,
  } = useForm()

  const actionPath = watch("selectedFilter")
  useEffect(() => {
    setCustomUserIdPath(actionPath.value)
  }, [actionPath])

  useEffect(() => {
    if (activeGroupMessages) {
      reset({
        ...getValues(),
        messages: activeGroupMessages,
      })
    }
  }, [activeGroupMessages])

  const handleUserSelectChange = (selected: any[]) => {
    if (
      selected.some((item: { value: string }) => item.value === "all")
    ) {
      setSelectedBots(
        bots.filter((user: { value: string }) => user.value !== "all")
      )
    } else {
      setSelectedBots(selected)
    }
  }

  const toggleActivetiy = (activeEvent: {
    enabled: any
    _id: string
  }) => {
    if (!activeEvent.enabled) {
      apis.startEvent(activeEvent._id)
      setActiveEvent({ ...activeEvent, enabled: true })
    } else {
      apis.stopEvent(activeEvent._id)
      setActiveEvent({ ...activeEvent, enabled: false })
    }
  }
  const convertToMilliseconds = () => {
    const daysToMs = (days || 0) * 24 * 60 * 60 * 1000
    const hoursToMs = (hours || 0) * 60 * 60 * 1000
    const minutesToMs = (minutes || 0) * 60 * 1000
    const secondsToMs = (seconds || 0) * 1000
    setStartTimeout(daysToMs + hoursToMs + minutesToMs + secondsToMs)
    return daysToMs + hoursToMs + minutesToMs + secondsToMs
  }
  const convertTimeoutToSend = (data: {
    personal?: personalMessage[]
    timeout: any
    friends?: string | undefined
  }) => {
    return {
      ...data,
      timeout: data.timeout * 1000,
    }
  }
  const onSubmit: SubmitHandler<IEvent> = async data => {
    let bots
    if (selectedBots) {
      bots = selectedBots.map((bot: { value: any }) => ({
        bot_id: bot.value,
      }))
    }
    const convertedData = data.messages.map(item =>
      convertTimeoutToSend(item)
    )
    convertToMilliseconds()
    const formattedData = {
      description: activeDescription,
      param_id: activeGroup.group_id,
      event_name: data.selectedFilter.event || "group_join",
      user_id_path: customUserIdPath || data.selectedFilter.value,
      send_many_times: data.send_many_times,
      filter_fields: filterField,
      bots: bots,
      messages: {
        personal: convertedData,
        friends: friendsText || "none",
        timeout: convertToMilliseconds(),
      },
    }
    if (
      !(
        Array.isArray(data.redirect_event_id) &&
        data.redirect_event_id.length === 0
      )
    ) {
      formattedData.redirect_event_id = data.redirect_event_id
    }

    if (isCreatingItem) {
      await setSnackbarText("Рассылка создана")
      await setShowSnackbar(true)
      setTimeout(() => {
        setShowSnackbar(false)
      }, 2000)

      await apis.createEvent(formattedData)

      const eventsData = await apis.getEvents()
      await apis.startEvent(eventsData[eventsData.length - 1]._id)
      setIsCreatingItem(false)
    } else {
      await setSnackbarText("Рассылка обновлена")
      await setShowSnackbar(true)
      setTimeout(() => {
        setShowSnackbar(false)
      }, 2000)
      await apis.updateEvent(activeEvent._id, formattedData)
      setActiveEvent(activeEvent)
    }

    const activeGroupData = await apis.getGroup(Number(groupId))
    setActiveGroup(activeGroupData)

    const eventsData = await apis.getEvents()

    const filteredEvents = eventsData?.filter(
      (event: { param_id: any }) =>
        event.param_id === activeGroupData?.group_id
    )
    setEvents(filteredEvents)

    if (isCreatingItem) {
      setActiveEvent(filteredEvents[filteredEvents.length - 1])
    }

    setIsCreatingItem(false)
  }

  const onCreateBtnClick = async () => {
    setCustomFields([{ text: "", timeout: "" }])
    setActiveGroupMessages([{ text: "", timeout: "" }])
    reset()
    setActiveDescription("")
    setSelectedBots([])
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(true)
      setInitialValues({
        days: null,
        hours: null,
        minutes: null,
        seconds: null,
      })
      setIsLoading(false)
    }, 50)
    if (friends == true) {
      setFriendss(false)
    }
    const newEvent = {
      _id: "631cf28b72a61d43fdsaa1732bcd8",
      description: "Новая рассылка",
    }
    setActiveDescription("Новая рассылка")
    setEvents([...events, newEvent])
    setActiveEvent(newEvent)
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    setText("")
    setIsCreatingItem(true)
  }
  useEffect(() => {
    const checkAndCreateEvent = () => {
      if (events.length === 0) {
        const newEvent = {
          _id: "631cf28b72a61d43fdsaa1732bcd8",
          description: "Новая рассылка",
        }
        setActiveDescription("Новая рассылка")
        setEvents([...events, newEvent])
        setActiveEvent(newEvent)
        setIsCreatingItem(true)
      }
    }

    const timer = setTimeout(checkAndCreateEvent, 1000)
    return () => clearTimeout(timer)
  }, [events, setActiveDescription, setEvents, setActiveEvent])

  const onDeleteBtnClick = async () => {
    if (activeEvent._id != "631cf28b72a61d43fdsaa1732bcd8") {
      await setSnackbarText("Рассылка удалена")
      await setShowSnackbar(true)
      setTimeout(() => {
        setShowSnackbar(false)
      }, 2000)
      await setIsConfirmationModalOpen(false)
      await apis.deleteEvent(activeEvent._id)
    }
    setCustomFields([{ text: "", timeout: "" }])
    setActiveGroupMessages([{ text: "", timeout: "" }])
    reset()
    setActiveDescription("")
    setSelectedBots("")
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(true)
      setInitialValues({
        days: null,
        hours: null,
        minutes: null,
        seconds: null,
      })
      setIsLoading(false)
    }, 50)
    const testFunc = async () => {
      const activeGroupData = await apis.getGroup(Number(groupId))
      setActiveGroup(activeGroupData)
      const eventsData = await apis.getEvents()
      const filteredEvents = eventsData?.filter(
        (event: { param_id: any }) =>
          event.param_id === activeGroupData?.group_id
      )
      setEvents(filteredEvents)

      await navigate(
        `/groups/${activeGroup.group_id}/${filteredEvents[0]._id}`
      )
    }
    await testFunc()
    setIsCreatingItem(false)

    const currentGroupId = window.location.pathname.split("/")[2]
    const currentEventId = window.location.pathname.split("/")[3]

    const activeGroupData = await apis.getGroup(
      Number(currentGroupId)
    )
    setActiveGroup(activeGroupData)

    const eventsData = await apis.getEvents()
    const filteredEvents = eventsData?.filter(
      (event: { param_id: any }) =>
        event.param_id === activeGroupData?.group_id
    )
    setEvents(filteredEvents)

    const activeEventData = filteredEvents.filter(
      (event: { _id: string }) => {
        return event._id === currentEventId
      }
    )[0]
    setActiveEvent(activeEventData)
    setActiveDescription(activeEventData?.description)
  }

  const onItemClick = (
    e: { preventDefault: () => void },
    event: unknown
  ) => {
    e.preventDefault()
    setTimeout(async () => {
      setActiveDescription("")
      setActiveEvent()
      reset()

      const currentGroupId = window.location.pathname.split("/")[2]
      const currentEventId = window.location.pathname.split("/")[3]

      const activeGroupData = await apis.getGroup(
        Number(currentGroupId)
      )
      setActiveGroup(activeGroupData)

      const eventsData = await apis.getEvents()

      const filteredEvents = eventsData?.filter(
        (event: { param_id: any }) =>
          event.param_id === activeGroupData?.group_id
      )
      setEvents(filteredEvents)

      const activeEventData = filteredEvents.filter(
        (event: { _id: string }) => {
          return event._id === currentEventId
        }
      )[0]
      setActiveEvent(activeEventData)
      setActiveDescription(activeEventData.description)
      setIsCreatingItem(false)
      setIsLoading(true)
    }, 0)

    if (event && event.messages && event.messages[0]) {
      setText(activeEvent.messages[0].personal[0].text)
    }
    navigate(`/groups/${activeGroup?.group_id}/${event?._id}`)
  }

  const addTemplate = (data: unknown) => {
    setIsMessageTemplateModalOpen(true)
    setMessages([...messages, data.temp_name])
    setIsMessageTemplateModalOpen(false)
    setSnackbarText("Шаблон добавлен !")
    setShowSnackbar(true)
    reset()
  }

  const insertVariable = (variable) => {
    if (activeTextarea) {
      const textIndex = parseInt(activeTextarea.getAttribute("data-text-index"));
      const startPosition = activeTextarea.selectionStart;
      const endPosition = activeTextarea.selectionEnd;
  
      const originalText = textValues[textIndex] || activeTextarea.value;
      const newText = [
        originalText.slice(0, startPosition),
        variable,
        originalText.slice(endPosition),
      ].join("");
  
      const newTextValues = [...textValues];
      newTextValues[textIndex] = newText;
      setTextValues(newTextValues);
  
      activeTextarea.setRangeText(variable, startPosition, endPosition, "end");
  
      setValue(`messages.${textIndex}.text`, newText);
      register(`messages.${textIndex}.text`).onChange({ target: { value: newText } });
    }
  };
  const insertVariableFriendsText = (
    variable: string | unknown[]
  ) => {
    if (!activeTextarea) return

    const startPos = activeTextarea.selectionStart
    const endPos = activeTextarea.selectionEnd
    const newValue =
      activeTextarea.value.substring(0, startPos) +
      variable +
      activeTextarea.value.substring(endPos)

    setFriends(newValue)

    setTimeout(() => {
      if (activeTextarea) {
        activeTextarea.selectionStart = startPos + variable.length
        activeTextarea.selectionEnd = startPos + variable.length
        activeTextarea.focus()
      }
    }, 0)
  }

  const focusOnNewInput = () => {
    setTimeout(() => {
      const lastIndex =
        document.querySelectorAll(".interval_input").length - 1
      const lastInput =
        document.querySelectorAll(".interval_input")[lastIndex]
      if (lastInput) {
        lastInput.focus()
      }
    }, 100)
  }
  const handleSwitchChange = (event: {
    target: { checked: unknown; nextElementSibling: unknown }
  }) => {
    const labelText = event.target.checked ? "Вкл" : "Выкл"
    const label = event.target.nextElementSibling
    label.textContent = labelText
  }

  const openPinModal = messageIndex => {
    setActiveMessageIndex(messageIndex)

    const currentAttachments = getValues(
      `messages.${messageIndex}.attachment`
    )

    if (currentAttachments) {
      const currentPacks = currentAttachments
        .split(";")
        .map(pack => pack.split(","))
      setAttachmentPacks(currentPacks)
      console.log(currentPacks)
    } else {
      setAttachmentPacks([[""]])
    }

    setIsPinModalOpen(true)
  }
  const setAttachmentLength = index => {
    const currentAttachments = getValues(
      `messages.${index}.attachment`
    )

    if (currentAttachments) {
      const currentPacks = currentAttachments
        .split(";")
        .map(pack => pack.split(","))

      return currentPacks
    }
  }

  const addAttachmentField = (
    packIndex: string | number,
    attachmentIndex: any,
    pack: any
  ) => {
    if (pack.length < 10) {
      setAttachmentPacks(
        attachmentPacks.map((pack, currentPackIndex) => {
          if (currentPackIndex === packIndex) {
            return [
              ...pack.slice(0, attachmentIndex + 1),
              "",
              ...pack.slice(attachmentIndex + 1),
            ]
          } else {
            return pack
          }
        })
      )
    } else {
      setSnackbarText("Максимальное количество файлов: 10")
      setShowSnackbar(true)
      setTimeout(() => {
        setShowSnackbar(false)
      }, 2000)
    }
  }

  const updateAttachmentField = (e, packIndex, attachmentIndex) => {
    const newPacks = [...attachmentPacks]
    newPacks[packIndex][attachmentIndex] = e.target.value
    setAttachmentPacks(newPacks)
  }

  const saveAttachments = () => {
    const attachmentsString = attachmentPacks
      .map(pack => pack.join(","))
      .join(";")
    setValue(
      `messages.${activeMessageIndex}.attachment`,
      attachmentsString
    )
    setIsPinModalOpen(false)
  }
  const removeAttachmentPack = indexToRemove => {
    setAttachmentPacks(
      attachmentPacks.filter((_, index) => index !== indexToRemove)
    )
  }

  const setFrText = () => {
    if (friendsTextField) {
      setFriendsField(false)
    } else {
      setFriendsField(true)
    }
    if (!friends) {
      setFriendss(true)
    }
  }

  function getFileWord(num: number) {
    const cases = [2, 0, 1, 1, 1, 2]
    const words = ["файл", "файла", "файлов"]
    return `${num} ${
      words[
        num % 100 > 4 && num % 100 < 20
          ? 2
          : cases[num % 10 < 5 ? num % 10 : 5]
      ]
    }`
  }

  const handleDaysChange = (selectedOption: { value: any }) => {
    setDays(selectedOption.value)
  }
  const handleHoursChange = (selectedOption: { value: any }) => {
    setHours(selectedOption.value)
  }
  const handleMinutesChange = (selectedOption: { value: any }) => {
    setMinutes(selectedOption.value)
  }
  const handleSecondsChange = (selectedOption: { value: any }) => {
    setSeconds(selectedOption.value)
  }

  const setFriend = () => {
    if (friends == true) {
      setFriendss(false)
    } else {
      setFriendss(true)
    }
  }

  const defaultActiveTabs = () => {
    const tabs = []
    // Замените 'N' на количество компонентов
    const length =
      activeGroupMessages?.length || customFields?.length || 0
    for (let i = 0; i < length; i++) {
      tabs.push("text")
    }
    return tabs
  }

  const [activeTabs, setActiveTabs] = useState(defaultActiveTabs)
  const [textValues, setTextValues] = useState([])
  const [templat, setTemplat] = useState([])
  const setTexttemplat = (index, res) => {
    const newTemplats = [...templat]
    newTemplats[index] = res
    setTemplat(newTemplats)
  }

  const transformText = async index => {
    const text =
      textValues[index] ||
      (activeGroupMessages && activeGroupMessages[index]?.text) ||
      (customFields && customFields[index]?.text)
    if (text) {
      const res = await apis.executeTemplate(
        activeEvent._id,
        `63eff55c68fc13bf8441a884`,
        text
      )
      setTexttemplat(index, res)
    }
  }

  const updateActiveTab = (index, tab) => {
    const newActiveTabs = [...activeTabs]
    newActiveTabs[index] = tab
    setActiveTabs(newActiveTabs)
  }
  useEffect(() => {
    setActiveTabs(defaultActiveTabs())
  }, [activeGroupMessages, customFields])

  // Filter

  const addFieldGroup = () => {
    setFieldId(fieldId + 1)
    setFields([
      ...filterfields,
      { id: fieldId, value1: "", value2: "", value3: "" },
    ])
  }

  const removeAllFields = () => {
    setFields([])
  }

  
  
  const saveFields = () => {
    setIsFilterModalOpen(!filterModalOpen);
  
    const filterObjFields = filterfields.map(field => {
      const result = { path: field.value1 };
  
      switch (field.value2) {
        case "e":
          result.e = field.value3;
          break;
        case "ne":
          result.ne = field.value3;
          break;
        case "gt":
          result.gt = Number(field.value3);
          break;
        case "gte":
          result.gte = Number(field.value3);
          break;
        case "lt":
          result.lt = Number(field.value3);
          break;
        case "lte":
          result.lte = Number(field.value3);
          break;
        case "search.regex":
          result.search = { regex: field.value3 };
          break;
        default:
          break;
      }
  
      return result;
    });
  
    setFilterField(filterObjFields);
  };
  
  

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldIndex: number,
    inputIndex: number
  ) => {
    const newFields = [...filterfields]
    newFields[fieldIndex][`value${inputIndex + 1}`] =
      event.target.value
    setFields(newFields)
  }

  // friends textarea trnslate

  const [activeTabFriends, setActiveTabFriends] = useState("text")
  const [friendsTemplate, setFriendsTemplate] = useState("")

  const transformFriendsText = async () => {
    if (friendsText) {
      const res = await apis.executeTemplate(
        activeEvent._id,
        `63eff55c68fc13bf8441a884`,
        friendsText
      )
      setFriendsTemplate(res)
    }
  }

  const updateActiveTabFriends = tab => {
    setActiveTabFriends(tab)
  }

  return (
    <>
      <Tooltip id="my-tooltip" />
      <CustomSnackbar
        message={`${snackbarText} !`}
        type={
          snackbarText !== "Максимальное количество файлов: 10"
            ? "success"
            : "error"
        }
        show={showSnackbar}
      />
      <div className="page-content mailing_settings">
        <Container fluid>
          <Breadcrumbs title={"Настройка рассылок"} />
          <p>
            Здесь вы можете увидеть свои рассылки, редактировать их и
            создавать новые
          </p>

          <HeaderSelected
            title={activeGroup?.title}
            img={activeGroup?.photo}
          />

          <div className={"bots-settings-content d-flex"}>
            <div className={"bots-settings-left mailing_top_items"}>
              <div className="mailings_list">
                <h4 className="mb-2 card-title">Список рассылок: </h4>
                <div
                  ref={scrollRef}
                  className={"bots-settings-wrapper mailings_lists"}
                >
                  {events?.map((event: any) => (
                    <Link
                      onClick={(e: { preventDefault: () => void }) =>
                        onItemClick(e, event)
                      }
                      key={event._id}
                    >
                      <GroupsSettingsItem
                        event={event}
                        activeBot={activeEvent}
                      />
                    </Link>
                  ))}
                </div>
              </div>

              <button
                className={
                  "bots-settings-create btn btn-primary d-block"
                }
                onClick={onCreateBtnClick}
              >
                + Добавить новую
              </button>
              <button
                className={"btn btn-danger d-block"}
                onClick={() => {
                  if (
                    activeEvent._id == "631cf28b72a61d43fdsaa1732bcd8"
                  ) {
                    onDeleteBtnClick()
                  } else {
                    setIsConfirmationModalOpen(true)
                  }
                }}
              >
                <i className="bx bx-trash"></i> Удалить
              </button>
            </div>

            <form
              className={"bots-settings-right"}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <div
                  className={
                    "form-flex d-flex align-items-end justify-content-between  flexColumn"
                  }
                >
                  <div className={"flex-grow-1"}>
                    <CardTitle className="mb-2">
                      Событие, при котором срабатывает рассылка:
                    </CardTitle>
                    <div
                      className={
                        "bots-settings-input-wrapper d-flex w-100"
                      }
                    >
                      <Controller
                        control={control}
                        name="selectedFilter"
                        render={({ field }) => (
                          <Select
                            styles={customStylesSelect}
                            className={"flex-grow-1 bg-white"}
                            options={filterOptions}
                            defaultValue={
                              eventName || filterOptions[0]
                            }
                            onChange={option => {
                              setSelectedValue(option)
                              if (
                                typeof field.onChange === "function"
                              ) {
                                field.onChange(option)
                              }
                            }}
                            {...field}
                          />
                        )}
                      />
                    </div>
                  </div>

                  <div
                    onClick={() => setIsFilterModalOpen(true)}
                    className={
                      "btn btn-outline-primary events-settings-btn"
                    }
                  >
                    <button
                      className={"pro-marker clean-btn"}
                      type={"button"}
                    >
                      Фильтр
                    </button>
                  </div>
                </div>
                <p className="text_margin">
                  Сообщения срабатывают только на новые события
                  (подписки, заявки, выход из группы и тд)
                </p>
              </div>
              {isCreatingItem && (
                <h4>Заполните данные для новой рассылки</h4>
              )}
              <div
                className={
                  "form-flex d-flex justify-content-between main_mailing_width"
                }
              >
                <div className={"flex-grow-1 mailing_title"}>
                  <CardTitle className="mb-2">
                    Название рассылки:
                  </CardTitle>
                  <div
                    className={
                      "bots-settings-input-wrapper d-flex w-100"
                    }
                  >
                    <input
                      className={"topup-modal-input w-100"}
                      type="text"
                      placeholder="Название"
                      value={activeDescription}
                      // {...register("description", { required: true })}
                      onChange={e => {
                        setActiveDescription(e.target.value)
                        // setValue("description", e.target.value)
                      }}
                    />
                  </div>
                  <p className={"form-error-text"}>
                    {errors.description && (
                      <p>Пожалуйста заполните название !</p>
                    )}
                  </p>
                </div>

                <div className="mailing_enabled">
                  <CardTitle className="mb-2">Состояние:</CardTitle>

                  <div className="form-check form-switch form-switch-lg">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customSwitchsizelg"
                      checked={activeEvent && activeEvent.enabled}
                      onClick={() => toggleActivetiy(activeEvent)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customSwitchsizelg"
                    >
                      {activeEvent && activeEvent.enabled
                        ? "Вкл"
                        : "Выкл"}
                    </label>
                  </div>
                </div>

                <div>
                  <CardTitle className="mb-2">
                    Отслеживать конверсию:
                  </CardTitle>

                  <div className="form-check form-switch form-switch-lg">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customSwitchsizelg"
                      defaultChecked
                      onChange={handleSwitchChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customSwitchsizelg"
                    >
                      Вкл
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <div className={"d-flex align-items-center"}>
                  <CardTitle className="mb-2">
                    Интервал реагирования:
                  </CardTitle>

                  <button
                    className={"clean-btn blue-btn link_underline"}
                    type={"button"}
                  >
                    Использовать рандом
                  </button>
                </div>
                {!isLoading ? (
                  <div
                    className={
                      "custom-mailing-interval-wrappper w-100"
                    }
                  >
                    <UnitSelect
                      unit="days"
                      placeholder="дни"
                      options={intervalMinutes}
                      initialValue={initialValues.days}
                      onChange={handleDaysChange}
                    />

                    <UnitSelect
                      unit="hours"
                      placeholder="часы"
                      options={intervalHours}
                      initialValue={initialValues.hours}
                      onChange={handleHoursChange}
                    />

                    <UnitSelect
                      unit="minutes"
                      placeholder="минуты"
                      options={intervalMinutes}
                      initialValue={initialValues.minutes}
                      onChange={handleMinutesChange}
                    />

                    <UnitSelect
                      unit="seconds"
                      placeholder="секунды"
                      options={intervalMinutes}
                      initialValue={initialValues.seconds}
                      onChange={handleSecondsChange}
                    />
                  </div>
                ) : (
                  ""
                )}
                <p className="text_margin">
                  Время, через которое отправлять сообщение при
                  выполнении события
                </p>
              </div>

              <div>
                <CardTitle className="mb-2">Время работы:</CardTitle>

                <div
                  className={"groups-settings-input-wrapper d-flex"}
                >
                  <input
                    className={"topup-modal-input"}
                    type="text"
                    placeholder="12:00"
                  />

                  <input
                    className={"topup-modal-input"}
                    type="text"
                    placeholder="20:00"
                  />
                </div>
              </div>

              <div className={"d-flex justify-content-between"}>
                <div>
                  <CardTitle className="mb-2 pro-marker">
                    Редирект:
                  </CardTitle>
                  <div
                    className="form-check form-switch form-switch-lg"
                    onClick={() => setIsProModalOpen(true)}
                  >
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customSwitchsizelg"
                      onChange={handleSwitchChange}
                      disabled
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customSwitchsizelg"
                    >
                      Выкл
                    </label>
                  </div>
                </div>

                <div
                  className="redirect_mailing"
                  onClick={() => setIsProModalOpen(true)}
                >
                  <CardTitle className="mb-2 pro-marker">
                    Редирект-рассылка:
                  </CardTitle>

                  <Select
                    styles={customStylesSelect}
                    options={redirects}
                    // value={redirects || ''}

                    isDisabled={true}
                    placeholder="Выбрать"
                    onChange={(selectedOption: { value: any }) => {
                      setValue(
                        "redirect_event_id",
                        selectedOption.value
                      )
                    }}
                  />
                  <input
                    {...register("redirect_event_id")}
                    type="hidden"
                  />
                </div>
              </div>

              <div>
                <CardTitle className="mb-2 pro-marker">
                  Ручное указание пути ID пользователей:
                </CardTitle>

                <div className={"d-flex justify-content-between "}>
                  <div className="switch_id_path">
                    <div
                      className="form-check form-switch form-switch-lg"
                      onClick={() => setIsProModalOpen(true)}
                    >
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitchsizelg"
                        disabled
                        onChange={e => {
                          handleSwitchChange(e)
                          if (customUserIdPathActiv) {
                            setCustomUserIdPathActiv(false)
                          } else {
                            setCustomUserIdPathActiv(true)
                          }
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customSwitchsizelg"
                      >
                        Выкл
                      </label>
                    </div>
                  </div>

                  <div
                    className={"flex-grow-1"}
                    onClick={() => setIsProModalOpen(true)}
                  >
                    <input
                      className={
                        customUserIdPathActiv
                          ? "topup-modal-input w-100 disactive"
                          : "topup-modal-input w-100"
                      }
                      type="text"
                      placeholder="путь"
                      value={customUserIdPath}
                      onChange={e => {
                        setCustomUserIdPath(e.target.value)
                      }}
                      disabled={customUserIdPathActiv}
                    />
                    <p className="text_margin">
                      Укажите JSON-путь к объекту с id-пользователя
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="logic_bot"
                onClick={() => setIsProModalOpen(true)}
              >
                <CardTitle className="mb-2 pro-marker">
                  Логика бота:
                </CardTitle>
                <Select
                  isDisabled={true}
                  styles={customStylesSelect}
                  options={logic}
                  placeholder={logic[0].value}
                />
              </div>

              {(activeGroupMessages?.length
                ? activeGroupMessages
                : customFields
              ).map((field: any, index: any) => (
                <>
                  <div className="mailing_message" key={field.id}>
                    {index > 0 && (
                      <div className="mailing_interval">
                        <CardTitle className="mb-2">
                          Интервал отправки:
                        </CardTitle>
                        <div
                          className={
                            "groups-settings-input-wrapper d-flex"
                          }
                        >
                          <input
                            className={
                              "topup-modal-input interval_input"
                            }
                            type="number"
                            {...register(
                              `messages.${index}.timeout` as const
                            )}
                            defaultValue={field.timeout}
                            placeholder="0"
                            onChange={e => {
                              const newValue = parseInt(
                                e.target.value
                              )

                              setValue(
                                `messages.${index}.timeout`,
                                newValue
                              )
                            }}
                          />
                          <p>секунд</p>
                        </div>
                      </div>
                    )}

                    <div className={"message-wrapper"}>
                      <div
                        className={"d-flex justify-content-between"}
                      >
                        <div>
                          <CardTitle className="mb-2 mess_wrap_title">
                            <span>Текст сообщения:</span>
                            {index > 0 && (
                              <button
                                type="button"
                                className="remove_btn_mess"
                                onClick={() => {
                                  if (activeGroupMessages) {
                                    const newFields =
                                      activeGroupMessages.filter(
                                        (_: any, fieldIndex: any) =>
                                          fieldIndex !== index
                                      )
                                    setActiveGroupMessages(newFields)
                                  } else {
                                    const newFields =
                                      customFields.filter(
                                        (_: any, fieldIndex: any) =>
                                          fieldIndex !== index
                                      )
                                    setCustomFields(newFields)
                                  }
                                }}
                              >
                                <img
                                  src={DeleteButton}
                                  alt="delete button"
                                />
                              </button>
                            )}
                          </CardTitle>
                          <p>
                            Введите своё сообщение сами или
                            используйте готовые шаблоны:
                          </p>
                          <div className={"messages-wrapper"}>
                            {messages?.map(
                              (
                                message:
                                  | string
                                  | number
                                  | boolean
                                  | ReactElement<
                                      any,
                                      | string
                                      | JSXElementConstructor<any>
                                    >
                                  | ReactFragment
                                  | ReactPortal
                                  | null
                                  | undefined,
                                index: Key | null | undefined
                              ) => (
                                <p
                                  className={
                                    "btn btn-outline-primary"
                                  }
                                  key={index}
                                  data-tooltip-id="my-tooltip"
                                  data-tooltip-content={
                                    messageValues[message] || message
                                  }
                                  data-tooltip-place="top"
                                  onClick={() =>
                                    insertVariable(message)
                                  }
                                >
                                  {message}
                                </p>
                              )
                            )}
                            <p
                              className={
                                "btn btn-outline-primary add_new_mess"
                              }
                              onClick={() =>
                                setIsMessageTemplateModalOpen(true)
                              }
                            >
                              <AccountStatus status="Pro" />
                              Добавить
                            </p>
                          </div>
                          <button
                            className={
                              "clean-btn blue-btn link_underline"
                            }
                          >
                            Использовать рандом
                          </button>
                        </div>
                      </div>

                      <div>
                        <div className="text_toggler">
                          <input
                            type="button"
                            onClick={() =>
                              updateActiveTab(index, "text")
                            }
                            className={
                              activeTabs[index] === "text"
                                ? "active-tab"
                                : ""
                            }
                            value="Текст"
                          />
                          <input
                            type="button"
                            onClick={() => {
                              updateActiveTab(index, "preview")
                              transformText(index)
                            }}
                            className={
                              activeTabs[index] === "preview"
                                ? "active-tab"
                                : ""
                            }
                            value="Как текст будет выглядеть"
                          />
                        </div>
                        {(!activeTabs[index] ||
                          activeTabs[index] === "text") && (
                          <div className="text_component first_text_component">
                            <textarea
                            data-text-index={index}
                              ref={textareaRef}
                              {...register(
                                `messages.${index}.text` as const,
                                { required: true }
                              )}
                              onChange={e => {
                                setValue(
                                  `messages.${index}.text`,
                                  e.target.value
                                )
                                const newTextValues = [...textValues]
                                newTextValues[index] = e.target.value
                                setTextValues(newTextValues)
                                register(
                                  `messages.${index}.text` as const,
                                  { required: true }
                                ).onChange(e)
                              }}
                              defaultValue={field.text}
                              onFocus={e =>
                                setActiveTextarea(e.target)
                              }
                              className={
                                "topup-modal-input group-settings-textarea"
                              }
                              placeholder="Максимум 256 символов"
                            />
                          </div>
                        )}
                        {activeTabs[index] === "preview" && (
                          <div className="text_component second_text_component">
                            <textarea
                              className={
                                "topup-modal-input group-settings-textarea"
                              }
                              readOnly
                              value={templat[index]}
                              placeholder="Рузультат"
                            />
                          </div>
                        )}

                        <p>
                          При отправке двух и более сообщений
                          рекомендуем использовать рандом, чтобы
                          избежать блокировки от ВК
                        </p>

                        <button
                          className={"w-100 group-settings-pin-btn"}
                          type={"button"}
                          onClick={() => openPinModal(index)}
                        >
                          {setAttachmentLength(index)
                            ? `Прикреплено ${getFileWord(
                                setAttachmentLength(index).flat()
                                  .length
                              )}`
                            : "Прикрепить"}
                        </button>
                        <p>Макс. кол-во файлов: 10</p>
                      </div>
                    </div>
                    <button
                      type={"button"}
                      className={"btn btn-primary w-100 mt-3"}
                      onClick={() => {
                        if (activeGroupMessages) {
                          const newFields = [
                            ...activeGroupMessages,
                            { text: "", timeout: "", attachment: "" },
                          ]
                          setActiveGroupMessages(newFields)
                        } else {
                          const newFields = [
                            ...customFields,
                            { text: "", timeout: "", attachment: "" },
                          ]

                          setCustomFields(newFields)
                        }
                        focusOnNewInput()
                      }}
                    >
                      Добавить сообщение
                    </button>
                  </div>

                  {errors?.messages &&
                    errors.messages[index]?.text && (
                      <span className="error_message">
                        * Поле является обязательным!
                      </span>
                    )}
                </>
              ))}

              <div>
                <CardTitle className="mb-2">
                  Отправлять от имени:
                </CardTitle>

                <Select
                  isMulti
                  placeholder="Выбрать"
                  value={selectedBots}
                  styles={customStylesSelect}
                  options={bots}
                  onChange={handleUserSelectChange}
                />
              </div>

              <div className={"d-flex justify-content-between"}>
                <div>
                  <CardTitle className="mb-2">
                    Добавлять ли в друзья:
                  </CardTitle>
                  <div className="form-check form-switch form-switch-lg">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customSwitchsizelg"
                      {...register("friends")}
                      onClick={setFriend}
                      checked={friends ? true : false}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customSwitchsizelg"
                    >
                      {friends ? "Вкл" : "Выкл"}
                    </label>
                  </div>
                </div>

                <div>
                  <CardTitle className="mb-2">
                    Текст для заявки:
                  </CardTitle>
                  <div className="form-check form-switch form-switch-lg">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customSwitchsizelg"
                      defaultChecked={friendsTextField}
                      onChange={() => setFrText()}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customSwitchsizelg"
                    >
                      {friendsTextField ? "Вкл" : "Выкл"}
                    </label>
                  </div>
                </div>
              </div>

              {friendsTextField && friendsText != "none" ? (
                <div className="mailing_message">
                  <div className={"message-wrapper"}>
                    <div className={"d-flex justify-content-between"}>
                      <div>
                        <CardTitle className="mb-2 mess_wrap_title">
                          <span>Текст сообщения:</span>
                        </CardTitle>
                        <p>
                          Введите своё сообщение сами или используйте
                          готовые шаблоны:
                        </p>
                        <div className={"messages-wrapper"}>
                          {messages?.map(
                            (
                              message:
                                | string
                                | number
                                | boolean
                                | ReactElement<
                                    any,
                                    | string
                                    | JSXElementConstructor<any>
                                  >
                                | ReactFragment
                                | ReactPortal
                                | null
                                | undefined,
                              index: Key | null | undefined
                            ) => (
                              <p
                                className={"btn btn-outline-primary"}
                                key={index}
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content={
                                  messageValues[message] || message
                                }
                                data-tooltip-place="top"
                                onClick={() =>
                                  insertVariableFriendsText(message)
                                }
                              >
                                {message}
                              </p>
                            )
                          )}
                          <p
                            className={
                              "btn btn-outline-primary add_new_mess"
                            }
                            onClick={() =>
                              setIsMessageTemplateModalOpen(true)
                            }
                          >
                            <AccountStatus status="Pro" />
                            Добавить
                          </p>
                        </div>
                        <button
                          className={
                            "clean-btn blue-btn link_underline"
                          }
                        >
                          Использовать рандом
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="text_toggler">
                        <input
                          type="button"
                          onClick={() =>
                            updateActiveTabFriends("text")
                          }
                          className={
                            activeTabFriends === "text"
                              ? "active-tab"
                              : ""
                          }
                          value="Текст"
                        />
                        <input
                          type="button"
                          onClick={() => {
                            updateActiveTabFriends("preview")
                            transformFriendsText()
                          }}
                          className={
                            activeTabFriends === "preview"
                              ? "active-tab"
                              : ""
                          }
                          value="Как текст будет выглядеть"
                        />
                      </div>
                      {(!activeTabFriends ||
                        activeTabFriends === "text") && (
                        <div className="text_component first_text_component">
                          <textarea
                            ref={textareaRef}
                            {...register(`messages[0].friends`)}
                            className={
                              "topup-modal-input group-settings-textarea"
                            }
                            value={friendsText}
                            onFocus={e => setActiveTextarea(e.target)}
                            onChange={e => {
                              setFriends(e.target.value)
                              register(
                                `messages[0].friends`
                              ).onChange(e)
                            }}
                            placeholder="Максимум 256 символов"
                          />
                        </div>
                      )}
                      {activeTabFriends === "preview" && (
                        <div className="text_component second_text_component">
                          <textarea
                            className={
                              "topup-modal-input group-settings-textarea"
                            }
                            readOnly
                            value={friendsTemplate}
                            placeholder="Рузультат"
                          />
                        </div>
                      )}
                    </div>
                    
                  </div>
                </div>
              ) : (
                ""
              )}

              <div>
                <CardTitle className="mb-2">
                  Отправлять сообщения заново в случае повтора
                  события:
                </CardTitle>
                <div className="form-check form-switch form-switch-lg">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    {...register("send_many_times")}
                    id="customSwitchsizelg"
                    // defaultChecked={
                    //   activeEvent && activeEvent.send_many_times
                    // }
                    onChange={handleSwitchChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="customSwitchsizelg"
                  >
                    {activeEvent && activeEvent.send_many_times
                      ? "Вкл"
                      : "Выкл"}
                  </label>
                </div>
              </div>

              <div className={"bots-settings-btn"}>
                <button className={"btn btn-primary"} type={"submit"}>
                  Сохранить
                </button>
              </div>
            </form>
          </div>
        </Container>
      </div>

      {/* delete confirmation isConfirmationModalOpen */}
      <Modal
        isOpen={isConfirmationModalOpen}
        role="dialog"
        autoFocus={true}
        centered
        data-toggle="modal"
        toggle={() => {
          setIsConfirmationModalOpen(!isConfirmationModalOpen)
        }}
      >
        <div>
          <ModalHeader
            className=""
            toggle={() => {
              setIsConfirmationModalOpen(!isConfirmationModalOpen)
            }}
          >
            <p className={"topup-modal-name"}>
              Вы уверены, что хотите удалить рассылку ?
            </p>
          </ModalHeader>
        </div>
        <div className="modal-body">
          <p className={"confirmation-text"}>
            Удаляемые боты: <span> {activeEvent?.description}</span>
          </p>

          <div className={"topup-modal-footer"}>
            <button
              className={"btn btn-primary"}
              onClick={onDeleteBtnClick}
            >
              Да
            </button>
            <button
              className={"btn btn-secondary"}
              onClick={() =>
                setIsConfirmationModalOpen(!isConfirmationModalOpen)
              }
            >
              Нет
            </button>
          </div>
        </div>
      </Modal>
      {/* Filter modal */}
      <Modal
        isOpen={filterModalOpen}
        role="dialog"
        autoFocus={true}
        centered
        data-toggle="modal"
        toggle={() => {
          setIsFilterModalOpen(!filterModalOpen)
        }}
      >
        <div>
          <ModalHeader
            className=""
            toggle={() => {
              setIsFilterModalOpen(!filterModalOpen)
            }}
          >
            <p className={"topup-modal-name pro-marker"}>
              Фильтры входящих событий
            </p>
          </ModalHeader>
        </div>
        <div className="modal-body">
          <p className={"confirmation-text"}>
            Действие будет выполнено, если результат проверки условий
            будет успешным
          </p>

          <div className="filter_modal_items filter_fields">
            {filterfields.map((field: any, fieldIndex: any) => (
              <div className="attachment-field " key={field.id}>
                <input
                  placeholder="путь"
                  className="topup-modal-input w-100"
                  value={field.value1}
                  onChange={e => handleInputChange(e, fieldIndex, 0)}
                />

                <select
                  className="filter_select topup-modal-input"
                  value={field.value2}
                  onChange={e => handleInputChange(e, fieldIndex, 1)}
                >
                  <option value="e">=</option>
                  <option value="ne">{`!=`}</option>
                  <option value="gt">{`>`}</option>
                  <option value="gte">{`>=`}</option>
                  <option value="lt">{`<`}</option>
                  <option value="lte">{`<=`}</option>
                  <option value="search.regex">{`поиск`}</option>
                </select>
                <input
                  placeholder="значение"
                  className="topup-modal-input w-100"
                  value={field.value3}
                  onChange={e => handleInputChange(e, fieldIndex, 2)}
                />
              </div>
            ))}
            <button
              className="btn btn-outline-primary add_filter_fields"
              onClick={addFieldGroup}
            >
              Добавить условие
            </button>
          </div>

          <div className={"topup-modal-footer"}>
            <button
              className={"btn btn-danger"}
              onClick={removeAllFields}
            >
              Удалить все условия
            </button>
            <button
              onClick={saveFields}
              className={"btn btn-primary"}
            >
              Установить
            </button>
          </div>
        </div>
      </Modal>
      {/* PRO  proModalOpen */}
      <Modal
        isOpen={proModalOpen}
        role="dialog"
        autoFocus={true}
        centered
        data-toggle="modal"
        toggle={() => {
          setIsProModalOpen(!proModalOpen)
        }}
      >
        <div>
          <ModalHeader
            className=""
            toggle={() => {
              setIsProModalOpen(!proModalOpen)
            }}
          >
            <p className={"topup-modal-name"}>Нужен Pro-тариф?</p>
          </ModalHeader>
        </div>
        <div className="modal-body">
          <p className={"confirmation-text"}>
            Чтобы пользоваться этой опцией, вам необходимо купить
            Pro-тариф. Вы хотите это сделать?
          </p>

          <div className={"topup-modal-footer"}>
            <Link to="/topup">
              <button className={"btn btn-primary"}>Да</button>
            </Link>
            <button
              className={"btn btn-secondary"}
              onClick={() => setIsProModalOpen(!proModalOpen)}
            >
              Нет
            </button>
          </div>
        </div>
      </Modal>
      {/* message template isMessageTemplateModal */}
      <Modal
        isOpen={isMessageTemplateModalOpen}
        role="dialog"
        autoFocus={true}
        centered
        data-toggle="modal"
        toggle={() => {
          setIsMessageTemplateModalOpen(!isMessageTemplateModalOpen)
        }}
      >
        <div>
          <ModalHeader
            className=""
            toggle={() => {
              setIsMessageTemplateModalOpen(
                !isMessageTemplateModalOpen
              )
            }}
          >
            <p className={"topup-modal-name"}>Добавить шаблон</p>
          </ModalHeader>
        </div>
        <form
          className="modal-body"
          onSubmit={createTemplates(addTemplate)}
        >
          <div>
            <CardTitle className="mb-2">Имя:</CardTitle>
            <input
              className={"topup-modal-input w-100"}
              type="text"
              placeholder="имя шаблона"
              {...templateRegister("temp_name", { required: true })}
            />
            <p className={"form-error-text"}>
              {templateErrors.temp_name && (
                <p>Пожалуйста заполните имя шаблона</p>
              )}
            </p>
          </div>

          <div className={"mt-3"}>
            <CardTitle className="mb-2">Путь:</CardTitle>
            <input
              className={"topup-modal-input w-100"}
              type="text"
              placeholder="json-путь"
              {...templateRegister("temp_path", { required: true })}
            />
          </div>

          <div className={"topup-modal-footer"}>
            <button className={"btn btn-primary"}>Вставить</button>
          </div>
        </form>
      </Modal>

      {/* pin modal isPinModalOpen */}
      <Modal
        isOpen={isPinModalOpen}
        role="dialog"
        autoFocus={true}
        centered
        data-toggle="modal"
        toggle={() => {
          setIsPinModalOpen(!isPinModalOpen)
        }}
      >
        <ModalHeader
          toggle={() => {
            setIsPinModalOpen(!isPinModalOpen)
          }}
        >
          <p className={"topup-modal-name"}>
            Создание рандома вложений
          </p>
        </ModalHeader>
        <div className="modal-body">
          <p className="modal_main_text">
            Вы создаёте несколько пакетов вложений, которые случайным
            образом будут отправляться вашим подписчикам
          </p>

          {attachmentPacks.map((pack, packIndex) => (
            <>
              <p className="packet_name">Пакет {packIndex + 1}:</p>
              <div className={"group-settings-pin-item"}>
                <button
                  className="remove-pack-btn"
                  type="button"
                  onClick={() => removeAttachmentPack(packIndex)}
                >
                  <img src={PackDel} alt="" />
                </button>
                <div
                  key={packIndex}
                  className={
                    "d-flex align-items-center attachment-field-wrapper"
                  }
                >
                  {pack.map((attachment, attachmentIndex) => (
                    <div
                      key={attachmentIndex}
                      className="attachment-field"
                    >
                      <input
                        type="text"
                        className={"topup-modal-input"}
                        value={attachment}
                        placeholder="ссылка на вложение в ВК"
                        onChange={e =>
                          updateAttachmentField(
                            e,
                            packIndex,
                            attachmentIndex
                          )
                        }
                      />
                      <button
                        className={"btn btn-outline-primary"}
                        type="button"
                        onClick={() =>
                          addAttachmentField(
                            packIndex,
                            attachmentIndex,
                            pack
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ))}
          <button
            className={"w-100 group-settings-modal-btn"}
            type="button"
            onClick={() =>
              setAttachmentPacks([...attachmentPacks, [""]])
            }
          >
            Добавить пакет
          </button>
        </div>
        <div className={"topup-modal-footer"}>
          <button
            className={"btn btn-danger"}
            type="button"
            onClick={() => setAttachmentPacks([[""]])}
          >
            Удалить все пакеты
          </button>
          <button
            className={"btn btn-primary"}
            type="button"
            onClick={saveAttachments}
          >
            Установить
          </button>
        </div>
      </Modal>
    </>
  )
}
export default GroupsSettings
