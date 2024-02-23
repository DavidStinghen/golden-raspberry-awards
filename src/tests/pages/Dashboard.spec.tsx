import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Dashboard } from "@/pages/Dashboard"

describe("Dashboard", () => {
  it("should mount and display all elements", () => {
    render(<Dashboard />)

    expect(screen.getByTestId("__dashboard_years_with_multiple_winners_title")).toBeDefined()
    expect(screen.getByTestId("__dashboard_studios_winners_title")).toBeDefined()
    expect(screen.getByTestId("__dashboard_producers_interval_wins_title")).toBeDefined()
    expect(screen.getByTestId("__dashboard_producers_max_interval_wins_title")).toBeDefined()
    expect(screen.getByTestId("__dashboard_producers_min_interval_wins_title")).toBeDefined()
    expect(screen.getByTestId("__dashboard_movie_winners_title")).toBeDefined()
    expect(screen.getByTestId("__dashboard_movie_winners_input")).toBeDefined()
    expect(screen.getByTestId("__dashboard_movie_winners_button")).toBeDefined()
  })

  it("should trigger input event", () => {
    render(<Dashboard />)

    fireEvent.input(screen.getByTestId("__dashboard_movie_winners_input"), { target: { value: "1986" } })

    const element = screen.getByTestId("__dashboard_movie_winners_input") as HTMLInputElement

    expect(element.value).toBe("1986")
  })
})
