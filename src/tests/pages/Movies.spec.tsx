import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Movies } from "@/pages/Movies"

describe("Movies", () => {
  it("should mount and display all elements", () => {
    render(<Movies />)

    expect(screen.getByTestId("__movies_page_title")).toBeDefined()
    expect(screen.getByTestId("__datatable_header_cell_id")).toBeDefined()
    expect(screen.getByTestId("__datatable_header_cell_year")).toBeDefined()
    expect(screen.getByTestId("__datatable_header_cell_title")).toBeDefined()
    expect(screen.getByTestId("__datatable_header_cell_winner")).toBeDefined()
  })
})
