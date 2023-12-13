import { EventEmitter } from "./EventEmitter"

type SonEmiterPayload = { color: string }
type EventMap = {
  color: [data: SonEmiterPayload],
}

export const sonEmitter = new EventEmitter<EventMap>()