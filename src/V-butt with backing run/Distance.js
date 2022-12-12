import React from "react";
import { Arrow, Group, Line, Text } from "react-konva";

function Distance({ bPlas, xCordinateLeftShape, xCordinateRightShape }) {
  return (
    <Group>
      <Line
        x={xCordinateLeftShape}
        stroke={"green"}
        strokeWidth={2}
        points={[547, 455, 547, 530]}
      />
      <Line
        x={xCordinateRightShape}
        stroke={"green"}
        strokeWidth={2}
        points={[578, 453, 578, 530]}
      />
      <Text x={553} y={485} text={"b"} fontSize={40} />
      <Arrow
        x={xCordinateLeftShape}
        points={[550, 524, bPlas, 524]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        pointerAtEnding={true}
        stroke={"blue"}
        strokeWidth={3}
      />
    </Group>
  );
}

export default Distance;
