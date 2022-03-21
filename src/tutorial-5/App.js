import React from "react";
import Feedback from "./components/Feedback";
import Form from "./components/Form";
import {Container, Typography} from "@mui/material";
import List from "@mui/material/List";

export default function App() {

  const [comments, setComments] = React.useState(
    JSON.parse(localStorage.getItem("comments")) || []
  );

  React.useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments))
  }, [comments]);

  const addPerson = (person) => {
    setComments([...comments, person]);
  };

  const deletePerson = (i) => {
    setComments(comments.filter((_, index) => i !== index));
  }

  return (
    <Container>
      <List sx={{
        width: '100%',
        maxWidth: 360,
        backgroundColor: 'background.paper',
        border: '1px solid #d1d1d1',
        margin: '0 auto 20px'
      }}>
        <Typography sx={{mt: 1, ml: 5}} variant="h6" component="h6">
          Отзывы:
        </Typography>
        {comments.map((item, index) => <Feedback deletePerson={deletePerson} index={index}  {...item}/>)}
      </List>

      <Form addPerson={addPerson}/>

    </Container>
  );
}