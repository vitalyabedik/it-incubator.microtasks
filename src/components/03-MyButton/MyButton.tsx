import React, {MouseEvent} from 'react';

export const MyButton = () => {
    // const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('hello Im Vasya!')
    // }
    //
    // const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('hello Im Ivan!')
    // }

    const onClickHandler = (name: string) => {
        console.log(name)
    }

    return (
        <div>
            {/*<button onClick={(event) => {console.log('hello')}}>MyYouTubeChannel-1</button>*/}
            {/*<button onClick={myFirstSubscriber}>MyYouTubeChannel-1</button>*/}

            <button onClick={(event:MouseEvent<HTMLButtonElement>) => onClickHandler('Vasya')}>MyYouTubeChannel-1</button>
            <button onClick={(event:MouseEvent<HTMLButtonElement>) => onClickHandler('Ivan')}>MyYouTubeChannel-2</button>

        </div>

    )
}