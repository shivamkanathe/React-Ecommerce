import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';
import { Link } from 'react-router-dom';
import SettingCart from '../components/SettingCart';
import "../style/Setting.css";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const settingList = [
    {
        name:"Profile",
        path:""
    },
    {
        name:"Change Password",
        path:"/changePassword"
    },
    {
        name:"Orders",
        path:"/orders"
    },

    {
        name:"Contact",
        path:""
    },
    {
        name:"Signout",
        path:""
    },
];

function Setting() {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
        <div className="container" id ="setting">
            <div className="mainContain">
                <h2>Settings</h2>
               {
                   settingList.map((item)=>{
                       return <Link to= {{pathname:item.path}} style={{textDecoration:"none",color:"black"}} onClick={item.name === "Signout" ? handleClickOpen: null} >
                       <SettingCart title={item.name}/>
                       </Link>
                   })
               }
               <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Logout</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure want to logut.By logging out your data may remove
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
            </div>
        </div>
    )
}

export default Setting
  