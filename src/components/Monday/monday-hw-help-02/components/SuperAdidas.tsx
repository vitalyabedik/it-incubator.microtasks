import React from 'react';

type PropsType = {
    tasks: InType[]
    children?: React.ReactNode
}

type InType = {
    id: number
    title: string
    isDone: boolean
}

export const SuperAdidas: React.FC<PropsType> = (props) => {
    const {tasks, children} = props

    return (
        <div>
            <ul>
                {tasks.map(t => {
                    return (
                        <li key={t.id}>
                            <span>{t.id}</span>
                            <span>{t.title}</span>
                            <input type="checkbox" checked={t.isDone}/>
                        </li>
                    )
                })}
            </ul>
            <div>{children}</div>
            <hr/>
        </div>
    )
}