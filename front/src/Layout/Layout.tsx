import Navbar from "../components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
  showNavbar: boolean;
}

export default function Layout({ children, showNavbar }: LayoutProps) {
  return (
    <main className=" ">
      {showNavbar && <Navbar />}
      {children}
    </main>
  );
}
