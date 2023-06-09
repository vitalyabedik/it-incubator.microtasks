// wednesday 1.1
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// import {Provider} from 'react-redux';
// import {createRoot} from "react-dom/client";
// import WednesdayExtraLesson02Task2 from './components/Wednesday/wednesday-extra-lesson-01/1.1/WednesdayExtraLesson02Task2';
// import {store} from './components/Wednesday/wednesday-extra-lesson-01/1.1/state/store';
//
// const container = document.getElementById('root') as HTMLElement
// const root = createRoot(container);
// root.render(
//     <Provider store={store}>
//         <WednesdayExtraLesson02Task2/>
//     </Provider>
// );


// --------------------------------------------------------------------------------
// wednesday 1.2

import React from 'react';


import {Provider} from 'react-redux';
import {createRoot} from "react-dom/client";
import { RootStateOrAny } from '../src/components/Wednesday/wednesday-extra-lesson-01/1.2/store';
import {store} from './components/Wednesday/wednesday-extra-lesson-01/1.2/store';
import App from './App';


const container = document.getElementById('root') as HTMLElement
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);






