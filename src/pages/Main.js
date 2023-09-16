import React, { useState } from "react";
import { Divider, Editor, Toolbox, Preview } from "../components";

const Write = () => {
  const [md, setMd] = useState("# Hello World\n");
  const [leftSide, setLeftSide] = useState();
  const [rightSide, setRightSide] = useState();
  function onEditorChange(value) {
    setMd(value);
  }

  //https://blog.joostory.net/405

  // return (
  //   <div className="container">
  //     <div className="title">Write</div>
  //     <Editor value={desc} onChange={onEditorChange} />
  //   </div>
  // );

  return (
    <>
      <div className="main container">
        <Toolbox onChange={onEditorChange} value={md} />
        <div
          className="container row-container"
          style={{ height: "calc(100vh - 61px - 41px - 5px)" }}
        >
          <Editor
            onChange={onEditorChange}
            value={md}
            setLeftSide={setLeftSide}
          />
          <Divider leftSide={leftSide} rightSide={rightSide} />
          <Preview value={md} setRightSide={setRightSide} />
        </div>
      </div>
    </>
  );
};

export default Write;
