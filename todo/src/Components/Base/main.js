import React, { useEffect } from 'react';
import './main.css';
import Card from '../Card/card';
import { fetchData } from '../Controllers/API'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddBtn from './AddBtn';

const useStyles = makeStyles({
    add: {
        marginLeft: '10vw',
    }
});

export default function BaseApp()
{
    const classes = useStyles();
    const [toggle, setToggle] = React.useState(false);
    const [data,setData] = React.useState([]);
    
    async function getData()
    {
        const resp = await fetchData();
        console.log(resp)
        setData(resp.data);
    }

    useEffect(()=>getData(),[toggle]);

    return(
        <div id="container">
                <div id="pending">
                    {
                        data.map(val => !val.status ? <Card summary={val.summary} note={val.note} status={val.status} id={val.id} onHome = {()=>setToggle(!toggle)}/> : '' )
                    }
                    <AddBtn onHome = {()=>setToggle(!toggle)} />
                </div>
                <div id="completed">
                    {
                        data.map(val => val.status ? <Card summary={val.summary} note={val.note} status={val.status} id={val.id} onHome = {()=>setToggle(!toggle)}/> : '' )
                    } 
                </div>
        </div>
    )
}