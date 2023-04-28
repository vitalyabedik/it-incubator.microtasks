import React from 'react';
import {dataState, PagesType} from '../dataState/dataState';
import {useParams} from 'react-router-dom';

type PropsType = {
    pages: Array<PagesType>
}

export const Page = (props: PropsType) => {
    const params = useParams()
    console.log(typeof params.id) // string
    console.log(props.pages[Number(params.id)])

    return (
        <div>
            // если
            <div>{props.pages[Number(params.id)].heading}</div>
            <div>{props.pages[Number(params.id)].about}</div>
        </div>
    );
};

