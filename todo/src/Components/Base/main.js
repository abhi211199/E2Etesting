import React from 'react';
import './main.css';
import Card from '../Card/card';

export default function BaseApp()
{
    return(
        <div id="container">
            <div id="pending">
                <Card note="aa" summary="aaa"/>
                <Card /><Card /><Card />
            </div>
            <div id="completed">bb</div>
        </div>
    )
}