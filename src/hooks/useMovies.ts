import { AxiosError, AxiosResponse } from "axios"
import { useEffect, useState } from "react"

import { api } from "@/config/axios"
import { Column, MoviePage, Page } from "@/interfaces"

export const useMovies = () => {
  const [loading, setLoading] = useState(false)

  const [year, setYear] = useState<string | undefined>()

  const [winner, setWinner] = useState<boolean | undefined>()

  const [movies, setMovies] = useState({
    columns: [
      {
        key: "id",
        label: "Id"
      },
      {
        key: "year",
        label: "Year",
        filter: {
          type: "input",
          placeholder: "Filter by year",
          onSetNewValue: (value) => setYear(value as string),
          value: year
        }
      },
      {
        key: "title",
        label: "Title"
      },
      {
        key: "winner",
        label: "Winner?",
        filter: {
          type: "select",
          placeholder: "Yes/No",
          options: [
            {
              value: "",
              label: "Yes/No"
            },
            {
              value: true,
              label: "Yes"
            },
            {
              value: false,
              label: "No"
            }
          ],
          onSetNewValue: (value) => setWinner(value as boolean),
          value: winner
        }
      }
    ] as Column[],
    rows: [] as { id: number; year: number; title: string; winner: string }[]
  })

  const [page, setPage] = useState({} as Page)

  function getMovies(newPage: number): void {
    setLoading(true)

    api
      .get("/movies", { params: { winner: winner, year: year, page: newPage, size: 15 } })
      .then((res: AxiosResponse<MoviePage>) => {
        setMovies({
          ...movies,
          rows: res.data.content.map((content) => ({
            id: content.id,
            year: content.year,
            title: content.title,
            winner: content.winner ? "Yes" : "No"
          }))
        })

        setPage(res.data)

        setLoading(false)
      })
      .catch((err: AxiosError) => {
        setLoading(false)
        throw new Error(err.message)
      })
  }

  useEffect(() => {
    getMovies(0)
  }, [year, winner])

  return {
    winner,
    setWinner,
    year,
    movies,
    setYear,
    getMovies,
    page,
    loading
  }
}
