import { IoMdAdd, IoIosStats } from "react-icons/io";
import { useState } from "react";
import ModalNewHabit from "./ModalNewHabit";
export default function Navbar() {
  //open modal
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <nav className="bg-[#17181c] w-screen h-20 flex justify-around items-center">
      <div className="flex items-center">
        <h1 className="text-white font-bold text-3xl">
          Habit<span className="text-purple-500">Tracker</span>
        </h1>
      </div>
      <div className="flex justify-center items-center gap-2">
        <button className="bg-gray-800 hover:bg-gray-700 hover:ring-2 hover:ring-purple-500 h-10 w-10 rounded-md flex justify-center items-center text-white text-3xl">
          <IoIosStats />
        </button>
        <button
          className="bg-gray-800 hover:bg-gray-700 hover:ring-2 hover:ring-purple-500 h-10 w-10 rounded-md flex justify-center items-center text-white text-3xl"
          onClick={handleOpenModal}
        >
          <IoMdAdd />
        </button>
      </div>
      {open && <ModalNewHabit onClose={handleCloseModal} />}
    </nav>
  );
}
