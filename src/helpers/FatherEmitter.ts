import { EventEmitter } from "./EventEmitter"

type JokeProps = { value: string }
type EventMap = {
  count: [data: JokeProps],
}

export const fatherEmitter = new EventEmitter<EventMap>()