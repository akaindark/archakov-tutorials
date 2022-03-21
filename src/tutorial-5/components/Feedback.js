import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


export default function Feedback({fullName, text, deletePerson, index}) {

  return (
    <List sx={{
      width: '100%',
      maxWidth: 360,
      backgroundColor: 'background.paper',
      margin: '0 auto'
    }}>
      <ListItem alignItems="flex-center" sx={{px: 3, py: 1}}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src=""/>
        </ListItemAvatar>
        <ListItemText primary={fullName} secondary={text}/>
        <IconButton onClick={() => deletePerson(index)} aria-label="delete">
          <DeleteIcon/>
        </IconButton>
      </ListItem>
    </List>
  );
}
