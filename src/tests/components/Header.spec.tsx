import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { describe, expect, it } from "vitest"

import { Header } from "@/components/Header"

describe("Header", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )

  it("should mount and display all elements", () => {
    expect(screen.getByTestId("__header_go_to_dashboard_link")).toBeDefined()
  })
})
