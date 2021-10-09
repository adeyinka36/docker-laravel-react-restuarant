import React from 'react';
import ReactDOM from 'react-dom';

function Main() {
    return (
        <div className="container">
            <h1>Welcome to this app</h1>
        </div>
    );
}

export default Main;

if (document.getElementById('app')) {
    ReactDOM.render(<Main />, document.getElementById('app'));
}
