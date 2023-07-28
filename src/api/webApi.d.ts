declare module "models/types" {
  import type { Types } from "mongoose"

  export interface AccessTokenPayload {
    cid: string
    rid: string
    typ: "access" | "month"
  }
  export interface RefreshTokenPayload {
    cid: string
    rid: string
    typ: "refresh"
  }
  export interface IAccount<ObjectId = Types.ObjectId> {
    _id: ObjectId
    notifications?: boolean
    vk_id: number
  }
  export interface IConnection<ObjectId = Types.ObjectId> {
    _id: ObjectId
    account_id: ObjectId
    useragent: string
    ip: string
    refresh_token_id: ObjectId
    registration?: boolean
  }
  export type simple = string | number | boolean
  export interface IEvent<ObjectId = Types.ObjectId> {
    selectedFilter: any
    friends: any
    _id: ObjectId
    account_id: ObjectId
    /** Изменяется только с помощью функций startEvent, stopEvent*/
    enabled: boolean
    /** Из списка Callback API VK для отслеживания событий групп
     * https://dev.vk.com/api/community-events/json-schema
     *
     * или 'join_chat' для отслеживания чатов
     *
     * или кастомное название евента
     */
    event_name: string | "join_chat" | "custom" | "redirect"
    /**
     * Id группы
     */
    param_id?: number
    /**
     * Id кастомного сервера
     */
    custom_server_id?: ObjectId
    /**
     * Путь в объекте запроса до id того, кому отправляется сообщение
     * https://dev.vk.com/api/community-events/json-schema
     *
     * Например, для события wall_post_new user_id_path = 'object.from_id',
     * а для события group_join user_id_path = 'object.user_id'
     */
    user_id_path?: string
    /**
     * Фильтры по полю в объекте запроса
     */
    filter_fields?: {
      /** Путь в объекте запроса до поля
       *
       * Например, для события wall_reply_new, чтобы отслеживать определенный пост указываем 'object.post_id'
       */
      path: string
      /** Равно */
      e?: simple
      /** Неравно */
      ne?: simple
      /** Больше */
      gt?: number
      /** Больше равно */
      gte?: number
      /** Меньше */
      lt?: number
      /** Меньше равно */
      lte?: number
      /** Среди значений массива */
      in?: simple[]
      /** Поиск по строке */
      search?: {
        regex: string
        flags?: string
      }
    }[]
    /** Поля из тела запроса, которые будут в шаблоне */
    template_fields?: {
      /** Название, которое будет использоваться в шаблоне
       *
       * Например, если указать 'variable', то в шаблоне будет %variable%
       */
      name: string
      /** Путь в теле запроса
       *
       * Например, 'payload.variable'
       *
       * По умолчанию равен name
       */
      path?: string
    }[]
    /** Используется для вступления выбранных ботов и для определения chat_id */
    invite_chat_link?: string
    /** Проверять ли, остается ли в чате на момент оправки адресант */
    check_user_in_chat?: boolean
    /** Слать ли несколько раз полный набор сообщений одному адресату в случае повторного получения события
     */
    send_many_times?: boolean
    /** Использовать ли того же бота для отправки набора сообщений на все события
     *
     * По умолчанию используется случайный бот
     *
     * 'strict' - строго использовать того же бота, если он неактивен, игнорировать событие.
     *
     * 'preferably' - по возможности использовать того же бота, если он неактивен, использовать случайного бота.
     * И в дальнейшем пользователю будет слать новый бот.
     */
    use_same_bot?: "strict" | "preferably"
    /** Пропускать новые события, пока не будет отослана вся цепочка
     *  сообщений старого события для одного юзера
     */
    skip_unltil_sended?: boolean
    /** Массив сообщений
     *
     * Они отправляются по очереди с задержкой в поле timeout + интервал бота (задержка считается независимо)
     */
    messages: {
      /**
       * Массив сообщений, которые отправляются за раз, при этом стопаря всю очередь
       */
      personal: personalMessage[]
      /** Таймаут при отправке в мс
       * Важное отличие от personal.timeout в том, что сообщения с этим таймаутом шлются через интервал бота
       * Максимальное значение 30 дней
       * Задержка считается перед отправкой текущего сообщения
       */
      timeout?:
        | number
        | {
            min: number
            max: number
          }
      /** Сообщение при добавлении в др, если не указано или '' или 'none', то не добавляет */
      friends?: string
    }[]
    /** Боты, с которых идет отправка */
    bots: {
      /** Id чата ДЛЯ БОТА
       * https://dev.vk.com/method/messages.getConversationMembers
       * см. peer_id
       */
      chat_id?: number
      /**
       * Вступать ли этому боту в чат события по ссылке
       */
      join_chat?: boolean
      bot_id: ObjectId
    }[]
    /** Id события, боты которого будут отправлять сообщения этого события
     *
     * event_name того события должен быть 'redirect'
     */
    redirect_event_id?: ObjectId
    /** Описание евента (человекочитаемое название) */
    description?: string
    title?: string
    photo?: string
  }
  export interface IBot<ObjectId = Types.ObjectId> {
    _id: ObjectId
    account_id: ObjectId
    /** Изменяется только с помощью функций startBot, stopBot*/
    enabled: boolean
    state?: "blocked" | "proxy_error" | "active" | "waiting_active"
    last_send_date?: Date
    /** vk access token */
    token: string
    /** "http://user:password@123.213.255.0:9317" */
    proxy?: string
    /** Период работы бота */
    active_time?: {
      /** Например, 08:00 */
      start: string
      /** Например, 18:00 */
      end: string
      /** Например, +03:00 */
      timezone: string
    }
    /** Минимальный интревал отправки сообщений в мс */
    send_interval?: number
    /** Максимальное количество сообщений в день */
    day_send_limit?: number
    /** Описание бота (человекочитаемое название) */
    description?: string
    vk_id: number
    title: string
    photo: string
  }
  export interface IGroup<ObjectId = Types.ObjectId> {
    account_id: ObjectId
    title: string
    photo: string
    group_id: number
    server_id: number
    token: string
    answer: string
    secret: string
  }
  export interface IUserEvent<ObjectId = Types.ObjectId> {
    vk_id: number
    index?: number
    _id: ObjectId
    event_id: ObjectId
    from_event_id?: ObjectId
    bot_id?: ObjectId
    state: {
      first_message_date?: Date
      /**
       * Индекс сообщения в массиве event.messages, которое будет отправлено следующим
       */
      message_index: number
      /** timeout: сообщение ожидает отправки
       *
       * pending: закрыта личка, ожидает, когда добавит в друзья
       *
       * sended: сообщение отправлено
       *
       * closed: закрыта личка и закрыты друзья или аккаунт в бане
       *
       * error: неизвестная ошибка при отправке
       */
      send_state:
        | "timeout"
        | "pending"
        | "sended"
        | "closed"
        | "error"
    }
    payload?: {
      name: string
      value: string
    }[]
  }
  export type personalMessage = {
    /** Текст сообщения
     *
     * Поддерживается формат шаблонов
     *
     * random[anytext|anytext2]
     *
     * if(%male%){Ты пришел}
     *
     * if(%female%){Ты пришлa}
     *
     * %user_name%
     *
     * %user_lastname%
     *
     * %user_city%
     *
     * %group_name%
     *
     * %chat_name%
     *
     * %female%
     *
     * %male%
     *
     * %nosex%
     *
     * %Greeting%
     *
     * %greeting%
     *
     * %group_id%
     *
     * %chat_id%
     *
     * %user_id%
     *
     * %group_url%
     *
     * %chat_url%
     *
     * %group_nameurl%
     */
    text: string
    /** Прикрепления к комментарию в формате вк
     * https://dev.vk.com/method/messages.send
     */
    attachment?: string
    /** Задержка при последовательной отправке в мс
     *
     * Эта задержка стопорит всю очередь отправки бота,
     * при этом между сообщениями в messages.personal нет задержки в интервал бота (возможен спам)
     *
     * Максимальное значение 1 минута
     *
     * Задержка считается перед отправкой текущего сообщения
     */
    timeout?: number
  }
  export interface ICustomServer<ObjectId = Types.ObjectId> {
    _id: ObjectId
    account_id: ObjectId
    /** Секрет, отправляется в запросе в body.secret */
    secret: string
    /** Список ip, с которых должен приходить запрос
     *
     * Поддерживаются маски
     *
     * Если не указан, разрешается с любого ip
     */
    ips?: string[]
    /** Описание сервера (человекочитаемое название) */
    description?: string
  }
  export interface BotQueueData {
    address_id: number
    event_id: string
    userevent_id?: string
    unlim?: boolean
  }
  export interface EventQueueData {
    address_id: number
    bot_id?: string
    userevent_id?: string
  }
}
declare module "functions/utils" {
  export function getProperty<T = any>(
    obj: any,
    path: string,
    separator?: string
  ): T
  type FilterConditionally<Source extends object, Condition> = Pick<
    Source,
    {
      [K in keyof Source]: Source[K] extends Condition ? never : K
    }[keyof Source]
  >
  export function removeUndefineds<T extends object>(
    obj: T
  ): FilterConditionally<T, undefined>
}
declare module "functions/checkFilterFields" {
  import type { IEvent } from "models/types"

