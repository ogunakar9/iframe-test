import React, { useState } from "react";
import { createPortal } from "react-dom";

const CustomIframe = ({ children, ...props }) => {
  const [contentRef, setContentRef] = useState(null);

  const mountNode = contentRef?.contentWindow?.document?.body;

  //exported wrapper has access to props
  console.log("id", props.id);

  return (
    <iframe
      {...props}
      ref={setContentRef}
      title={props.title || "custom iframe"}
    >
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
};

export default CustomIframe;
