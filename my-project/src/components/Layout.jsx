import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center bg-orange-50 text-2xl font-bold text-gray-800">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
