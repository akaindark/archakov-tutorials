import React from "react";

export default function Tab( {tab, activeId, setActiveId} ) {
  let { id, title, description } = tab;

   const stateToggle = () => {
     if(activeId === id){
       return setActiveId(null);
     }
     setActiveId(id);
   };

  return (
    <div key={id} className={activeId===id?"tab active":"tab"}>
      <input id={id} type="checkbox" name="tabs"/>
      <label
        onClick={stateToggle}
        htmlFor={id}
      >
        {title}
      </label>
      <div className="tab-content">
        <p>{description}</p>
      </div>
    </div>
  );
}