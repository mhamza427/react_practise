import React from "react";

const SuperHero = (props) => {
    console.log(props)
    return React.createElement(
        'div',
        null,
        React.createElement('h1', null, 'Hello, ',props.name, ' AKA ',props.supername) )
}

export default SuperHero