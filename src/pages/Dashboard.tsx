import { useEffect } from "react"
import { FiSearch } from "react-icons/fi"

import { Datatable } from "@/components/Datatable"
import { useMoviesWinnerByYear } from "@/hooks/useMoviewWinnersByYear"
import { useProducersIntervalBetweenWins } from "@/hooks/useProducersIntervalBetweenWins"
import { useStudioWithWinners } from "@/hooks/useStudiosWithWinners"
import { useYearsWithMultipleWinners } from "@/hooks/useYearsWithMultipleWinners"

export function Dashboard() {
  const {
    yearsWithMultipleWinners,
    getYearsWithMultipleWinners,
    loading: loadingYearsWithMultipleWinners
  } = useYearsWithMultipleWinners()

  const { studioWithWinners, getStudiosWithWinners, loading: loadingStudioWithWinners } = useStudioWithWinners()

  const {
    producerMaxIntervalBetweenWins,
    producerMinIntervalBetweenWins,
    getProducersIntervalBetweenWins,
    loading: loadingProducersIntervalBetweenWins
  } = useProducersIntervalBetweenWins()

  const {
    moviesWinnerByYear,
    year,
    setYear,
    getMoviesWinnerByYear,
    loading: loadingMoviesWinnerByYear
  } = useMoviesWinnerByYear()

  useEffect(() => {
    getYearsWithMultipleWinners()
    getStudiosWithWinners()
    getProducersIntervalBetweenWins()
  }, [])

  function onInput(value: string | undefined) {
    setYear(value)
  }

  function onClick() {
    if (year) getMoviesWinnerByYear()
  }

  return (
    <section className="flex min-h-screen w-full flex-col items-start justify-start gap-4 xl:gap-8">
      <section className="grid w-full grid-flow-col grid-cols-1 grid-rows-2 gap-4 xl:grid-cols-2 xl:grid-rows-1 xl:gap-8">
        <section className="grid w-full grid-cols-1 grid-rows-none gap-4 rounded-sm p-4 shadow-md">
          <strong
            data-testid="__dashboard_years_with_multiple_winners_title"
            className="text-lg font-semibold text-black"
          >
            List years with multiple winners
          </strong>

          <Datatable
            columns={yearsWithMultipleWinners.columns}
            rows={yearsWithMultipleWinners.rows}
            isLoading={loadingYearsWithMultipleWinners}
          />
        </section>

        <section className="grid w-full grid-cols-1 grid-rows-none gap-4 rounded-sm p-4 shadow-md">
          <strong data-testid="__dashboard_studios_winners_title" className="text-lg font-semibold text-black">
            Top 3 studios with winners
          </strong>

          <Datatable
            columns={studioWithWinners.columns}
            rows={studioWithWinners.rows}
            isLoading={loadingStudioWithWinners}
          />
        </section>
      </section>

      <section className="grid w-full grid-flow-col grid-cols-1 grid-rows-2 gap-4 xl:grid-cols-2 xl:grid-rows-1 xl:gap-8">
        <section className="grid w-full grid-cols-1 grid-rows-none gap-4 rounded-sm p-4 shadow-md">
          <strong data-testid="__dashboard_producers_interval_wins_title" className="text-lg font-semibold text-black">
            Producers with longest and shortest interval between wins
          </strong>

          <section className="grid w-full grid-cols-1 grid-rows-none">
            <strong
              data-testid="__dashboard_producers_max_interval_wins_title"
              className="text-lg font-normal text-black"
            >
              Maximum
            </strong>

            <Datatable
              columns={producerMaxIntervalBetweenWins.columns}
              rows={producerMaxIntervalBetweenWins.rows}
              isLoading={loadingProducersIntervalBetweenWins}
            />
          </section>

          <section className="grid w-full grid-cols-1 grid-rows-none">
            <strong
              data-testid="__dashboard_producers_min_interval_wins_title"
              className="text-lg font-normal text-black"
            >
              Minimum
            </strong>

            <Datatable
              columns={producerMinIntervalBetweenWins.columns}
              rows={producerMinIntervalBetweenWins.rows}
              isLoading={loadingProducersIntervalBetweenWins}
            />
          </section>
        </section>

        <section className="flex w-full flex-col gap-4 rounded-sm p-4 shadow-md">
          <strong data-testid="__dashboard_movie_winners_title" className="text-lg font-semibold text-black">
            List movie winners by year
          </strong>

          <section className="flex h-full w-full flex-col gap-4">
            <section className="flex h-fit w-full flex-row gap-4">
              <input
                data-testid="__dashboard_movie_winners_input"
                type="number"
                placeholder="Search by year"
                className="h-fit w-full rounded-sm border border-zinc-400 p-1 text-base font-normal text-black outline-none"
                onInput={(e) => onInput((e.target as HTMLInputElement).value)}
              />

              <button
                aria-label="search movie by year button"
                data-testid="__dashboard_movie_winners_button"
                type="button"
                onClick={onClick}
                className="rounded-sm bg-[#007ad9] px-2 py-1"
              >
                <FiSearch className="text-white" />
              </button>
            </section>

            <Datatable
              columns={moviesWinnerByYear.columns}
              rows={moviesWinnerByYear.rows}
              isLoading={loadingMoviesWinnerByYear}
            />
          </section>
        </section>
      </section>
    </section>
  )
}
