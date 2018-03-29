import React from 'react';

export default props => (
    <div>
        <h2>Família</h2>
        { React.cloneElement(props.children, {...props}) }
        {/* { React.children.map() } */}
    </div>
)