import React from 'react';

type MapComponentType = {
    students: Array<StudentType>
    // students: StudentType[]
}

type StudentType = {
    id: number
    name: string
    age: number
}

export const MapComponent: React.FC<MapComponentType> = (props) => {
    const topCars = [
        {id: 1, manufacturer: 'BMW', model: 'm5cs'},
        {id: 2, manufacturer: 'Mercedes', model: 'e63s'},
        {id: 3, manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <>
            <ul>
                {props.students.map(student => {
                    // debugger
                    return (
                        <li key={student.id}>
                            <span>{student.name}</span>
                            <span> age: {student.age}</span>
                        </li>
                    )
                })}
            </ul>
            <table>
                <tr>
                    {topCars.map(manufact => {
                        return (
                            <th key={`manufacturer + ${manufact.id}`}>{manufact.manufacturer}</th>
                        )
                    })}
                </tr>
                <tr>
                    {topCars.map(model => {
                        return (
                            <th key={`manufacturer + ${model.id}`}>{model.model}</th>
                        )
                    })}
                </tr>
            </table>
        </>
    )
}