import { EventEmitter } from "./EventEmitter"

type EventMap = {
  count:any,
}

export const grandSonEmitter = new EventEmitter<EventMap>()