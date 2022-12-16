import React from 'react';
import {TextField} from "@mui/material";
import {useFormContext} from "react-hook-form";

export default function FormField({name, label}) {
  const { register, formState } = useFormContext();
  const { errors } = formState;

  return (
    <TextField
      {...register(name)}
      helperText={errors[name] && errors[name].message}
      error={!!errors[name]}
      name={name}
      label={label}
      variant="standard"
      fullWidth/>
  );
}