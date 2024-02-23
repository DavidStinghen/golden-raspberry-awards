import { NavLink } from "react-router-dom"

export function Header() {
  return (
    <header className="flex h-fit w-full items-center justify-start bg-[#343a40] px-4 py-4 xl:px-8">
      <NavLink data-testid="__header_go_to_dashboard_link" to="/" className="text-xl font-normal text-white">
        Golden Raspberry Awards
      </NavLink>
    </header>
  )
}
