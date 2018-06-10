import React from 'react'

export default class Contact extends React.Component{
    render(){
        return(
            <div className="contact">
                <div className="contact_title">Contact us</div>
                <div className="text_contact contact_bg">
                    <h3>Contact aBlueLemon Productions under:</h3>
                    <p>Phone: 0049-(0)1782871785</p>
                    <p>E-mail: <a 
                        href="mailto:info@abluelemon.com?subject=Mail from aBlueLemon Site"
                        className="link">info@abluelemon.com</a></p>
                </div>
            </div>
        )
    }
}