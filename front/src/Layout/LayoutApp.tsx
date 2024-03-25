import Routers from "../routes/Routers";
import Navbar from "../components/Navbar";
export default function LayoutApp() {
  return (
    <div>
      <Navbar />
      <Routers />
    </div>
  );
}
