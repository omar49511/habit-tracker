import { CirclePicker } from "react-color";
import {
  FaTimes,
  FaApple,
  FaBed,
  FaCar,
  FaCoffee,
  FaBaby,
  FaBook,
  FaCode,
  FaGamepad,
  FaMoneyBill,
  FaMusic,
  FaDumbbell,
  FaClock,
  FaYinYang,
  FaHeart,
  FaShower,
  FaLeaf,
  FaPalette,
  FaBriefcase,
  FaWallet,
} from "react-icons/fa";

const icons = {
  apple: <FaApple />,
  bed: <FaBed />,
  car: <FaCar />,
  coffee: <FaCoffee />,
  book: <FaBook />,
  baby: <FaBaby />,
  code: <FaCode />,
  gamepad: <FaGamepad />,
  bill: <FaMoneyBill />,
  music: <FaMusic />,
  dumbbell: <FaDumbbell />,
  clock: <FaClock />,
  yinyang: <FaYinYang />,
  heart: <FaHeart />,
  shower: <FaShower />,
  leaf: <FaLeaf />,
  palette: <FaPalette />,
  briefcase: <FaBriefcase />,
  wallet: <FaWallet />,
};

interface ModalNewHabitProps {
  onClose: () => void;
}

export default function ModalNewHabit({ onClose }: ModalNewHabitProps) {
  return (
    <div className="rounded-md bg-[#181818] text-white p-10 fixed top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] z-50 w-[500px] ">
      <span className="block h-8 text-3xl" onClick={onClose}>
        <FaTimes className="float-right" />
      </span>

      <h2 className="text-center font-bold text-3xl pb-4">Nuevo Hábito</h2>

      <form className="flex  flex-col gap-5">
        <input
          className="bg-neutral-800 p-2"
          type="text"
          placeholder="Nombre del hábito"
        />
        <textarea className="bg-neutral-800 p-2" placeholder="Descripción" />
        <select className="bg-neutral-800 p-2">
          <option value="ninguna">Ninguna</option>
          <option value="diaria">Diaria</option>
          <option value="semanal">Semanal</option>
          <option value="mensual">Mensual</option>
        </select>
        <select className="bg-neutral-800 p-2">
          <option value="ninguna">Ninguna</option>
          <option value="lunes"> Lun </option>
          <option value="martes"> Mar </option>
          <option value="miercoles"> Mié </option>
          <option value="jueves"> Jue </option>
          <option value="viernes"> Vie </option>
          <option value="sabado"> Sáb </option>
          <option value="domingo"> Dom </option>
        </select>
        <span>Icono</span>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2">
          {Object.entries(icons).map(([iconName, icon]) => (
            <button
              key={iconName}
              className="bg-neutral-800 hover:bg-neutral-700 p-2 rounded-md flex items-center justify-center"
            >
              {icon}
            </button>
          ))}
        </div>
        <div className="flex justify-center">
          <CirclePicker className="flex grid-cols-5" />
        </div>
        <button className="bg-purple-800 p-3 rounded-md text-lg">Crear</button>
      </form>
    </div>
  );
}
