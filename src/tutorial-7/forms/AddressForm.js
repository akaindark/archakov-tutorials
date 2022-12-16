import React from "react";
import {useForm} from "react-hook-form";
import '../index.scss';
import {Button, TextField} from "@mui/material";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  city: yup.string().required('Укажите город'),
  street: yup.string().required('Укажите улицу'),
  apartment: yup.number('Должен быть числом').min(1, 'Укажите номер квартиры')
});

export default function AddressForm({nexStep, setFormValues}) {
  const {handleSubmit, register, formState, reset} = useForm({
    defaultValues: {
      city: "",
      street: "",
      apartment: 0
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = (values) =>{
    setFormValues(prev => ({...prev, ...values}));
    nexStep('result');
  };

  return (
    <form>
      <TextField
        name="city"
        label="Город"
        {...register("city")}
        helperText={formState.errors.city && formState.errors.city.message}
        error={!!formState.errors.city}
        variant="standard"
        fullWidth
      />
      <TextField
        name="street"
        label="Улица"
        {...register("street")}
        helperText={formState.errors.street && formState.errors.street.message}
        error={!!formState.errors.street}
        variant="standard"
        fullWidth
      />
      <TextField
        name="apartment"
        label="Номер квартиры"
        {...register("apartment")}
        helperText={formState.errors.apartment && formState.errors.apartment.message}
        error={!!formState.errors.apartment}
        variant="standard"
        type={'number'}
        fullWidth
      />
      <br/>
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