import React from 'react';
import './Footer.scss';

// logo.

// import { FaFacebookSquare, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa';

const Company_name = "VAIA Finance"
const Footer_text = "Copyright 2014-2020. All Rights Reserved. " + Company_name

function Footer() {
  return <div className="bg-white fixed bottom-0 pv3 justify-center flex w-100 f6 fw5 black-50">{ Footer_text }</div>;
}

export default Footer;
