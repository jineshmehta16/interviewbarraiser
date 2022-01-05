import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button, TextField } from '@material-ui/core';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
export function Timetracker(props) {
    const classes = useStyles();
    const projectSource = localStorage.getItem('projectData').split(',');

    const initialState = {
        task: "",
        project: ""
      };
    
      const [data, setInitialStateData] = useState(initialState);


    const addTimer = (event) =>{
        if(event){
            event.preventDefault();
        } 
    }

    const handleChangeProject = (e) =>{
console.log(e)
    }

    return (
        <>
             <form className={classes.root} onSubmit={addTimer} noValidate autoComplete="off">
                    <TextField id="project-name" label="Task Name"  
                    onChange={event =>{
                    setInitialStateData({
                        ...data,
                        task: event.target.value
                    });
                    }}/>

<FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Select Project</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data.project}
          onChange={handleChangeProject}
        >
        {
            projectSource.map(each => <MenuItem value={each}>{each}</MenuItem>)
        }
         
        </Select>
      </FormControl>

                    <Button variant="contained" onClick={addTimer} color="primary">
                        Start
                    </Button>
            </form>
        </>
    )
  }