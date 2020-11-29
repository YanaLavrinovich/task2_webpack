import React from 'react'
import logo from "../logo.svg";

class Image extends React.PureComponent {
    render() {
        return (
            <img src={logo} className="App-logo" alt="logo"/>
        )
    }
}

export default Image