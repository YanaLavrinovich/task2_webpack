import React from 'react'
import Image from './Image.js'
import Text from "./Text";
import Link from "./Link";

class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <Image/>
                <Text/>
                <Link/>
            </header>
        )
    }
}

export default Header