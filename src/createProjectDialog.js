import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

export function CreateProjectDialog(props) {
    const classes = useStyles();
    const { onClose, selectedValue, open, addProjectData } = props;
  
    const initialState = {
        projectName: ""
      };
    
      const [data, setInitialStateData] = useState(initialState);

    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleListItemClick = (value) => {
      onClose(value);
    };

    const addProject = (event) =>{
        if(event){
            event.preventDefault();
        } 
        addProjectData(data)
         handleClose()

    }
  
    return (<div>
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Create New Project</DialogTitle>
            <form className={classes.root} onSubmit={addProject} noValidate autoComplete="off">
                    <TextField id="project-name" label="Project Name"  
                    onChange={event =>{
                    setInitialStateData({
                        ...data,
                        projectName: event.target.value
                    });
                    }}/>
                    <br></br>
                    <Button variant="contained" onClick={addProject} color="primary">
                    Add Project
                    </Button>
            </form>
      </Dialog>
      </div>
    );
  }
  
  CreateProjectDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };