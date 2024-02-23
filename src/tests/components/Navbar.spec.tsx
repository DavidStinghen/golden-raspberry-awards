import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { describe, expect, it } from "vitest"

import { Navbar } from "@/components/Navbar"

describe("Navbar", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  )

  it("should mount and display all elements", () => {
    expect(screen.getByTestId("__navbar_go_to_dashboard_link")).toBeDefined()
    expect(screen.getByTestId("__navbar_go_to_list_link")).toBeDefined()
  })
})
