import { useState } from "react";
import { Circle } from "react-leaflet";

export default function Tooltip() {
  const [clickedCount, setClickedCount] = useState(0);
  const eventHandlers = useMemo(
    () => ({
      click() {
        setClickedCount((count) => count + 1);
      },
    }),
    []
  );

  const clickedText =
    clickedCount === 0
      ? "Click this Circle to change the Tooltip text"
      : `Circle click: ${clickedCount}`;

  return (
    <Circle
      center={center}
      eventHandlers={eventHandlers}
      pathOptions={{ fillColor: "blue" }}
      radius={200}
    >
      <Tooltip>{clickedText}</Tooltip>
    </Circle>
  );
}
