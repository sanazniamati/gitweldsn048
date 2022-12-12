import { Arrow, Group, Line, Shape, Text } from "react-konva";

function RightShape({
  yt1,
  yc,
  xAlfaRight,
  y2Right,
  y3Right,
  y4Right,
  y5Right,
  xCordinateRightShape,
}) {
  return (
    <Group>
      <Line
        x={xCordinateRightShape}
        stroke={"green"}
        strokeWidth={2}
        points={[873, yt1, 969, yt1]}
      />
      <Line
        x={xCordinateRightShape}
        stroke={"green"}
        strokeWidth={2}
        points={[873, 452, 969, 452]}
      />
      <Arrow
        x={xCordinateRightShape}
        points={[969, yt1 + 3, 969, 450]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Text text={"t1"} x={xCordinateRightShape + 930} y={325} fontSize={40} />

      <Line
        x={xCordinateRightShape}
        stroke={"green"}
        strokeWidth={2}
        points={[576, yc, 937, yc]}
      />
      <Arrow
        x={xCordinateRightShape}
        points={[937, yc + 5, 937, 451]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        fill={"yellow"}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Text text={"C"} x={xCordinateRightShape + 898} y={414} fontSize={30} />

      <Shape
        x={xCordinateRightShape}
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.lineTo(875, yt1);
          context.lineTo(875, y2Right);
          context.lineTo(855, y3Right);
          context.lineTo(895, y4Right);
          context.lineTo(875, y5Right);
          context.lineTo(875, 453);
          context.lineTo(577, 453);
          context.lineTo(577, yc);
          context.lineTo(xAlfaRight, yt1);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        stroke="red"
        strokeWidth={4}
      />
    </Group>
  );
}

export default RightShape;
