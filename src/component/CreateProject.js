import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { dataActions } from "../redux/datafetchSlice";
import { useDispatch} from "react-redux";
import { useState } from "react";
import './CreateProject.css';

const CreateProject = () => {

  const [open, setOpen] = useState(false);
  const [FormisEmpty,setFormisEmpty]=useState(false);
  const dispatch = useDispatch();
  const [project, setProject] = useState({
    ProjectName: "",
    Budget: "",
    ProjectManager: "",
    StartDate: "",
    SiteAddress: " ",
    Railwayjuction: "",
    suplier1: "",
    contactperson: "",
    phone: "",
    email: "",
    EndDate: "",
    ProjectStatus: "",
  });


  const onTextChangeField = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };
  async function onFormSubmit(e) {
    e.preventDefault();
    for(const key in project){
      if(!project[key]){
      setFormisEmpty(true)
      return
      }
    }
    setFormisEmpty(false);
    dispatch(dataActions.NewRequest(project));
    setOpen(false);
  } 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setFormisEmpty(false);
    setOpen(false);
  };

  

  return (
    <div className="button">
      <Button variant="outlined"  onClick={handleClickOpen}>
        create new project
      </Button>
       <Dialog scroll="body" fullWidth open={open} onClose={handleClose}>
       <DialogTitle>Form Registration</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            required
            name="ProjectName"
            id="projectName"
            onChange={onTextChangeField}
            label="Project-Name"
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <TextField
            fullWidth
            autoFocus
            margin="dense"
            name="Budget"
            id="name"
            onChange={onTextChangeField}
            label=" Budget(Cr.)"
            type="number"
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <TextField
            fullWidth
            autoFocus
            margin="dense"
            name="ProjectManager"
            id="name"
            onChange={onTextChangeField}
            label="ProjectManager"
            type="text"
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <TextField
            fullWidth
            autoFocus
            margin="dense"
            name="StartDate"
            onChange={onTextChangeField}
            id="name"
            label="StartDate"
            type="date"
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <TextField
            fullWidth
            autoFocus
            margin="dense"
            onChange={onTextChangeField}
            name="SiteAddress"
            id="name"
            label="SiteAddress"
            type="name"
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <TextField
            fullWidth
            autoFocus
            name="Railwayjuction"
            id="name"
            onChange={onTextChangeField}
            label="Railway Juction"
            type="text"
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <TextField
            fullWidth
            autoFocus
            name="suplier1"
            id="name"
            onChange={onTextChangeField}
            label="suplier1"
            type="text"
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <TextField
            fullWidth
            autoFocus
            name="contactperson"
            id="name"
            onChange={onTextChangeField}
            label="Contact Person"
            type="text"
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <TextField
            fullWidth
            autoFocus
            margin="dense"
            name="phone"
            onChange={onTextChangeField}
            id="name"
            label="phone"
            type="number"
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <TextField
            fullWidth
            autoFocus
            margin="dense"
            onChange={onTextChangeField}
            id="name"
            name="email"
            label="email"
            type="email"
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <TextField
            fullWidth
            autoFocus
            name="EndDate"
            onChange={onTextChangeField}
            margin="dense"
            id="name"
            label="End Date"
            type="Date"
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <TextField
            fullWidth
            autoFocus
            margin="dense"
            onChange={onTextChangeField}
            name="ProjectStatus"
            id="name"
            label="Project Status"
            type="text"
            variant="standard"
          />
        </DialogContent>
        {FormisEmpty && <p className="message">Please Fill all the details.</p>}
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onFormSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default CreateProject;
