import React from 'react';
import {useNavigate} from 'react-router-dom';

type ContentTypeProps={
    heading:string,
    pages:string
}

export const Content = (props:ContentTypeProps) => {
    const{heading, pages}=props

    const navigate = useNavigate()

    const onClickMainHandler = () => {
        navigate('/page/0')
    }

    const onClickBackHandler = () => {
        navigate(-1)
    }

    return (
        <div>
            <div>{heading}</div>
            <div>{pages}</div>

            <div>
                <button onClick={onClickBackHandler}>НАЗАД ПО ИСТОРИИ</button>
                <button onClick={onClickMainHandler}>ГЛАВНАЯ СТРАНИЦА</button>
            </div>
        </div>
    );
};

