type PropsType = {
    name: string
    callback: () => void
}

 export const SuperButton = (props: PropsType) => {
     const onClickHandler = () => {
         props.callback()
     }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}