import React from "react";
import {useForm} from "react-hook-form";
import '../index.scss';
import {Button, TextField} from "@mui/material";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstName: yup.string().min(2, 'Слишком короткое имя'),
  lastName: yup.string().min(3, 'Слишком короткая фамилия'),
  email: yup.string().email('Некорректный email').required('Обязательное поле'),
  password: yup.string().min(6, 'Пароль должен быть не менее 6 символов').max(32, 'Пароль должен быть не более 32 символов')
});

export default function PersonalInfoForm({nexStep, setFormValues}) {
  const {handleSubmit, register, formState, reset} = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      about: ""
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = (values) => {
    setFormValues(values);
    nexStep('address');
  };

  return (
    <form>
      <div className="row">
        <TextField
          name="firstName"
          label="Имя"
          {...register("firstName")}
          helperText={formState.errors.firstName && formState.errors.firstName.message}
          error={!!formState.errors.firstName}
          variant="standard"
          fullWidth
        />
        <TextField
          name="lastName"
          label="Фамилия"
          {...register("lastName")}
          helperText={formState.errors.lastName && formState.errors.lastName.message}
          error={!!formState.errors.lastName}
          variant="standard"
          fullWidth
        />
      </div>
      <div className="row">
        <TextField
          {...register("email")}
          helperText={formState.errors.email && formState.errors.email.message}
          error={!!formState.errors.email}
          name="email"
          label="E-Mail"
          defaultValue=""
          variant="standard"
          fullWidth
        />
        <TextField
          {...register("password")}
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
      <div className="row buttons">
        <Button onClick={() => reset()} variant="contained" color="secondary" size="small">
          Очистить
        </Button>
        <Button onClick={handleSubmit(onSubmit)} variant="contained" color="success">
          Далее
        </Button>
      </div>
    </form>
  )
}