  export function checkFilterFields(
    filterFields: IEvent["filter_fields"],
    req_body: any,
    throwError?: boolean
  ): boolean
}
declare module "api/apiErrors" {
  export enum ApiErrorCodes {
    "Invalid request" = 0,
    "Unknown function" = 1,
    "Group already created" = 2,
    "Event is not enabled" = 3,
    "Bot is not enabled" = 4,
    "Vk id already used" = 5,
    "Cannot start bot" = 6,
    "User already exists" = 7,
    "Unknown user or password" = 8,
    "To many calls (max: 100)" = 9,
    "Empty store" = 10,
    "Reserved store" = 11,
    "Proxy error" = 12,
    "No one bot cannot access the chat" = 13,
    "Account or one of the bots must be an admin" = 14,
    "Authentication error" = 15,
    "Wrong event_name" = 16,
    "Cannot use this event as redirect" = 17,
    "Redirect event cannon have redirect event" = 18,
  }
  export class ApiError extends Error {
    code?: number
    constructor(data: { code: ApiErrorCodes })
  }
  /** Ошибка с апи вк, см. коды в их документации */
  export class VKError extends Error {
    code?: number
    constructor(data: { message?: string; code?: number })
  }
  export class ValidationError extends Error {
    constructor(data: { message?: string })
  }
  /** Ошибка с тем, что запрошен неизвестный бот/евент/группа */
  export class UnknownEntityError extends Error {
    entity: "bot" | "event" | "group" | "custom_server"
    constructor(data: {
      message?: string
      entity: "bot" | "event" | "group" | "custom_server"
    })
  }
  export class UnknownError extends Error {
    constructor(data: { message?: string })
  }
  export const errorClasses: {
    ApiError: typeof ApiError
    VKError: typeof VKError
    ValidationError: typeof ValidationError
    UnknownEntityError: typeof UnknownEntityError
    UnknownError: typeof UnknownError
  }
}
declare module "utils/types" {
  type UnionToIntersection<U> = (
    U extends any ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never
  type LastOf<T> = UnionToIntersection<
    T extends any ? () => T : never
  > extends () => infer R
    ? R
    : never
  type Push<T extends any[], V> = [...T, V]
  export type TuplifyUnion<
    T,
    L = LastOf<T>,
    N = [T] extends [never] ? true : false
  > = true extends N ? [] : Push<TuplifyUnion<Exclude<T, L>>, L>
}
declare module "api/apiTypes" {
  import {
    ApiError,
    UnknownEntityError,
    UnknownError,
    ValidationError,
    VKError,
  } from "api/apiErrors"
  import type {
    BotQueueData,
    EventQueueData,
    IAccount,
    IBot,
    ICustomServer,
    IEvent,
    IGroup,
    IUserEvent,
  } from "models/types"
  import type { TuplifyUnion } from "utils/types"
  import type { Params } from "vk-io"
  import type {
    GroupsGetCallbackServersResponse,
    GroupsGetCallbackSettingsResponse,
  } from "vk-io/lib/api/schemas/responses"
  export const unchangeableIBotFields: readonly [
    "_id",
    "account_id",
    "state",
    "enabled",
    "vk_id"
  ]
  export const unchangeableIEventFields: readonly [
    "_id",
    "account_id",
    "enabled"
  ]
  export const unchangeableICustomServerFields: readonly [
    "_id",
    "account_id"
  ]
  export type ChangeableIBot = Omit<
    IBot,
    (typeof unchangeableIBotFields)[number]
  >
  export type ChangeableIEvent = Omit<
    IEvent,
    (typeof unchangeableIEventFields)[number]
  >
  export type GroupView = Pick<IGroup, "group_id" | "photo" | "title">
  export type ChangeableICustomServer = Omit<
    ICustomServer,
    (typeof unchangeableICustomServerFields)[number]
  >
  type ObjectId = string
  export interface IApiCall {
    func: keyof (IApi & IApiStatics)
    args: Parameters<(IApi & IApiStatics)[IApiCall["func"]]>
  }
  export interface IApiRequest {
    call: IApiCall | IApiCall[]
    access_token?: string
    refresh_token?: string
  }
  export interface IApiResponse {
    ret?: Awaited<ReturnType<(IApi & IApiStatics)[IApiCall["func"]]>>
    error?:
      | ApiError
      | VKError
      | ValidationError
      | UnknownEntityError
      | UnknownError
  }
  export interface IApiStatics {
    /** Входит в аккаунт
     */
    checkAuth(): Promise<boolean>
  }
  export interface IGroupApi {
    /** Возвращает группу */
    getGroup(group_id: number): Promise<GroupView>
    /** Возвращает все группы, подключенных к аккаунту */
    getGroups(): Promise<GroupView[]>
    /** Возвращает storeKey, который нужно передать в
     * функцию создания после того, как пользователь даст разрешение по authLink
     *
     * @throws {ApiError} ApiErrorCodes['Empty store'], ApiErrorCodes['Reserved store']
     */
    reserveTokenStore(group_id: number): Promise<{
      storeKey: string
      authLink: string
    }>
    /** Подключает Callback Api для группы */
    createGroup(storeKey: string): Promise<GroupView>
    /** Обновляет токен для группы
     * @returns group_id
     */
    updateGroup(storeKey: string): Promise<number>
    /** Обновляет title и photo для группы */
    updateGroupView(group_id: number): Promise<GroupView>
    /** Отключает Callback Api для группы */
    deleteGroup(group_id: number): Promise<void>
    /** Устанавливает настройки Callback Api для группы */
    setGroupSettings(
      group_id: number,
      groupSettings: Omit<
        Params.GroupsSetCallbackSettingsParams,
        "server_id" | "group_id"
      >
    ): Promise<void>
    /** Возвращает настройки Callback Api для группы */
    getGroupSettings(
      group_id: number
    ): Promise<GroupsGetCallbackSettingsResponse>
    getGroupServers(
      group_id: number
    ): Promise<GroupsGetCallbackServersResponse>
    deleteGroupServer(
      group_id: number,
      server_id: number
    ): Promise<void>
  }
  export interface IStatisticApi {
    /** Вкл/выкл уведомления */
    switchNotifications(on: boolean): Promise<void>
    /** Возвращает задачи, которые находятся в очереди у события */
    getEventJobs<T extends boolean = false>(
      event_id: ObjectId,
      options?: {
        onlyLength?: T
        /** Индекс страницы начиная с 0 */
        pageIndex?: number
        /** Длина страницы, по умолчанию 100*/
        pageLength?: number
      }
    ): Promise<
      T extends false
        ? (EventQueueData & {
            timestamp: string
            delay?: number
          })[]
        : number
    >
    /** Возвращает задачи, которые находятся в очереди у бота */
    getBotJobs(
      bot_id: ObjectId,
      event_id?: ObjectId
    ): Promise<
      (BotQueueData & {
        timestamp: string
        delay?: number
      })[]
    >
    /** Возвращает данные об обработанных событиях */
    getHandledUsers<T extends boolean = false>(
      query: {
        event_id?: ObjectId
        bot_id?: ObjectId
        onlyLength?: T
      },
      send_states: IUserEvent["state"]["send_state"][],
      options?: {
        /** Индекс страницы начиная с 0 */
        pageIndex?: number
        /** Длина страницы, по умолчанию 100*/
        pageLength?: number
        period?: {
          start?: Date
          end?: Date
          /** Использовать ли время первой отправки.
           *  По умолчанию используется время, когда произошло событие */
          useFirstSendDate?: boolean
        }
      }
    ): Promise<T extends false ? IUserEvent[] : number>
  }
  export interface IEventApi {
    /** Возвращает данные о событии */
    getEvent(event_id: ObjectId): Promise<IEvent>
    /** Возвращает данные обо всех событиях */
    getEvents(): Promise<IEvent[]>
    /** Создает событие
     * @retuns event_data созданное событие
     * @throws {ApiError} ApiErrorCodes['No one bot cannot access the chat'],
     *  ApiErrorCodes['Account or one of the bots must be an admin']
     */
    createEvent(event_data: ChangeableIEvent): Promise<IEvent>
    /** Изменяет событие
     * @retuns event_data измененное событие
     * @throws {ApiError} ApiErrorCodes['No one bot cannot access the chat'],
     *  ApiErrorCodes['Account or one of the bots must be an admin']
     */
    updateEvent(
      event_id: ObjectId,
      event_data: Partial<ChangeableIEvent>
    ): Promise<IEvent>
    /** Обновляет title и photo для события
     * @throws {ApiError} ApiErrorCodes['No one bot cannot access the chat'],
     * ApiErrorCodes['Wrong event_name']
     */
    updateEventView(event_id: ObjectId): Promise<IEvent>
    /** Удаляет событие
     * Невозможно удалить событие, если другие события связаны с ним
     * @returns deleted: было ли удалено событие,
     *  links[]: массив связынных событий, которые имеют ссылки на это событие
     */
    deleteEvent(event_id: ObjectId): Promise<
      | {
          deleted: true
        }
      | {
          deleted: false
          links: ObjectId[]
        }
    >
    /** Запускает событие. Если событие было запущено, не делает ничего */
    startEvent(event_id: ObjectId): Promise<void>
    /** Останавливает событие. Если событие было запущено, не делает ничего */
    stopEvent(event_id: ObjectId): Promise<void>
    /** Перезапускает событие. Если событие не было запущено до этого, запускает его*/
    restartEvent(event_id: ObjectId): Promise<void>
    /** Очищает задачи евента */
    clearEventJobs(event_id: ObjectId): Promise<void>
    /** Отправляет сообщение определенного события на vk_id аккаунта.
     * Полностью эмулирует обрабатвываемое событие, но сообщение, созданное таким образом,
     * попадает в очередь отправки на первое место.
     *
     * Бот и событие должны быть включены
     * @param bot_id если указано, отправит с определенного бота
     */
    sendEventMessage(
      event_id: ObjectId,
      bot_id?: ObjectId
    ): Promise<void>
    /** Исполняет шаблон для определенного события и пользователя
     * @param user_id по умолчанию vk_id пользователя
     * @returns исполненный шаблон
     */
    executeTemplate(
      event_id: ObjectId,
      bot_id: ObjectId,
      template: string,
      user_id?: number
    ): Promise<string>
    /** Возвращеет последних членов беседы или чата
     * @param last количество членов c конца, не больше 7000
     * @returns vk_id[]
     */
    getEventMembers(
      event_id: ObjectId,
      last?: number
    ): Promise<number[]>
    /** Загрузить в очередь последних членов беседы или чата
     * @param last количество членов c конца, не больше 7000
     * @returns количество загруженных
     */
    loadEventMembers(
      event_id: ObjectId,
      last?: number
    ): Promise<number>
  }
  export interface IBotApi {
    /** Возвращает данные о ботe */
    getBot(bot_id: ObjectId): Promise<IBot>
    /** Возвращает данные обо всех ботах */
    getBots(): Promise<IBot[]>
    /** Создает бота
     * @retuns bot_data созданный бот
     * @throws {ApiError} ApiErrorCodes['Vk id already used'], ApiErrorCodes['Proxy error']
     */
    createBot(bot_data: ChangeableIBot): Promise<IBot>
    /** Изменяет бота
     * @param {boolean} [restartBot = true] перезапускать ли бота после изменения, по умолчанию true
     * @retuns bot_data измененный бот
     * @throws {ApiError} ApiErrorCodes['Vk id already used'], ApiErrorCodes['Proxy error']
     */
    updateBot(
      bot_id: ObjectId,
      bot_data: Partial<ChangeableIBot>
    ): Promise<IBot>
    /** Обновляет title и photo для бота */
    updateBotView(bot_id: ObjectId): Promise<IBot>
    /** Удаляет бота
     * Невозможно удалить бота, если события связаны с ним
     * @returns deleted: был ли удален бот,
     *  links[]: массив связынных событий, которые имеют ссылки на этот бот
     */
    deleteBot(
      bot_id: ObjectId,
      deleteFromEvents?: boolean
    ): Promise<{
      deleted: boolean
      links: ObjectId[]
    }>
    /** Запускает бота. Если бот был запущен, не делает ничего
     * @throws {ApiError} ApiErrorCodes['Cannot start bot'] (что-то с токеном или прокси)
     */
    startBot(bot_id: ObjectId): Promise<void>
    /** Останавливает бота. Если бот был запущен, не делает ничего */
    stopBot(bot_id: ObjectId): Promise<void>
    /** Перезапускает бота. Если бот не был запущен до этого, запускает его*/
    restartBot(bot_id: ObjectId): Promise<void>
    /** Очищает задачи бота */
    clearBotJobs(bot_id: ObjectId): Promise<void>
  }
  export interface ICustomServerApi {
    /** Возвращает данные о сервере */
    getCustomServer(
      custom_server_id: ObjectId
    ): Promise<ICustomServer>
    /** Возвращает данные обо всех серверах */
    getCustomServers(): Promise<ICustomServer[]>
    /** Создает сервер
     * @retuns custom_server_data созданный сервер
     */
    createCustomServer(
      custom_server_data: ChangeableICustomServer
    ): Promise<ICustomServer>
    /** Изменяет сервер
     * @retuns custom_server_data измененный сервер
     */
    updateCustomServer(
      custom_server_id: ObjectId,
      custom_server_data: Partial<ChangeableICustomServer>
    ): Promise<ICustomServer>
    /** Удаляет сервер */
    deleteCustomServer(custom_server_id: ObjectId): Promise<void>
  }
  export interface IApi
    extends IBotApi,
      IEventApi,
      IStatisticApi,
      IGroupApi,
      ICustomServerApi {
    getProfile(): Promise<{
      group_ids: Awaited<ReturnType<IApi["getGroups"]>>
      bots: Awaited<ReturnType<IApi["getBots"]>>
      events: Awaited<ReturnType<IApi["getEvents"]>>
      account: IAccount
    }>
  }
  type FuncList<T> = TuplifyUnion<keyof T>
  export const ApiStaticFuncs: FuncList<IApiStatics>
  export const ApiFuncs: FuncList<IApi>
}
declare module "api/webApi" {
  import {
    IApi,
    IApiCall,
    IApiResponse,
    IApiStatics,
  } from "api/apiTypes"
  import { IEvent } from "models/types"

