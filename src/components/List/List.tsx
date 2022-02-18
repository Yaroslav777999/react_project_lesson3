import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


export default function InsetList() {
  return (
    <List className='list'
      sx={{ width: '100%', maxWidth: 300, bgcolor: 'rgb(245,237,232)' }}
      aria-label="contacts"
    >
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
         
          </ListItemIcon>
          <ListItemText primary="First chat" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText inset primary="Second chat" />
        </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
        <ListItemButton>
          <ListItemText inset primary="Feard chat" />
        </ListItemButton>
              </ListItem>
    </List>
  );
}