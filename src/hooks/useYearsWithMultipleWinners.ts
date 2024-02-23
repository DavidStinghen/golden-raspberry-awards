import { AxiosError, AxiosResponse } from "axios"
import { useState } from "react"

import { api } from "@/config/axios"
import { YearsWithMultipleWinners } from "@/interfaces"

export const useYearsWithMultipleWinners = () => {
  const [loading, setLoading] = useState(false)

  const [yearsWithMultipleWinners, setYearsWithMultipleWinners] = useState({
    columns: [
      {
        key: "year",
        label: "Year"
      },
      {
        key: "winnerCount",
        label: "Win Count"
      }
    ],
    rows: [] as YearsWithMultipleWinners["years"]
  })

  function getYearsWithMultipleWinners(): void {
    setLoading(true)

    api
      .get("/movies", { params: { projection: "years-with-multiple-winners" } })
      .then((res: AxiosResponse<YearsWithMultipleWinners>) => {
        setLoading(false)
        setYearsWithMultipleWinners({ ...yearsWithMultipleWinners, rows: res.data.years })
      })
      .catch((err: AxiosError) => {
        setLoading(false)
        throw new Error(err.message)
      })
  }

  return {
    yearsWithMultipleWinners,
    getYearsWithMultipleWinners,
    loading
  }
}
