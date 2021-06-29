import React from 'react'
import ImageAvatars from '../../styles/StAvatar'
import users from "../../Users.json";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  })
);


function ProfilePage() {
  const classes = useStyles();
  const [name, setName] = React.useState("name23");

  return (
    <div  className="App">
        <div className="App-header" style = {{display:'flex', flexDirection: 'row'}}>
            <ImageAvatars/>
            <h3> {users[3].name} </h3>
        </div>
        <div>
          <p> {users[3].email} </p>
          <h4> Dine poeng: {users[3].points} </h4>
        </div>

        <div>
            <Button variant="contained" color="primary" component={RouterLink} to="/updateprofile" className="btn btn-primary" >
              Oppdater profil
            </Button>
        </div>
    </div>
  );
}

export default ProfilePage
