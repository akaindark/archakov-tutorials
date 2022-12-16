import React from "react";
import './index.scss';
import {TextField} from "@mui/material";
import FormField from "./components/FormField";

export default function PersonalInfoForm() {

  return (
    <div>
      <div className="row">
        <FormField name='firstName' label='Имя' />
        <FormField name='lastName' label='Фамилия' />
        <FormField name='email' label='Почта' />
      </div>
    </div>
  )
}