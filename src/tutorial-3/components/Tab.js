import React from "react";

export default function Tab({id, title, description}) {

  const [tab, setTab]= React.useState(null);

  const showTab=(event)=>{
    setTab
  }


  return (
    <div className={`tab active`}>
      <input id={id} type="checkbox" name="tabs"/>
      <label onClick={showTab} for={id}>{title}</label>
      <div className="tab-content">
        <p>{description}</p>
      </div>
    </div>
  );
}