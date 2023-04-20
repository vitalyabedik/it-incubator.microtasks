import React, {useState} from 'react';

import './MondayExtra2Hw.css'

import {SuperButton} from './components/SuperButton';
import {SuperAdidas} from './components/SuperAdidas';


export const MondayExtra2Hw = () => {
    const tasks = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ]

    return (
        <div>
            {/*<SuperButton callBack={()=>{}} color={'red'} /> */}
            <SuperButton callBack={()=>{}} color={'red'} >RED SUPER BUTTON</SuperButton>
            <SuperButton callBack={()=>{}} > SUPER BUTTON </SuperButton>
            <SuperButton callBack={()=>{}} disabled > DISABLED SUPER BUTTON </SuperButton>

            <SuperAdidas tasks={tasks}/>
            <SuperAdidas tasks={tasks}>
                <SuperButton callBack={()=>{}} color={'red'} >RED SUPER BUTTON</SuperButton>
                <SuperButton callBack={()=>{}} > SUPER BUTTON </SuperButton>
                <input type="text"/>
                <input type="text"/>
                <div>info</div>
                <div>info</div>
                <div>info</div>
                <div>info</div>
                <div>info</div>
                <div>info</div>
            </SuperAdidas>
            <SuperAdidas tasks={tasks}>
                <SuperButton callBack={()=>{}} color={'red'} >RED SUPER BUTTON</SuperButton>
                <SuperButton callBack={()=>{}} > SUPER BUTTON </SuperButton>
                <SuperButton callBack={()=>{}} disabled > DISABLED SUPER BUTTON </SuperButton>
                <div>info</div>
                <div>info</div>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
            </SuperAdidas>
        </div>
    )
}