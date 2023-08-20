import { Outlet } from "react-router-dom";
import Header from "../components/Home/Header";

export default function RootLayout() {
  return (
    <>
    <Header />
    <main>
        <Outlet/>
    </main>
    </>
  )
}
