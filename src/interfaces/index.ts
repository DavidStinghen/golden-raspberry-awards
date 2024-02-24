export interface Filter {
  type: "input" | "select"
  placeholder: string
  onSetNewValue: (value: any) => void
  options?: { label: string; value: any }[]
  value?: any
}

export interface Column {
  key: string
  label: string
  filter?: Filter
}

export type Row = Record<string, string | number | boolean>

export interface YearsWithMultipleWinners {
  years: {
    year: number
    winnerCount: number
  }[]
}

export interface StudiosWithWinners {
  studios: {
    name: number
    winCount: number
  }[]
}

export interface ProducersWins {
  producer: string
  interval: number
  previousWin: number
  followingWin: number
}

export interface ProducersIntervalBetweenWins {
  min: ProducersWins[]
  max: ProducersWins[]
}

export interface Movie {
  id: number
  year: number
  title: string
  studios: string[]
  producers: string[]
  winner: boolean
}

export interface Sort {
  sorted: boolean
  unsorted: boolean
}

export interface Pageable {
  sort: Sort
  pageSize: number
  pageNumber: number
  paged: boolean
  unpaged: boolean
}

export interface Page {
  pageable: Pageable
  totalElements: number
  last: boolean
  totalPages: number
  first: boolean
  sort: Sort
  number: number
  numberOfElements: number
  size: number
}

export type MoviePage = Page & {
  content: Movie[]
}
