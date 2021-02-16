import React, { useEffect } from 'react';
import { addData } from '../Controllers/API'
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
            <Button className={classes.add} variant='contained' size="small" onClick = {()=>{setFormDisp(true)}} >Add Note</Button>        
            {formDisp ? <Form onHome = {(data)=>{addData(data);setFormDisp(false);props.onHome()}} onCancel = {()=>setFormDisp(false)} /> : ''}
        </div>
    )
}