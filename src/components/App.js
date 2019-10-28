import React, { Component } from 'react';
// import { SpriteIcon } from '/src/components/SpriteIcon';
import { SpriteIcon } from '@components';

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>

                {/* SVG sprites */}
                <SpriteIcon
                  iconId="spr-auto"
                  className="auto"
                  width={200}
                  height={100}
                  // spr-auto is required
                />

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
