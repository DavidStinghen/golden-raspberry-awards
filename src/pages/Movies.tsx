import { Datatable } from "@/components/Datatable"
import { useMovies } from "@/hooks/useMovies"

export function Movies() {
  const { page, movies, getMovies, loading } = useMovies()

  return (
    <section className="flex h-fit w-full flex-col items-start justify-start gap-4 rounded-sm p-4 shadow-md">
      <strong data-testid="__movies_page_title" className="text-lg font-semibold text-black">
        List movies
      </strong>

      <Datatable
        columns={movies.columns}
        rows={movies.rows}
        pageable
        pageNumber={page.number}
        totalPages={page.totalPages}
        headerPostion="center"
        onChangePage={(value: number) => getMovies(value)}
        isLoading={loading}
      />
    </section>
  )
}
