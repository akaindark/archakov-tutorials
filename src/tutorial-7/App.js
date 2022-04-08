import React from "react";
import {useForm} from "react-hook-form";

import "./index.scss";
import {Button, TextField} from "@mui/material";

export default function App() {
  const {handleSubmit, register, formState, reset} = useForm ({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      about: ""
    },
  });

  const onSubmit = (values) => console.log("ФОРМА!", values);

  console.log(formState.errors);

  return (
    <form  className="App">
      <div className="row">
        <TextField
          name="firstName"
          label="Имя"
          {...register("firstName", {
            validate: (value) => value !== "admin" || "Nice try!"
          })}
          helperText={formState.errors.firstName && formState.errors.firstName.message}
          error={!!formState.errors.firstName}
          variant="standard"
          fullWidth
        />
        <TextField
          name="lastName"
          label="Фамилия"
          {...register("lastName", {
            required: "Это обязательное поле!"
          })}
          helperText={formState.errors.lastName && formState.errors.lastName.message}
          error={!!formState.errors.lastName}
          variant="standard"
          fullWidth
        />
      </div>
      <div className="row">
        <TextField
          {...register("email", {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,}$/i,
              message: "Это неверная почта!"
            }
          })}
          helperText={formState.errors.email && formState.errors.email.message}
          error={!!formState.errors.email}
          name="email"
          label="E-Mail"
          defaultValue=""
          variant="standard"
          fullWidth
        />
        <TextField
          {...register("password", {
            required: "Это обязательное поле!"
          })}
          helperText={formState.errors.password && formState.errors.password.message}
          error={!!formState.errors.password}
          name="password"
          type="password"
          label="Пароль"
          variant="standard"
          fullWidth
        />
      </div>
      <div className="row">
        <TextField name="about" label="Обо мне" variant="standard" fullWidth/>
      </div>
      <br/>
      <div className="row">
        <Button onClick={handleSubmit(onSubmit)} variant="contained" color="primary">
          Зарегистрироваться
        </Button>
        <Button onClick={() => reset()} variant="contained" color="secondary">
          Очистить
        </Button>
      </div>
    </form>
  );
}
