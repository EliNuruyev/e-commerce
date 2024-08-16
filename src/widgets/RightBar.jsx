import { Outlet } from "react-router-dom"

export default function RightBar() {
  return (
    <div className="flex-[4] border-l border-[#37003c] pl-5">
    <Outlet />
  </div>
  )
}
