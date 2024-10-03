import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '5px 4px', display: 'flex', alignItems: 'center', width: 600, borderRadius: "30px" }}
    >

      <InputBase
        sx={{ ml: 5, flex: 1,fontSize:"20px",fontFamily: "Open Sans" }}
        placeholder="Search"  
        inputProps={{ 'aria-label': 'search ' }}
      />
      <IconButton type="button" sx={{
        p: '12px',mr:1, backgroundColor: "orange", '&:hover': {backgroundColor: "orangered"}
      }} aria-label="search">
        <SearchIcon />
      </IconButton>
      {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
    </Paper>
  );
}
