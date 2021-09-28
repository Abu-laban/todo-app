import React from "react";
import { Navbar, Button, Alignment } from "@blueprintjs/core";
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <div>
            <Navbar>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>To-Do</Navbar.Heading>
                    <Navbar.Divider />
                    <a href="/">
                        <Button icon="home" text="Home"></Button>
                    </a>
                    <Navbar.Divider />
                    <a href="/settings">
                        <Button icon="settings" text="Settings"></Button>
                    </a>
                </Navbar.Group>
            </Navbar>
        </div>
    );
}

export default Header;