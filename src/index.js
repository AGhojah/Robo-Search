import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<div>
                    <Card name={"Mike"} email={"Mike@gmail.com"} id={12}/>
                    <Card name={"Ralph"} email={"Ralph@gmail.com"} id={22}/>
                    <Card name={"Boris"} email={"Boris@gmail.com"} id={15}/>
                    <Card name={"Sa'ed"} email={"Sa'ed@gmail.com"} id={42}/>
                </div> 
    
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
