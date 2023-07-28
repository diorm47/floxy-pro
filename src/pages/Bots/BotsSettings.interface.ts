export interface FormPayload {
  description: string
  token: string
  proxy: string
  timeZone: string
  start: string
  end: string
  send_interval: string
  day_send_limit: string
}

export interface formattedData {
  description: string
  proxy: string
  token: string
  active_time?: {
    timezone: string
    start: string
    end: string
  }
  day_send_limit: string
  send_interval: string
}
