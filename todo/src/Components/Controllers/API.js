import React from 'react';
import axios from 'axios';

const URL = 'http://localhost:8080';

export function fetchData()
{
    return axios.get(URL+'/select');
}

export function deleteData(id)
{
    // return axios.delete(URL+'/'+id).then(()=>BaseApp.getData());
}

export function changeStatus(props)
{
    return axios.patch(URL+'/'+props.id,{
        summary: props.summary, 
        note: props.note,
        status: !props.status
    });
}