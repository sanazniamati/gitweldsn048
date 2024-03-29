import { Stage, Layer, Group, Image, Text } from "react-konva";
import useImage from "use-image";
import { useRef, useState } from "react";
import LeftShape from "./LeftShape";
import RightShape from "./RightShape";
import Degree from "./Degree";
import Distance from "./Distance";

function Index() {
  const url = "img.gif";
  const [image] = useImage(url);
  const [text, setText] = useState("");
  const handleMouseMove = (e) => {
    const stage = e.target.getStage();
    const pointerPosition = stage.getPointerPosition();
    const x = pointerPosition.x;
    const y = pointerPosition.y;
    setText(() => "X:" + x + " Y:" + y);
  };
  const handelMouseOut = () => {
    setText("");
  };
  //RightShape
  const [yt1, setYt1] = useState(245);
  const [t1, sett1] = useState(452 - 245);
  // let t1 = 452 - yt1;
  const [y2Left, setY2Left] = useState(337);
  const [y3Left, setY3Left] = useState(343);
  const [y4Left, setY4Left] = useState(352);
  const [y5Left, setY5Left] = useState(356);
  const [yc, setYc] = useState(403);
  const [c, setC] = useState(452 - yc);
  // let c = 452 - yc;
  const [alfa, setAlfa] = useState(70);
  let xAlfaRight = 574 + Math.tan(((alfa / 2) * Math.PI) / 180) * (t1 - c);
  const [xCordinateRightShape, setXCordinateRightShape] = useState(0);

  //LeftShape
  const [yt2, setYt2] = useState(245);
  const [y2Right, setY2Right] = useState(337);
  const [y3Right, setY3Right] = useState(343);
  const [y4Right, setY4Right] = useState(352);
  const [y5Right, setY5Right] = useState(356);
  let t2 = 452 - yt2;
  let xAlfaLeft = 548 - Math.tan(((alfa / 2) * Math.PI) / 180) * (t2 - c);
  const [xCordinateLeftShape, setXCordinateLeftShape] = useState(0);
  //b
  const [bPlas, setBPlas] = useState(576);
  const handelIncT2 = () => {
    setYt2(yt2 - 10);
    setY2Left(y2Left - 5);
    setY3Left(y3Left - 5);
    setY4Left(y4Left - 5);
    setY4Left(y4Left - 5);
    setY5Left(y5Left - 5);
  };
  const handelIncT1 = () => {
    setYt1(yt1 - 10);
    sett1(452 - yt1);
    setY2Right(y2Right - 5);
    setY3Right(y3Right - 5);
    setY4Right(y4Right - 5);
    setY4Right(y4Right - 5);
    setY5Right(y5Right - 5);
  };
  const handelIncC = () => {
    setYc(yc - 5);
  };
  const handelIncAlfa = () => {
    setAlfa(alfa + 5);
  };
  const handelIncB = () => {
    setBPlas(bPlas + 10);
    setXCordinateLeftShape(xCordinateLeftShape - 5);
    setXCordinateRightShape(xCordinateRightShape + 5);
  };
  const t1Ref = useRef();
  const cRef = useRef();

  // const handelOnClick = () => {
  //   sett1(t1Ref.current.value);
  //   setYt1(t1Ref.current.value - yt1);
  //   setC(cRef.current.value);
  //   setYc(cRef.current.value - yc);
  //   // console.log("t1" + t1);
  // };
  const handelOnChangeT1 = (e) => {
    sett1(e.target.value);
    setYt1(452 - t1);
  };
  const handelOnChangeC = (e) => {
    setC(e.target.value);
    setYc(452 - c);
  };
  return (
    <>
      <button onClick={handelIncT1}>t1 +</button>
      <button onClick={handelIncT2}>t2 +</button>
      <button onClick={handelIncC}>c +</button>
      <button onClick={handelIncB}>b +</button>
      <button onClick={handelIncAlfa}>Alfa +</button>
      {/*<button onClick={handelOnClick}>Create Shape</button>*/}
      <br />
      <label>t1 : </label>
      <input type="number" value={t1} onChange={handelOnChangeT1} />

      <label>C : </label>
      <input type="number" value={c} onChange={handelOnChangeC} />

      <Stage
        y={-45}
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseMove={handleMouseMove}
        onMouseOut={handelMouseOut}
      >
        <Layer>
          <Group>
            {/*<Image x={100} y={10} image={image} />*/}
            <Text text={"t1 : " + t1} x={10} y={50} fontSize={20} />
            <Text text={"t1 : " + t1} x={10} y={50} fontSize={20} />
            <Text text={"yT1 : " + yt1} x={180} y={50} fontSize={20} />
            <Text text={"c : " + c} x={10} y={80} fontSize={20} />
            <Text text={"yc : " + yc} x={180} y={80} fontSize={20} />
          </Group>
          {/* Left Shape */}
          <LeftShape
            yt2={yt2}
            y2Left={y2Left}
            y3Left={y3Left}
            y4Left={y4Left}
            y5Left={y5Left}
            xAlfaLeft={xAlfaLeft}
            yc={yc}
            xCordinateLeftShape={xCordinateLeftShape}
          />
          {/*  right shape*/}
          <RightShape
            yt1={yt1}
            yc={yc}
            xAlfaRight={xAlfaRight}
            y2Right={y2Right}
            y3Right={y3Right}
            y4Right={y4Right}
            y5Right={y5Right}
            xCordinateRightShape={xCordinateRightShape}
          />
          {/*Beta */}
          <Degree />
          {/* b */}
          <Distance
            bPlas={bPlas}
            xCordinateLeftShape={xCordinateLeftShape}
            xCordinateRightShape={xCordinateRightShape}
          />
        </Layer>
      </Stage>
    </>
  );
}
export default Index;
