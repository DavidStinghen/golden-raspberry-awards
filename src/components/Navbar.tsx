import { NavLink } from "react-router-dom"

export function Navbar() {
  return (
    <nav className="flex h-fit w-full flex-row items-center justify-start gap-2 bg-[#f8f9fa] px-4 py-4 xl:h-screen xl:w-1/5 xl:flex-col xl:items-start xl:px-8">
      <NavLink data-testid="__navbar_go_to_dashboard_link" to="/" className="text-base font-normal text-black">
        Dashboard
      </NavLink>

      <NavLink data-testid="__navbar_go_to_list_link" to="/list" className="text-base font-normal text-black">
        List
      </NavLink>
    </nav>
  )
}
