import { AxiosError, AxiosResponse } from "axios"
import { useState } from "react"

import { api } from "@/config/axios"
import { Movie } from "@/interfaces"

export const useMoviesWinnerByYear = () => {
  const [loading, setLoading] = useState(false)

  const [year, setYear] = useState<string | undefined>()

  const [moviesWinnerByYear, setMoviesWinnerByYear] = useState({
    columns: [
      {
        key: "id",
        label: "Id"
      },
      {
        key: "year",
        label: "Year"
      },
      {
        key: "title",
        label: "Title"
      }
    ],
    rows: [] as { id: number; year: number; title: string }[]
  })

  function getMoviesWinnerByYear(): void {
    setLoading(true)

    api
      .get("/movies", { params: { winner: true, year: year } })
      .then((res: AxiosResponse<Movie[]>) => {
        setLoading(false)
        setMoviesWinnerByYear({
          ...moviesWinnerByYear,
          rows: res.data
        })
      })
      .catch((err: AxiosError) => {
        setLoading(false)
        throw new Error(err.message)
      })
  }

  return {
    year,
    moviesWinnerByYear,
    setYear,
    getMoviesWinnerByYear,
    loading
  }
}
