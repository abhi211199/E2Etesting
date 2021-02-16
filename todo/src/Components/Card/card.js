import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { deleteData, changeStatus } from '../Controllers/API';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '20px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  // const [toggle, setToggle] = React.useContext(DataContext);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.note}
        </Typography>
        <Typography variant="body2" component="p">
          {props.summary}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        {
          props.status ? 
          <Button variant='contained' color='secondary' size="small" onClick = {()=>changeStatus(props).then(props.onHome(true))} >Mark as Incomplete</Button>
          :
          <Button variant='contained' color='primary' size="small" onClick = {()=>changeStatus(props).then(props.onHome(true))} >Mark as Done</Button>    
        }
        <Button variant='contained' color='secondary' size="small">Edit</Button>
        <Button variant='contained' color='secondary' size="small" onClick = {()=>deleteData(props.id)}>Delete</Button>
      </CardActions>
    </Card>
  );
}
