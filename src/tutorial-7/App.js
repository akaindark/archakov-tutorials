import React from "react";
import {Routes, Route, useNavigate} from "react-router-dom";
import PersonalInfoForm from "./PersonalInfoForm";
import {useForm, FormProvider, useFormContext} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {Button} from "@mui/material";

// export default function App() {
//   const [formValues, setFormValues] = React.useState({});
//   const navigate = useNavigate();
//
//   const nextStep = (name) => {
//     navigate(`/${name}`);
//   };
//
//   console.log('Главная форма', formValues);
//
//
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<PersonalInfoForm nexStep={nextStep} setFormValues={setFormValues}/>}/>
//         <Route path="address" element={<AddressForm nexStep={nextStep} setFormValues={setFormValues}/>}/>
//         <Route path="result" element={<Result formValues={formValues}/>}/>
//       </Routes>
//     </div>
//   );
// }


const schema = yup.object().shape({
  firstName: yup.string().min(2, 'Слишком короткое имя'),
  lastName: yup.string().min(3, 'Слишком короткая фамилия'),
  email: yup.string().email('Некорректный email').required('Обязательное поле')
});

export default function App() {
  const methods = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <div className="App">
      <FormProvider {...methods} >
        <PersonalInfoForm/>
      </FormProvider>
      <br/>
      <Button onClick={methods.handleSubmit(onSubmit)} variant="contained" color="primary">Далее</Button>
    </div>
  );
}