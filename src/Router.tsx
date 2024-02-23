import { Route, Routes } from "react-router-dom"

import { Default } from "@/layouts/Default"
import { Dashboard } from "@/pages/Dashboard"
import { Movies } from "@/pages/Movies"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/list" element={<Movies />} />
      </Route>
    </Routes>
  )
}
