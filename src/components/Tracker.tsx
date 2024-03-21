import Calendar from "react-github-contribution-calendar";
export default function Tracker() {
  const until = "2016-06-30";
  const values = {
    "2016-06-23": 1,
    "2016-06-26": 2,
    "2016-06-27": 3,
    "2016-06-28": 4,
    "2016-06-29": 4,
  };
  const panelColors = ["#EEEEEE", "#a854f7", "#a854f7", "#a854f7", "#a854f7"];

  return (
    <div className="rounded-md p-7 text-white flex justify-center">
      <Calendar
        values={values}
        until={until}
        weekLabelAttributes={undefined}
        monthLabelAttributes={undefined}
        panelAttributes={undefined}
        panelColors={panelColors}
      />
    </div>
  );
}
