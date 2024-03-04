import { AxiosError, AxiosResponse } from "axios"
import { useState } from "react"

import { api } from "@/config/axios"
import { ProducersIntervalBetweenWins, Row } from "@/interfaces"

export const useProducersIntervalBetweenWins = () => {
  const [loading, setLoading] = useState(false)

  const [producerMaxIntervalBetweenWins, setProducerMaxIntervalBetweenWins] = useState({
    columns: [
      {
        key: "producer",
        label: "Producer"
      },
      {
        key: "interval",
        label: "Interval"
      },
      {
        key: "previousWin",
        label: "Previous Year"
      },
      {
        key: "followingWin",
        label: "Following Year"
      }
    ],
    rows: [] as Row[]
  })

  const [producerMinIntervalBetweenWins, setProducerMinIntervalBetweenWins] = useState({
    columns: [
      {
        key: "producer",
        label: "Producer"
      },
      {
        key: "interval",
        label: "Interval"
      },
      {
        key: "previousWin",
        label: "Previous Year"
      },
      {
        key: "followingWin",
        label: "Following Year"
      }
    ],
    rows: [] as Row[]
  })

  function getProducersIntervalBetweenWins(): void {
    setLoading(true)

    api
      .get("/movies", { params: { projection: "max-min-win-interval-for-producers" } })
      .then((res: AxiosResponse<ProducersIntervalBetweenWins>) => {
        setProducerMaxIntervalBetweenWins({
          ...producerMaxIntervalBetweenWins,
          rows: res.data.max.map((item) => ({
            producer: item.producer,
            interval: item.interval,
            previousWin: item.previousWin,
            followingWin: item.followingWin
          }))
        })

        setProducerMinIntervalBetweenWins({
          ...producerMinIntervalBetweenWins,
          rows: res.data.min.map((item) => ({
            producer: item.producer,
            interval: item.interval,
            previousWin: item.previousWin,
            followingWin: item.followingWin
          }))
        })
        setLoading(false)
      })
      .catch((err: AxiosError) => {
        setLoading(false)
        throw new Error(err.message)
      })
  }

  return {
    producerMinIntervalBetweenWins,
    producerMaxIntervalBetweenWins,
    getProducersIntervalBetweenWins,
    loading
  }
}
