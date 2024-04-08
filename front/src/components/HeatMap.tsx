interface CellProps {
  color: string;
}

function Cell({ color }: CellProps) {
  return (
    <div
      className={`h-[15px] w-[15px] border-solid border-[1px] m-[2px] rounded-sm`}
      style={{ borderColor: `${color}`, backgroundColor: "rgba(0,0,0,0.1)" }}
    ></div>
  );
}

function TimeLine({ color }: { color: string }) {
  // Calcula la altura
  const height = `${(10 + 4) * 8}px`;

  const cells = Array.from(new Array(365));
  return (
    <div className="flex flex-wrap flex-col" style={{ height: height }}>
      {cells.map((_, index) => (
        <Cell key={`cell-${index}`} color={color} />
      ))}
    </div>
  );
}

export default function HeatMap({ color }: { color: string }) {
  return <TimeLine color={color} />;
}
