import ActivityCalendar from "react-activity-calendar";

export default function HeatMap() {
  const data = [
    {
      date: "2025-02-20",
      count: 13,
      level: 1,
    },
  ];
  return (
    <div className="text-white">
      <ActivityCalendar data={data} />
      <ActivityCalendar
        blockMargin={4}
        blockRadius={2}
        blockSize={12}
        colorScheme="light"
        style={{}}
        data={[
          {
            count: 7,
            date: "2022-09-17",
            level: 2,
          },
          {
            date: "2023-02-20",
            count: 13,
            level: 1,
          },
        ]}
        fontSize={14}
        labels={{
          totalCount: "{{count}} activities in 2022 & 2024",
        }}
        maxLevel={4}
        weekStart={0}
      />
    </div>
  );
}
