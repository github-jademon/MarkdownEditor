import React, { useEffect, useState } from "react";

const Divider = ({ leftSide, rightSide }) => {
  const [resizer, setResizer] = useState();
  let x = 0;
  let leftWidth = 0;

  useEffect(() => {
    setResizer(document.getElementById("divider"));
    if (!resizer) return;
    resizer.addEventListener("mousedown", mouseDownHandler);
  }, [resizer]);

  const mouseDownHandler = function (e) {
    x = e.clientX;
    leftWidth = leftSide.getBoundingClientRect().width;

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseMoveHandler = function (e) {
    const dx = e.clientX - x;

    leftSide.style.userSelect = "none";
    leftSide.style.pointerEvents = "none";

    rightSide.style.userSelect = "none";
    rightSide.style.pointerEvents = "none";

    const newLeftWidth =
      ((leftWidth + dx) * 100) /
      resizer.parentNode.getBoundingClientRect().width;
    leftSide.style.width = `${newLeftWidth}%`;
  };

  const mouseUpHandler = function () {
    resizer.style.removeProperty("cursor");
    document.body.style.removeProperty("cursor");

    leftSide.style.removeProperty("user-select");
    leftSide.style.removeProperty("pointer-events");

    rightSide.style.removeProperty("user-select");
    rightSide.style.removeProperty("pointer-events");

    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };

  return <div id="divider"></div>;
};

export default Divider;
