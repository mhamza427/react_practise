import React from 'react'

const Greetings = () =>{
    return React.createElement('div', {id: 'Greeting', style: {color: 'red'}}, 
    React.createElement('h1', null, 'Hello World'))
}
export default Greetings