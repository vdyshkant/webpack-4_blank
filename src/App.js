import React, { Component } from 'react';

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header></header>

                <h1>yet another title</h1>

                <hr className="empty" />

                {/* change 'symlink' to 'static': */}
                <img width="100" src="/symlink/01.png" alt="test-img-01" />
                <img width="100" src="symlink/02.jpg" alt="test-img-02" />

                <main></main>

                <footer></footer>
            </React.Fragment>
        )
    }
}
