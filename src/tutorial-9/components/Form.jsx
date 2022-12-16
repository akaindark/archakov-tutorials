import React from "react";

function Form(props) {
  return (
    <form className="app-form">
      <input
        type="text"
        className="app-input"
        placeholder="Укажите GitHub-аккаунт"
        value={props.value}
        onChange={props.onChange}
        title="Разрешено использовать только латинские буквы"
        pattern="^[a-zA-Z0-9]+$"
      />

      <button className="app-form_btn" onClick={props.onClick}>
        Поиск
      </button>
    </form>
  );
}
export default Form;
