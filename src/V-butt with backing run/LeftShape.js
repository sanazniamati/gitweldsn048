import { Arrow, Group, Line, Shape, Text } from "react-konva";

function LeftShape({
  yt2,
  y2Left,
  y3Left,
  y4Left,
  y5Left,
  yc,
  xAlfaLeft,
  xCordinateLeftShape,
}) {
  return (
    <Group>
      <Line
        x={xCordinateLeftShape}
        stroke={"green"}
        strokeWidth={2}
        points={[151, yt2, 250, yt2]}
      />
      <Line
        x={xCordinateLeftShape}
        stroke={"green"}
        strokeWidth={2}
        points={[151, 453, 260, 453]}
      />
      <Text text={"t2"} x={xCordinateLeftShape + 157} y={329} fontSize={40} />
      <Arrow
        x={xCordinateLeftShape}
        points={[153, yt2, 153, 449]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Shape
        x={xCordinateLeftShape}
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(250, yt2);
          context.lineTo(xAlfaLeft, yt2);
          context.lineTo(548, yc);
          context.lineTo(548, 455);
          context.lineTo(250, 455);
          context.lineTo(250, y5Left);
          context.lineTo(268, y4Left);
          context.lineTo(235, y3Left);
          context.lineTo(250, y2Left);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        stroke="red"
        strokeWidth={4}
      />
    </Group>
  );
}

export default LeftShape;
