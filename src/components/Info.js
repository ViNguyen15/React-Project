import React from "react";
import linkImage from "../resources/linkedin.png";
import emailImage from "../resources/email.png";
import portrait from "../resources/Vi.jpg"

export default function Info(){


    return (
        <div className="info--stuff">
            <img className="info--image" src={portrait} />
            <div className="info--name">Vi Nguyen</div>
            <div className="info--title">Full Stack Developer</div>
            <div className="info--link">ViNguyen.website</div>

            <div className="info--buttons">

                <a href="mailto: jimmywin42@gmail.com">
                    
                    <button className="button--email">
                    <img className="icon--email" src={emailImage}/>
                    Email
                    </button>
                </a>
        
                <a href="https://www.linkedin.com/in/vinguyen-ggc/" >
                    
                    <button className="button--linkedin" >
                        <img className="icon--linkedin" src={linkImage}/>
                        LinkedIn
                    </button>
                </a>
            </div>

        </div>
    )
}
