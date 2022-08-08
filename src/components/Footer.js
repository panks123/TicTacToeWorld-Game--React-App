import React from 'react'
import './styles/Footer.css'
export default function Footer() {
  return (
    <>
        <div className="footer">
            <div className="footer-item" id="item1">
                <img id="me" src={process.env.PUBLIC_URL+"/images/me1.png"} alt="me"/>
                {/* <!-- <span id="me-text">Pankaj Kumar</span> --> */}
            </div>

            <div className="footer-item" id="item2">Pankaj Kumar</div>

            <div className="footer-item" id="item3">© All Rights Reserved</div>

            <div className="footer-item" id="item4">
                <a href="https://www.linkedin.com/in/pankaj-kumar-353358120/" rel="noreferrer" target="_blank">
                    <img src={process.env.PUBLIC_URL+"/images/linkedin.png"} alt= "linked_in"/>
                </a>
                <a href="https://github.com/panks123" target="_blank" rel="noreferrer">
                    <img src={process.env.PUBLIC_URL+"/images/github.png"} alt= "github"/>
                </a>
            </div>
        </div>
    </>
  )
}
