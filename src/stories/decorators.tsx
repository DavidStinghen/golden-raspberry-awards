import { StoryFn } from "@storybook/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export function RouterDecorator(Story: StoryFn) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Story />} />
      </Routes>
    </BrowserRouter>
  )
}