  interface IWebApiStatics extends IApiStatics {
    new (token?: string): IWebApi
    /**
     * @throws {ApiError} ApiErrorCodes['Unknown user or password']
     */
    auth(token?: string): Promise<IWebApi>
  }
  type IWebApi = IApi & {
    [T in keyof IApi]: {
      /**Запускает функцию параллельно с разными аргументами
       * @example
       * let bot_ids = ['658412331...', , , ,];
       * let error_ids: string[];
       * let bots: IBot[];
       * await Promise.all(
       * 	api.getBot.many(bot_ids.map(e => [e])).map(async (prom, i) => {
       * 		let bot = await prom.catch(() => {
       * 			error_ids.push(bot_ids[i]);
       * 		});
       * 		bot && bots.push(bot);
       * 	})
       * );
       *
       * @param argss массив с массивами аргументов базовой функции
       * @returns массив с промисами результатов выполенния функции
       */
      many(argss: Parameters<IWebApi[T]>[]): ReturnType<IWebApi[T]>[]
    }
  } & {
    exec(call: IApiCall): Promise<IApiResponse>
    exec(call: IApiCall[]): Promise<IApiResponse[]>
    run<T extends IApiCall["func"]>(call: {
      func: T
      args: Parameters<(IApi & IApiStatics)[T]>
    }): ReturnType<(IApi & IApiStatics)[T]>
    runMany<T extends IApiCall["func"]>(
      call: {
        func: T
        args: Parameters<(IApi & IApiStatics)[T]>
      }[]
    ): ReturnType<(IApi & IApiStatics)[T]>[]
    /**
     * Проверяет объект на соответсвие фильтру
     * @param req_body тело запроса, который будет приходить на евент
     */
    checkFilterFields(
      filterFields: IEvent["filter_fields"],
      req_body: any,
      throwError?: boolean
    ): boolean
  }
  var Api: IWebApiStatics
  global {
    interface Window {
      Api: IWebApiStatics
    }
  }
  export default Api
}
