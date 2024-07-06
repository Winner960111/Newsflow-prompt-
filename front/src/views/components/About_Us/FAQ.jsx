import React, { useEffect, useRef, useState } from "react";
import "./FAQ.css"

const FAQ = ({title="", content}) => {
  const [expanded, setExpanded] = useState(false);
  const [long, setLong] = useState(false)
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      if (textElement.scrollHeight > textElement.clientHeight) {
        setLong(false);
      } else {
        setLong(true);
      }
    }
  }, []);

  const handleExpandButtonClick = () => {
    setExpanded(!expanded);
  };
  
  return (
    <>
      <div className="first_heading">
        <div className="text_on_about_bg">
          <h1><span>FAQ: </span>{title}</h1>
        </div>
        <div className="Text_Top_About"></div>
      </div>
      <div className="About_first_p_text">
        <div className={`About_first_p_text textbox ${expanded ? "expanded" : ""}`}>
          <p
            ref={textRef}
            class={`${expanded ? "expanded" : "text"}`}
            style={{ WebkitLineClamp: expanded ?? 'auto'}}
            dangerouslySetInnerHTML={{__html: content}}
          ></p>
          {!long && (
            <div>
              <span className="expander" onClick={handleExpandButtonClick}>
                {!expanded ? "Expand+" : "Collapse-"}
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default FAQ;