import React, { useCallback, useState } from "react";
import { PieChart, Pie,Cell, Sector } from "recharts";

const data = [
    { name: "1 Clients", value: 20000 },
    { name: "20 Clients", value: 500000 },
    { name: "6 Clients", value: 250000 },
    { name: "5 Clients", value: 100000 }
  ];
  const COLORS = ['rgba(51, 102, 255, 1)', 'rgba(54, 179, 126, 1)','rgba(255, 171, 0, 1)', 'rgba(255, 86, 48, 1)' ];
  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";
  
    return (
      <g>
       
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`PV ${value}`}</text>
       <text x={cx} y={cy} dy={8} textAnchor={"middle"} fill={fill}>
          {payload.name}
        </text>
      </g>
    );
  };
  
export default function Chart() {
    const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  return (
    <PieChart width={500} height={300} style={{display:"flex",borderRadius:"24px",boxShadow:"rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"}}
    >
    <Pie
      activeIndex={activeIndex}
      activeShape={renderActiveShape}
      data={data}
      cx={250}
      cy={150}
      innerRadius={45}
      outerRadius={70}
      fill={COLORS}
      dataKey="value"
      onMouseEnter={onPieEnter}
    > {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}</Pie>
  </PieChart>
  );
}