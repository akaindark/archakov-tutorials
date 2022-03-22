import React from "react";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Box from '@mui/material/Box'
import {Button, FormControl, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";


export default function Form({addPerson}) {

  const [person, setPerson] = React.useState([{
    fullName: '',
    email: '',
    text: '',
  }]);

  const handleChangeValue = (e) => {
    const {name, value} = e.target
    setPerson({
      ...person,
      [name]: value
    })
  }

  const onSubmit = (e) => {
    addPerson(person)
    e.preventDefault()
    setPerson({
      fullName: '',
      email: '',
      text: ''
    })
  }

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {mb: 2, w: 310},
        maxWidth: 360,
        width: '100%',
        border: "1px solid #d1d1d1",
        borderRadius: "2%",
        boxSizing: 'border-box',
        p: 2,
        m: "auto",
      }}
      onSubmit={onSubmit}
      noValidate
      // autoComplete="off"
    >
      <FormControl>
        <Typography sx={{mt: 1, mb: 2, ml: 1}} variant="h6" component="h6">
          Обратная связь:
        </Typography>
        <Box>
          <TextField
            id="outlined"
            label="Имя"
            placeholder="Имя"
            value={person.fullName}
            onChange={handleChangeValue}
            name="fullName"
          />
        </Box>
        <Box>
          <TextField
            id="outlined-textarea"
            label="Почта"
            placeholder="Почта"
            value={person.email}
            onChange={handleChangeValue}
            name="email"
          />
        </Box>
        <Box>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            id="outlined-textarea"
            label="Текст"
            placeholder="Текст..."
            value={person.text}
            onChange={handleChangeValue}
            name="text"
            sx={{
              ml: 1,
            }}
          />
        </Box>
        <Box>
          <Button type="submit" variant="contained" sx={{marginTop: 2, width: "100%"}}>Отправить</Button>
        </Box>

      </FormControl>
    </Box>
  );
}