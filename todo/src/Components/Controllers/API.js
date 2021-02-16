import React from 'react';
import axios from 'axios';
const URL = 'http://localhost:8080';

export function fetchData()
{
    return axios.get(URL+'/select');
}

