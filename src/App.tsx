import Navbar from "./components/Navbar";
// import Tracker from "./components/Tracker";
import Truco from "./components/Truco";

function App() {
  return (
    <>
      <Navbar />
      <div className="container m-auto">
        {/* s<Tracker /> */}
        <Truco />
      </div>
    </>
  );
}

export default App;
