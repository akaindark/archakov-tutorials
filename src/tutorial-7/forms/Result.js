import React from 'react';
import {Paper} from '@mui/material';

export default function Result({formValues}) {
  return (
    <Paper style={{padding: 30}}>
      <h2>Персональная информация:</h2>
      <ul>
        <li>
          <b>Имя:</b> {formValues.firstName}
        </li>
        <li>
          <b>Фамилия:</b> {formValues.lastName}
        </li>
        <li>
          <b>Почта:</b> {formValues.email}
        </li>
        <li>
          <b>Пароль:</b> {formValues.password}
        </li>
        <li>
          <b>Обо мне:</b> {formValues.about}
        </li>
        </ul>
        <hr/>
        <h2>Адрес:</h2>
      <ul>
        <li>
          <b>Город:</b> {formValues.city}
        </li>
        <li>
          <b>Улица:</b> {formValues.street}
        </li>
        <li>
          <b>Номер квартиры:</b> {formValues.apartment}
        </li>
      </ul>
    </Paper>
  )
}