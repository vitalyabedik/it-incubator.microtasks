import React, {useEffect, useRef, useState} from 'react';

import {SuperButton} from './components/SuperButton';
import {SuperInput} from './components/SuperInput';

type TodosType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

export function MondayExtra2() {
    // неправильная структура проекта, нужно
    const [todos, setTodos] = useState<TodosType[]>([])

    let myRef = useRef<HTMLInputElement>(null)

    const fetchRequest = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((json) => setTodos(json));
    }

    useEffect(() => {
        fetchRequest()
    }, [])

    const showTodosHandler = () => {
        fetchRequest()
    }

    const hideTodosHandler = () => {
        setTodos([])
    }

    const addTaskHandler = () => {
           if (myRef.current) {
               const newTodo: TodosType = {
                   userId: 5,
                   id: todos.length + 1,
                   title:'123',
                   completed: false
               }
               setTodos([newTodo, ...todos])
               myRef.current.value = ''
           }
    }

    return (
        <div className="App">
            <div>
                <SuperInput title={myRef} />
                <SuperButton name={'+'} callback={addTaskHandler}/>
            </div>
            <div>
                <SuperButton name={'Show me todos'} callback={showTodosHandler}/>
                <SuperButton name={'Hide todos'} callback={hideTodosHandler}/>
            </div>
            <ul>
                {todos.map(todo => {
                    return (
                        <li key={todo.id}>
                            <span>{todo.id}</span>
                            <span> _ {todo.userId}</span>
                            <span> _ {todo.title}</span>
                            <input type="checkbox" checked={todo.completed}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}


//===========================================================


// import React, {useEffect, useState} from 'react';
//
// import {SuperButton} from './components/SuperButton';
// import {SuperInput} from './components/SuperInput';
//
// type TodosType = {
//     userId: number
//     id: number
//     title: string
//     completed: boolean
// }
//
// export function MondayExtra2() {
//     // неправильная структура проекта, нужно
//     const [todos, setTodos] = useState<TodosType[]>([])
//
//     const [title, setTitle] = useState('')
//
//     // поменять useState на useRef
//     // const [title, setTitle] = useRef('')
//
//     const fetchRequest = () => {
//         fetch('https://jsonplaceholder.typicode.com/todos')
//             .then((response) => response.json())
//             .then((json) => setTodos(json));
//     }
//
//     useEffect(() => {
//         fetchRequest()
//     }, [])
//
//     const showTodosHandler = () => {
//         fetchRequest()
//     }
//
//     const hideTodosHandler = () => {
//         setTodos([])
//     }
//
//     const addTaskHandler = () => {
//         // возьми title и отправь setTodos(title)
//         const newTodo: TodosType = {
//             userId: 5,
//             id: todos.length + 1,
//             title: title,
//             completed: false
//         }
//         setTodos([newTodo, ...todos])
//         setTitle('')
//     }
//
//     return (
//         <div className="App">
//             <div>
//                 {/*<input type="text"/>*/}
//                 {/*<button>+</button>*/}
//
//                 <SuperInput title={title} setTitle={setTitle}  />
//                 <SuperButton name={'+'} callback={addTaskHandler}/>
//             </div>
//             <div>
//                 {/*<button onClick={showTodosHandler}>Show me todos</button>*/}
//                 {/*<button onClick={hideTodosHandler}>Hide todos</button>*/}
//
//                 <SuperButton name={'Show me todos'} callback={showTodosHandler}/>
//                 <SuperButton name={'Hide todos'} callback={hideTodosHandler}/>
//             </div>
//             <ul>
//                 {todos.map(todo => {
//                     return (
//                         <li key={todo.id}>
//                             <span>{todo.id}</span>
//                             <span> _ {todo.userId}</span>
//                             <span> _ {todo.title}</span>
//                             <input type="checkbox" checked={todo.completed}/>
//                         </li>
//                     )
//                 })}
//             </ul>
//         </div>
//     );
// }


