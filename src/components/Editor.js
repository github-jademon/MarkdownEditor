import React, { useEffect } from "react";

const Editor = ({ value, onChange, setLeftSide }) => {
  console.log(value);

  useEffect(() => {
    setLeftSide(document.getElementById("editor"));
  }, []);

  return (
    <div className="container" id="editor">
      <div className="container row-container toolbox">
        <div className="title col-center">Code</div>
      </div>
      <div className="editor">
        <textarea value={value} onChange={(e) => onChange(e.target.value)} />
      </div>
    </div>
  );
};

export default Editor;
