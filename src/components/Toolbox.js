import React from "react";

const Toolbox = ({ onChange, value }) => {
  const onClick = (text) => {
    onChange((value += text + "\n"));
  };

  return (
    <div className="toolbox">
      <div className="container">
        <div className="button" onClick={() => onClick("# Header1")}>
          h1
        </div>
        <div className="button" onClick={() => onClick("## Header2")}>
          h2
        </div>
        <div className="button" onClick={() => onClick("### Header3")}>
          h3
        </div>
        <div className="button" onClick={() => onClick("#### Header4")}>
          h4
        </div>
        <div className="button" onClick={() => onClick("##### Header5")}>
          h5
        </div>
        <div className="button" onClick={() => onClick("###### Header6")}>
          h6
        </div>
        <div className="button" onClick={() => onClick("**bold**")}>
          b
        </div>
        <div className="button" onClick={() => onClick("*itelic*")}>
          i
        </div>
        <div className="button" onClick={() => onClick("~~delete~~")}>
          d
        </div>
        <div className="button" onClick={() => onClick("__underscore__")}>
          u
        </div>
        <div className="button" onClick={() => onClick("> quotation")}>
          q
        </div>
        <div className="button" onClick={() => onClick("`code`")}>
          code
        </div>
        <div
          className="button"
          onClick={() => onClick("\n```text\npreview\n```\n")}
        >
          pre
        </div>
        <div
          className="button"
          onClick={() =>
            onClick(
              "\n| title1 | title2 | title3 |\n| --- | --- | --- |\n| 1 | 2 | 3 |\n| 4 | 5 | 6 |\n| 7 | 8 | 9 |\n"
            )
          }
        >
          table
        </div>
      </div>
    </div>
  );
};

export default Toolbox;
