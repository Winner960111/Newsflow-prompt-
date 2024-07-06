import React from "react";
import './Reference.css';

function Reference({title="", links=[]}) {
  return (
    <div
      className="news-list-item"
      style={{
        display: "block",
        height: "auto"
      }}
    >
      <div className="news-title">
        <span>{title}</span>
      </div>
      {links.map((link) => {
      
          return (
          <>
            <div className="news-link"
            onClick={()=>{
              window.gtag('event', 'reference_link_select', {
                event_category: 'Reference',
                event_label: `Reference Link Selected: ${link}`,
              });
            }}
            >
              <a href={link} target="_blank" >{link.replace(/https?:\/\//g, '')}</a>
            </div>
          </>
          )
      })}
    </div>
  )
}

export default Reference;