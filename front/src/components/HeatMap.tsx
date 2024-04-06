interface CellProps {
  color: string;
}

function Cell({ color }: CellProps) {
  return (
    <div
      className={`h-5 w-5 border-solid border-2 bg-[${color}] m-1`}
      style={{ borderColor: `${color}` }}
    ></div>
  );
}

function TimeLine({ color }: { color: string }) {
  const cells = Array.from(new Array(365));
  return (
    <div className="">
      {cells.map((_, index) => (
        <Cell key={`cell-${index}`} color={color} />
      ))}
    </div>
  );
}

export default function HeatMap({ color }: { color: string }) {
  return <TimeLine color={color} />;
}
