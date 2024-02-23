import { Outlet } from "react-router-dom"

import { Header } from "@/components/Header"
import { Navbar } from "@/components/Navbar"

export function Default() {
  return (
    <main className="flex min-h-screen w-full flex-col items-start justify-start">
      <Header />

      <section className="flex w-full flex-1 flex-col items-start justify-start xl:flex-row">
        <Navbar />

        <section className="flex w-full flex-1 px-4 py-4 xl:w-4/5 xl:px-8">
          <Outlet />
        </section>
      </section>
    </main>
  )
}
