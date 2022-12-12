import { Arrow, Group, Line, Shape, Text } from "react-konva";

function Degree(props) {
  return (
    <Group>
      {/*Beta*/}
      <Text x={554} y={271} text={"α"} fontSize={30} />
      <Arrow
        points={[472, 327, 492, 327]}
        pointerLength={5}
        pointerWidth={5}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Arrow
        points={[628, 327, 648, 327]}
        pointerLength={5}
        pointerAtBeginning={true}
        pointerAtEnding={false}
        pointerWidth={5}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(492, 327);
          context.quadraticCurveTo(566, 285, 628, 327);
          context.fillStrokeShape(shape);
        }}
        stroke="blue"
        strokeWidth={2}
      />
    </Group>
  );
}

export default Degree;
