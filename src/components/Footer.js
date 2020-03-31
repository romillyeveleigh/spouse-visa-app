import React from "react";
import {Navbar} from 'react-bootstrap';

const Footer = () => {

    return (
        <Navbar fixed="bottom" bg="light" variant="light" className="container-fluid-nav">
        © <div className="footer-year"> &nbsp;2020&nbsp;</div> | Spouse Visa Helper |&nbsp;<a href="mailto:info@spousevisahelper.com?Subject=Hello" target="_top">✉️</a>
        </Navbar>
    );
};

export default Footer;