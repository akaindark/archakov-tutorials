import React from "react";

export default function Tab({id, title, description}) {

  const [tab, setTab] = React.useState(false);

  const showTab = id => {
    if (tab === id) {
      return setTab(null)
    }

    setTab(id)
  }


  return (
    <div className={tab === id ? 'tab active' : 'tab'}>
      <input id={id} type="checkbox" name="tabs"/>
      <label onClick={() => showTab(id)} key={id} for={id}>{title}</label>
      <div className="tab-content">
        <p>{description}</p>
      </div>
    </div>
  );
}