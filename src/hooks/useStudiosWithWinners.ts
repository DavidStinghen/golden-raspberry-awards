import { AxiosError, AxiosResponse } from "axios"
import { useState } from "react"

import { api } from "@/config/axios"
import { StudiosWithWinners } from "@/interfaces"

export const useStudioWithWinners = () => {
  const [loading, setLoading] = useState(false)

  const [studioWithWinners, setStudioWithWinners] = useState({
    columns: [
      {
        key: "name",
        label: "Name"
      },
      {
        key: "winCount",
        label: "Win Count"
      }
    ],
    rows: [] as StudiosWithWinners["studios"]
  })

  function getStudiosWithWinners(): void {
    setLoading(true)

    api
      .get("/movies", { params: { projection: "studios-with-win-count" } })
      .then((res: AxiosResponse<StudiosWithWinners>) => {
        setLoading(false)
        setStudioWithWinners({ ...studioWithWinners, rows: res.data.studios.slice(0, 3) })
      })
      .catch((err: AxiosError) => {
        setLoading(false)
        throw new Error(err.message)
      })
  }

  return {
    studioWithWinners,
    getStudiosWithWinners,
    loading
  }
}
