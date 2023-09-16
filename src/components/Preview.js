import React, { useEffect, useState } from "react";
import { parseMd } from "./parseMd";

const Preview = ({ value, setRightSide }) => {
  const [chkCode, setChkcode] = useState(false);

  useEffect(() => {
    setRightSide(document.getElementById("preview"));
  }, []);

  const html = parseMd(value);

  return (
    <div className="container" id="preview">
      <div className="container row-container toolbox">
        <div className="title col-center">Preview</div>
        <div className="container">
          {chkCode === true ? (
            <div className="button" onClick={() => setChkcode(false)}>
              pre
            </div>
          ) : (
            <div className="button" onClick={() => setChkcode(true)}>
              code
            </div>
          )}
        </div>
      </div>
      <div className="preview">
        {chkCode === true ? (
          <textarea value={html} readOnly></textarea>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        )}
      </div>
    </div>
  );
};

export default Preview;
