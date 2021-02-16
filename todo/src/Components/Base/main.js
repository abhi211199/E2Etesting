import React, { useEffect } from 'react';
import './main.css';
import Card from '../Card/card';
import { fetchData } from '../Controllers/API'

export default function BaseApp()
{
    const [data,setData] = React.useState([]);

    async function getData()
    {
        const resp = await fetchData();
        console.log(resp)
        setData(resp.data);
    }

    useEffect(()=>getData(),[]);

    return(
        <div id="container">
            <div id="pending">
                {
                    data.map(val => !val.status ? <Card summary={val.summary} note={val.note} status={val.status} /> : '' )
                }
            </div>
            <div id="completed">
                {
                    data.map(val => val.status ? <Card summary={val.summary} note={val.note} status={val.status} /> : '' )
                }
            </div>
        </div>
    )
}