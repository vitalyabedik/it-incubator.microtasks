import React from 'react';
import {dataState, PagesType} from '../dataState/dataState';
import {useParams} from 'react-router-dom';
import {Error404} from './Error404';

type PropsType = {
    pages: Array<PagesType>
}

export const Page = (props: PropsType) => {
    const params = useParams()
    const page = props.pages[Number(params.id)]
    console.log(typeof params.id) // string
    console.log(props.pages[Number(params.id)])

    return (
        <div>
            {page ?
                <div>
                    <div>{props.pages[Number(params.id)].heading}</div>
                    <div>{props.pages[Number(params.id)].about}</div>
                </div>
                :
                <Error404/>
            }
        </div>
    );
};

