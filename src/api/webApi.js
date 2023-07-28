/******/ (() => {
  // webpackBootstrap
  /******/ "use strict"
  /******/ // The require scope
  /******/ var __nccwpck_require__ = {}
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ ;(() => {
    /******/ // define getter functions for harmony exports
    /******/ __nccwpck_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __nccwpck_require__.o(definition, key) &&
          !__nccwpck_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          })
          /******/
        }
        /******/
      }
      /******/
    }
    /******/
  })() /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  /******/
  /******/
  ;(() => {
    /******/ __nccwpck_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop)
    /******/
  })() /* webpack/runtime/make namespace object */
  /******/
  /******/
  /******/
  ;(() => {
    /******/ // define __esModule on exports
    /******/ __nccwpck_require__.r = exports => {
      /******/ if (
        typeof Symbol !== "undefined" &&
        Symbol.toStringTag
      ) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        })
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", {
        value: true,
      })
      /******/
    }
    /******/
  })()
  /******/
  /******/ /* webpack/runtime/compat */
  /******/
  /******/ if (typeof __nccwpck_require__ !== "undefined")
    __nccwpck_require__.ab = +"/"
  /******/
  /************************************************************************/
  var __webpack_exports__ = {}
  // ESM COMPAT FLAG
  __nccwpck_require__.r(__webpack_exports__)

  // EXPORTS
  __nccwpck_require__.d(__webpack_exports__, {
    default: () => /* binding */ webApi,
  }) // CONCATENATED MODULE: ./src/functions/utils.ts

  function getProperty(obj, path, separator = ".") {
    try {
      let props = path.split(separator)
      let acc = obj
      for (let i = 0; i < props.length; i++)
        if (Object.hasOwn(acc, props[i])) acc = acc[props[i]]
        else {
          acc = undefined
          break
        }
      return acc
    } catch {
      return undefined
    }
  }
  function removeUndefineds(obj) {
    Object.keys(obj).forEach(
      key => obj[key] == undefined && delete obj[key]
    )
    return obj
  } // CONCATENATED MODULE: ./src/functions/checkFilterFields.ts

  function checkFilterFields(
    filterFields,
    req_body,
    throwError = false
  ) {
    if (typeof req_body !== "object") return false
    let res = true
    try {
      for (const filterField of filterFields) {
        let value = getProperty(req_body, filterField.path)
        let localRes = true
        if (filterField.e != undefined)
          localRes &&= value == filterField.e
        if (filterField.ne != undefined)
          localRes &&= value != filterField.ne
        if (filterField.gt != undefined)
          localRes &&= value > filterField.gt
        if (filterField.gte != undefined)
          localRes &&= value >= filterField.gte
        if (filterField.lt != undefined)
          localRes &&= value < filterField.lt
        if (filterField.lte != undefined)
          localRes &&= value <= filterField.lte
        if (Array.isArray(filterField.in) && filterField.in.length)
          localRes &&= filterField.in.includes(value)
        if (typeof filterField.search == "object") {
          localRes &&= new RegExp(
            filterField.search.regex,
            filterField.search.flags
          ).test(value)
        }
        res &&= localRes
      }
    } catch (e) {
      if (throwError) throw e
      res = false
    }
    return res
  } // CONCATENATED MODULE: ./src/api/apiTypes.ts

  const unchangeableIBotFields =
    /* unused pure expression or super */ null && [
      "_id",
      "account_id",
      "state",
      "enabled",
      "vk_id",
    ]
  const unchangeableIEventFields =
    /* unused pure expression or super */ null && [
      "_id",
      "account_id",
      "enabled",
    ]
  const unchangeableICustomServerFields =
    /* unused pure expression or super */ null && [
      "_id",
      "account_id",
    ]
  // for using
  //type FuncList<T> = (keyof T)[];
  const ApiStaticFuncs = ["checkAuth"]
  const ApiFuncs = [
    "getProfile",
    "getBot",
    "getBots",
    "createBot",
    "updateBot",
    "updateBotView",
    "deleteBot",
    "startBot",
    "stopBot",
    "restartBot",
    "clearBotJobs",
    "getEvent",
    "getEvents",
    "createEvent",
    "updateEvent",
    "updateEventView",
    "deleteEvent",
    "startEvent",
    "stopEvent",
    "restartEvent",
    "clearEventJobs",
    "sendEventMessage",
    "executeTemplate",
    "getEventMembers",
    "loadEventMembers",
    "switchNotifications",
    "getEventJobs",
    "getBotJobs",
    "getHandledUsers",
    "getGroup",
    "getGroups",
    "reserveTokenStore",
    "createGroup",
    "updateGroup",
    "updateGroupView",
    "deleteGroup",
    "setGroupSettings",
    "getGroupSettings",
    "getGroupServers",
    "deleteGroupServer",
    "getCustomServer",
    "getCustomServers",
    "createCustomServer",
    "updateCustomServer",
    "deleteCustomServer",
  ] // CONCATENATED MODULE: ./src/api/apiErrors.ts

  var ApiErrorCodes
  ;(function (ApiErrorCodes) {
    ApiErrorCodes[(ApiErrorCodes["Invalid request"] = 0)] =
      "Invalid request"
    ApiErrorCodes[(ApiErrorCodes["Unknown function"] = 1)] =
      "Unknown function"
    ApiErrorCodes[(ApiErrorCodes["Group already created"] = 2)] =
      "Group already created"
    ApiErrorCodes[(ApiErrorCodes["Event is not enabled"] = 3)] =
      "Event is not enabled"
    ApiErrorCodes[(ApiErrorCodes["Bot is not enabled"] = 4)] =
      "Bot is not enabled"
    ApiErrorCodes[(ApiErrorCodes["Vk id already used"] = 5)] =
      "Vk id already used"
    ApiErrorCodes[(ApiErrorCodes["Cannot start bot"] = 6)] =
      "Cannot start bot"
    ApiErrorCodes[(ApiErrorCodes["User already exists"] = 7)] =
      "User already exists"
    ApiErrorCodes[(ApiErrorCodes["Unknown user or password"] = 8)] =
      "Unknown user or password"
    ApiErrorCodes[(ApiErrorCodes["To many calls (max: 100)"] = 9)] =
      "To many calls (max: 100)"
    ApiErrorCodes[(ApiErrorCodes["Empty store"] = 10)] = "Empty store"
    ApiErrorCodes[(ApiErrorCodes["Reserved store"] = 11)] =
      "Reserved store"
    ApiErrorCodes[(ApiErrorCodes["Proxy error"] = 12)] = "Proxy error"
    ApiErrorCodes[
      (ApiErrorCodes["No one bot cannot access the chat"] = 13)
    ] = "No one bot cannot access the chat"
    ApiErrorCodes[
      (ApiErrorCodes[
        "Account or one of the bots must be an admin"
      ] = 14)
    ] = "Account or one of the bots must be an admin"
    ApiErrorCodes[(ApiErrorCodes["Authentication error"] = 15)] =
      "Authentication error"
    ApiErrorCodes[(ApiErrorCodes["Wrong event_name"] = 16)] =
      "Wrong event_name"
    ApiErrorCodes[
      (ApiErrorCodes["Cannot use this event as redirect"] = 17)
    ] = "Cannot use this event as redirect"
    ApiErrorCodes[
      (ApiErrorCodes[
        "Redirect event cannon have redirect event"
      ] = 18)
    ] = "Redirect event cannon have redirect event"
  })(ApiErrorCodes || (ApiErrorCodes = {}))
  class ApiError extends Error {
    code
    constructor(data) {
      super()
      this.name = "ApiError"
      this.code = data.code
      this.message = ApiErrorCodes[data.code]
    }
  }
  /** Ошибка с апи вк, см. коды в их документации */
  class VKError extends Error {
    code
    constructor(data) {
      super()
      this.name = "VKError"
      this.code = data.code
      this.message = data.message
    }
  }
  class ValidationError extends Error {
    constructor(data) {
      super()
      this.name = "ValidationError"
      this.message = data.message
    }
  }
  /** Ошибка с тем, что запрошен неизвестный бот/евент/группа */
  class UnknownEntityError extends Error {
    entity
    constructor(data) {
      super()
      this.name = "UnknownEntityError"
      this.entity = data.entity
      this.message = data.message || `Unknown ${this.entity}`
    }
  }
  class UnknownError extends Error {
    constructor(data) {
      super()
      this.name = "UnknownError"
      this.message = data.message
    }
  }
  const errorClasses = {
    ApiError,
    VKError,
    ValidationError,
    UnknownEntityError,
    UnknownError,
  } // CONCATENATED MODULE: ./src/api/webApi.ts

  // @ts-ignore
  var Api = class Api {
    token
    async exec(call) {
      return await (
        await fetch("https://send.belradio.net/api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            call,
            ...(this.token ? { access_token: this.token } : {}),
          }),
        })
      ).json()
    }
    // @ts-ignore
    async run(call) {
      let res = await this.exec(call)
      if (res.error) throw new errorClasses[res.error.name](res.error)
      return res.ret
    }
    // @ts-ignore
    runMany(call) {
      let res
      let prom = this.exec(call)
      return call.map(async (_, i) => {
        res ??= await prom
        if (res.error)
          throw new errorClasses[res.error.name](res.error)
        if (res[i].error)
          throw new errorClasses[res[i].error.name](res[i].error)
        return res[i].ret
      })
    }
    constructor(token) {
      this.token = token
      return new Proxy(this, Api)
    }
    static async auth(token) {
      let api = new Api(token)
      await api.run({ func: "checkAuth", args: [] })
      return api
    }
    static get(target, prop) {
      if (target[prop]) return target[prop]
      if (ApiFuncs.includes(prop) || ApiStaticFuncs.includes(prop)) {
        if (!target.run) target = new Api()
        let func = (...args) => target.run({ func: prop, args })
        func.many = argss =>
          target.runMany(argss.map(args => ({ func: prop, args })))
        return (target[prop] = func)
      }
    }
  }
  Api.prototype.checkFilterFields = checkFilterFields
  // @ts-ignore
  Api = new Proxy(Api, Api)
  window && (window.Api = Api)
  /* harmony default export */ const webApi = Api

  module.exports = __webpack_exports__
  /******/
})()
