import React from "react";
import { FaCheck, FaShoppingBag } from "react-icons/fa";

interface DataValue {
  date: string;
  count: number;
}

interface HeatMapProps {
  startDate: string;
  endDate: string;
  dataValues: DataValue[];
  name: string;
  description: string;
}

const HeatMap: React.FC<HeatMapProps> = ({
  startDate,
  endDate,
  dataValues,
  name,
  description,
}) => {
  const startingDate = new Date(startDate);
  const endingDate = new Date(endDate);
  const daysInMonth =
    Math.ceil(
      (endingDate.getTime() - startingDate.getTime()) / (1000 * 60 * 60 * 24)
    ) + 1;

  const calenderGrid = Array.from({ length: daysInMonth }, (_, i) => {
    const date = new Date(startingDate);
    date.setDate(startingDate.getDate() + i);
    return date.toISOString().slice(0, 10);
  });

  const highestValue = dataValues.reduce(
    (a, b) => Math.max(a, b.count),
    -Infinity
  );

  const getIntensity = (activityCount: number): number => {
    return highestValue !== 0 ? activityCount / highestValue : 0;
  };

  const getColorFromIntensity = (intensity: number): string => {
    const colorCodes = [
      "#FFEEEE",
      "#FFCCCC",
      "#FFAAAA",
      "#FF8888",
      "#FF6666",
      "#FF4444",
    ];
    const colorIndex = Math.min(
      Math.floor(intensity * colorCodes.length),
      colorCodes.length - 1
    );
    return colorCodes[colorIndex];
  };

  return (
    <div className="bg-[#1a1919] rounded-md mb-4 p-4">
      <div className="mx-4">
        <div className="flex justify-between items-center pb-4">
          <div className="flex items-center">
            <div className="p-4 bg-[#3b3c3f] text-white flex items-center rounded-md">
              <FaShoppingBag />
            </div>
            <div className="ml-4">
              <h1 className="text-white text-3xl">{name}</h1>
              <p className="text-white">{description}</p>
            </div>
          </div>
          <button className="p-4 bg-[#3b3c3f] text-white flex items-center rounded-md">
            <FaCheck />
          </button>
        </div>

        <div
          className="grid grid-flow-col gap-1 overflow-x-scroll hide-scrollbar pb-4"
          style={{ gridTemplateRows: "repeat(7, minmax(0, 1fr))" }}
        >
          {calenderGrid.map((day) => {
            const activityCount =
              dataValues.find((item) => item.date === day)?.count || 0;
            const intensity = getIntensity(activityCount);
            const color = getColorFromIntensity(intensity);
            return (
              <a
                key={day}
                href={`/posts?date=${day}`}
                className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded cursor-pointer"
                title={`${activityCount} Posts on ${day}`}
                style={{
                  backgroundColor: activityCount === 0 ? "#ffffff10" : color,
                }}
              ></a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeatMap;
