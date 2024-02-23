import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Datatable } from "@/components/Datatable"

describe("Datatable", () => {
  it("should mount and display a table without pagination and filters", () => {
    render(
      <Datatable
        columns={[
          { key: "year", label: "Year" },
          { key: "winCount", label: "Win Count" }
        ]}
        rows={[
          { year: "1986", winCount: 2 },
          { year: "1990", winCount: 2 },
          { year: "2015", winCount: 2 }
        ]}
      />
    )

    expect(screen.getByTestId("__datatable_header_cell_year")).toBeDefined()
    expect(screen.getByTestId("__datatable_header_cell_winCount")).toBeDefined()
    expect(screen.getByTestId("__datatable_header_cell_winCount")).toBeDefined()
    expect(screen.getByTestId("__datatable_row_cell_0year")).toBeDefined()
    expect(screen.getByTestId("__datatable_row_cell_0winCount")).toBeDefined()
    expect(screen.getByTestId("__datatable_row_cell_1year")).toBeDefined()
    expect(screen.getByTestId("__datatable_row_cell_1winCount")).toBeDefined()
    expect(screen.getByTestId("__datatable_row_cell_2year")).toBeDefined()
    expect(screen.getByTestId("__datatable_row_cell_2winCount")).toBeDefined()
  })

  it("should mount and display a table with pagination", () => {
    render(
      <Datatable
        columns={[
          { key: "year", label: "Year" },
          { key: "winCount", label: "Win Count" }
        ]}
        rows={[
          { year: "1986", winCount: 2 },
          { year: "1990", winCount: 2 },
          { year: "2015", winCount: 2 }
        ]}
        pageable
        pageNumber={0}
        totalPages={2}
      />
    )

    expect(screen.getByTestId("__datatable_go_to_first_page")).toBeDefined()
    expect(screen.getByTestId("__datatable_go_to_previous_page")).toBeDefined()
    expect(screen.getByTestId("__datatable_go_to_page_0")).toBeDefined()
    expect(screen.getByTestId("__datatable_go_to_page_1")).toBeDefined()
    expect(screen.getByTestId("__datatable_go_to_next_page")).toBeDefined()
    expect(screen.getByTestId("__datatable_go_to_last_page")).toBeDefined()
  })

  it("should trigger page button", () => {
    let page = 0

    render(
      <Datatable
        columns={[
          { key: "year", label: "Year" },
          { key: "winCount", label: "Win Count" }
        ]}
        rows={[
          { year: "1986", winCount: 2 },
          { year: "1990", winCount: 2 },
          { year: "2015", winCount: 2 }
        ]}
        pageable
        pageNumber={0}
        totalPages={2}
        onChangePage={(value: number) => (page = value)}
      />
    )

    fireEvent.click(screen.getByTestId("__datatable_go_to_page_1"))
    expect(page).toBe(1)
  })

  it("should trigger previous page button", () => {
    let page = 0

    render(
      <Datatable
        columns={[
          { key: "year", label: "Year" },
          { key: "winCount", label: "Win Count" }
        ]}
        rows={[
          { year: "1986", winCount: 2 },
          { year: "1990", winCount: 2 },
          { year: "2015", winCount: 2 }
        ]}
        pageable
        pageNumber={1}
        totalPages={2}
        onChangePage={(value: number) => (page = value)}
      />
    )

    fireEvent.click(screen.getByTestId("__datatable_go_to_previous_page"))
    expect(page).toBe(0)
  })

  it("should trigger first page button", () => {
    let page = 1

    render(
      <Datatable
        columns={[
          { key: "year", label: "Year" },
          { key: "winCount", label: "Win Count" }
        ]}
        rows={[
          { year: "1986", winCount: 2 },
          { year: "1990", winCount: 2 },
          { year: "2015", winCount: 2 }
        ]}
        pageable
        pageNumber={1}
        totalPages={2}
        onChangePage={(value: number) => (page = value)}
      />
    )

    fireEvent.click(screen.getByTestId("__datatable_go_to_first_page"))
    expect(page).toBe(0)
  })

  it("should trigger next page button", () => {
    let page = 0

    render(
      <Datatable
        columns={[
          { key: "year", label: "Year" },
          { key: "winCount", label: "Win Count" }
        ]}
        rows={[
          { year: "1986", winCount: 2 },
          { year: "1990", winCount: 2 },
          { year: "2015", winCount: 2 }
        ]}
        pageable
        pageNumber={0}
        totalPages={2}
        onChangePage={(value: number) => (page = value)}
      />
    )

    fireEvent.click(screen.getByTestId("__datatable_go_to_next_page"))
    expect(page).toBe(1)
  })

  it("should trigger last page button", () => {
    let page = 0

    render(
      <Datatable
        columns={[
          { key: "year", label: "Year" },
          { key: "winCount", label: "Win Count" }
        ]}
        rows={[
          { year: "1986", winCount: 2 },
          { year: "1990", winCount: 2 },
          { year: "2015", winCount: 2 }
        ]}
        pageable
        pageNumber={0}
        totalPages={2}
        onChangePage={(value: number) => (page = value)}
      />
    )

    fireEvent.click(screen.getByTestId("__datatable_go_to_last_page"))
    expect(page).toBe(1)
  })

  it("should trigger filter input event", () => {
    let value = ""

    render(
      <Datatable
        columns={[
          {
            key: "year",
            label: "Year",
            filter: {
              type: "input",
              placeholder: "input test",
              value,
              onSetNewValue: (newValue: string) => (value = newValue)
            }
          },
          { key: "winCount", label: "Win Count" }
        ]}
        rows={[
          { year: "1986", winCount: 2 },
          { year: "1990", winCount: 2 },
          { year: "2015", winCount: 2 }
        ]}
      />
    )

    fireEvent.input(screen.getByTestId("__datatable_header_input_year"), { target: { value: "1986" } })
    expect(value).toBe("1986")
  })

  it("should trigger filter select event", () => {
    let value = ""

    render(
      <Datatable
        columns={[
          {
            key: "year",
            label: "Year",
            filter: {
              type: "select",
              placeholder: "select test",
              value,
              onSetNewValue: (newValue: string) => (value = newValue),
              options: [
                {
                  value: "1986",
                  label: "1986"
                }
              ]
            }
          },
          { key: "winCount", label: "Win Count" }
        ]}
        rows={[
          { year: "1986", winCount: 2 },
          { year: "1990", winCount: 2 },
          { year: "2015", winCount: 2 }
        ]}
      />
    )

    fireEvent.input(screen.getByTestId("__datatable_header_select_year"), { target: { value: "1986" } })
    expect(value).toBe("1986")
  })
})
