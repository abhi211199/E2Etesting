import React, { useEffect } from 'react';
import { editData } from '../Controllers/API'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Form from '../Form/form';

const useStyles = makeStyles({
    add: {
        marginLeft: '15vw',
    }
});

export default function BaseApp(props)
{
    const classes = useStyles();
    const [formDisp,setFormDisp] = React.useState(false);

    return(
        <div>
            <Button className={classes.add} variant='contained' color='secondary' size="small" onClick = {()=>{setFormDisp(true)}} >Edit</Button>        
            {formDisp ? <Form onHome = {(data)=>{editData(data);setFormDisp(false);props.onHome()}} onCancel = {()=>setFormDisp(false)} note = {props.note} summary = {props.summary} status = {props.status} id = {props.id} /> : ''}
        </div>
    )
}