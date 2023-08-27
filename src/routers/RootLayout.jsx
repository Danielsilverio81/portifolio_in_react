import { Outlet } from "react-router-dom";
import Header from "../components/Home/navigation/Header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main
        className="
    flex flex-col flex-[1 0 auto]
    "
      >
        <Outlet />
      </main>
    </>
  );
}
