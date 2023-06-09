import {Fragment} from 'react';

import {Task_1} from "./task_1/Task_1";

export type UserType = {
  [key: string]: { name: string, id: string }
};

const DATA_7: UserType[] = [
  {u1: {name: 'Gleb', id: '1'}},
  {u2: {name: 'Dima', id: '2'}},
  {u3: {name: 'Svetlana', id: '3'}},
  {u4: {name: 'Artur', id: '4'}},
  {u5: {name: 'Vera', id: '5'}},
  {u6: {name: 'Vlad', id: '6'}},
];

export const WednesdayExtraLesson02Task1 = () => {
  return (
    <Fragment>
      <Task_1 />
    </Fragment>
  );
};
