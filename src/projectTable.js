import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { CreateProjectDialog } from './createProjectDialog';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, client) {
  return { name, client};
}

const rows = [];
const projectData = [];

const createNewProject = () =>{

}

export default function ProjectTable() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const addProjectData = (data) =>{
    rows.push(createData(data.projectName, 159));
    projectData.push(data.projectName)
    localStorage.setItem("projectData" , projectData);
  }

  return (<>
    <Button variant="contained" onClick={() => createNewProject()} onClick={handleClickOpen}>Create New Project</Button>
    <CreateProjectDialog open={open} onClose={handleClose} addProjectData= {addProjectData}/>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell>Client</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.client}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>);
}
