import {ChangeEvent, LegacyRef} from 'react';

type PropsType = {
    title: LegacyRef<HTMLInputElement> | undefined
}

export const SuperInput = (props: PropsType) => {
        const onChangeHandler = () => props.title

    return (
            <input ref={props.title} onChange={onChangeHandler} />
        )
}









//========================================================================================

// import {ChangeEvent, useState} from 'react';
//
// type PropsType = {
//     title: string
//     setTitle: (title: string) => void
// }
//
//
// export const SuperInput = (props: PropsType) => {
//     // const [title, setTitle] = useState('')
//
//     const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         props.setTitle(e.currentTarget.value)
//     }
//
//     return (
//         <input  value={props.title} onChange={onChangeHandler}/>
//     )
// }