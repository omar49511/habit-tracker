import { FaTimes } from "react-icons/fa";

export default function ModalNewHabit({ onClose }) {
  return (
    <div className="rounded-md bg-[#00000079] text-white p-10 fixed top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] w-96 z-50 ">
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
        <button className="bg-purple-800 p-3 rounded-md text-lg">Crear</button>
      </form>
    </div>
  );
}
