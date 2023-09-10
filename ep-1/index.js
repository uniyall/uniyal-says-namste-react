import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', {id : 'heading'}, 'The Real Heading!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

const nestedDivs = React.createElement('div', {}, [
    React.createElement('div', {id : '1'}, 
    [React.createElement('h1', {}, 'I am an h1'),
    React.createElement('h2', {}, 'I am an h2')]), 
    React.createElement('div', {id : '2'}, 
    [React.createElement('h1', {}, 'I am an h1'),
    React.createElement('h2', {}, 'I am an h2')])
]);

root.render(nestedDivs);