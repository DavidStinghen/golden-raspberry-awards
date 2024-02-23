import { useEffect, useState } from "react"
import { CgSpinner } from "react-icons/cg"
import { IoIosSkipBackward, IoIosSkipForward } from "react-icons/io"
import { IoCaretBackSharp, IoCaretForwardSharp } from "react-icons/io5"

import { Column, Row } from "@/interfaces"

export function Datatable(props: {
  columns: Column[]
  rows: Row[]
  pageable?: boolean
  pageNumber?: number
  totalPages?: number
  headerPostion?: "start" | "center"
  onChangePage?: (value: number) => void
  isLoading?: boolean
}) {
  const [posiblePageNumber, setPosiblePageNumber] = useState([] as number[])

  function goToFirstPage() {
    if (props.onChangePage) props.onChangePage(0)
  }

  function goToLastPage() {
    if (props.totalPages && props.onChangePage) props.onChangePage(props.totalPages - 1)
  }

  function goToNextPage() {
    if (props.pageNumber !== undefined && props.onChangePage) props.onChangePage(props.pageNumber + 1)
  }

  function goToPreviousPage() {
    if (props.pageNumber !== undefined && props.onChangePage) props.onChangePage(props.pageNumber - 1)
  }

  function goToPage(value: number) {
    if (props.onChangePage) props.onChangePage(value)
  }

  useEffect(() => {
    if (props.pageNumber !== undefined && props.totalPages) {
      setPosiblePageNumber(Array.from(Array(props.totalPages).keys()).slice(props.pageNumber, props.pageNumber + 5))
    }
  }, [props.pageNumber, props.totalPages])

  return (
    <table className="h-fit w-full table-fixed border-collapse">
      <thead className="h-fit w-full bg-[#f4f4f4]">
        <tr className="h-fit w-full ">
          {props.columns.map((column) => (
            <th
              className={`text-semibold text-black" table-cell border border-zinc-400 p-2 text-sm ${props.headerPostion ? `text-${props.headerPostion}` : "text-start"}`}
              key={column.key}
              data-testid={`__datatable_header_cell_${column.key}`}
            >
              {column.label}

              {column.filter && column.filter.type === "input" && (
                <input
                  data-testid={`__datatable_header_input_${column.key}`}
                  type="text"
                  placeholder={column.filter.placeholder}
                  className="h-fit w-full rounded-sm border border-zinc-400 p-1 text-base font-normal text-black outline-none"
                  onInput={(e) => column.filter?.onSetNewValue((e.target as HTMLInputElement).value)}
                />
              )}

              {column.filter && column.filter.type === "select" && (
                <select
                  data-testid={`__datatable_header_select_${column.key}`}
                  className="h-fit w-full rounded-sm border border-zinc-400 p-1 text-base font-normal outline-none"
                  onInput={(e) => column.filter?.onSetNewValue((e.target as HTMLInputElement).value)}
                  name={column.key}
                  value={column.filter.value}
                >
                  {column.filter.options?.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      className="text-center text-base font-normal text-black"
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              )}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="h-fit w-full">
        {props.isLoading ? (
          <tr className="h-fit w-full">
            <td colSpan={props.columns.length} className="text-semibold border border-zinc-400">
              <section className="flex h-full w-full items-center justify-center p-8">
                <CgSpinner className="h-4 w-4 animate-spin text-black" />
              </section>
            </td>
          </tr>
        ) : (
          props.rows.map((row, index) => (
            <tr className="h-fit w-full even:bg-[#f4f4f4]" key={index}>
              {props.columns.map((column) => (
                <td
                  className="text-semibold border border-zinc-400 p-2 text-start text-sm text-black"
                  key={index + column.key}
                  data-testid={`__datatable_row_cell_${index + column.key}`}
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>

      {props.pageable && (
        <tfoot className="h-fit w-full bg-[#f4f4f4] p-0">
          <tr className="h-fit w-full border border-zinc-400 p-0">
            <th className="p-0" colSpan={props.columns.length}>
              <section className="flex h-full w-full flex-row items-center justify-center gap-2">
                <button
                  data-testid={`__datatable_go_to_first_page`}
                  type="button"
                  onClick={goToFirstPage}
                  disabled={props.pageNumber === 0}
                  className="text-[#828383] disabled:text-[#bcbcbc]"
                >
                  <IoIosSkipBackward className="h-4 w-4" />
                </button>

                <button
                  data-testid={`__datatable_go_to_previous_page`}
                  type="button"
                  onClick={goToPreviousPage}
                  disabled={props.pageNumber === 0}
                  className=" text-[#828383] disabled:text-[#bcbcbc]"
                >
                  <IoCaretBackSharp className="h-4 w-4" />
                </button>

                {posiblePageNumber.map((number) => (
                  <button
                    data-testid={`__datatable_go_to_page_${number}`}
                    key={number + 1}
                    type="button"
                    className={`text-normal h-full px-4 py-2 text-center text-sm ${props.pageNumber === number ? "bg-[#007ad9] text-white" : "text-[#828383]"}`}
                    onClick={() => goToPage(number)}
                  >
                    {number + 1}
                  </button>
                ))}

                <button
                  data-testid={`__datatable_go_to_next_page`}
                  type="button"
                  onClick={goToNextPage}
                  disabled={(props.pageNumber ?? 0) + 1 === props.totalPages}
                  className="text-[#828383] disabled:text-[#bcbcbc]"
                >
                  <IoCaretForwardSharp className="h-4 w-4" />
                </button>

                <button
                  data-testid={`__datatable_go_to_last_page`}
                  type="button"
                  onClick={goToLastPage}
                  disabled={(props.pageNumber ?? 0) + 1 === props.totalPages}
                  className="text-[#828383] disabled:text-[#bcbcbc]"
                >
                  <IoIosSkipForward className="h-4 w-4" />
                </button>
              </section>
            </th>
          </tr>
        </tfoot>
      )}
    </table>
  )
}
