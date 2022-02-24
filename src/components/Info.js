import React from "react";
import linkImage from "../resources/linkedin.png";
import emailImage from "../resources/email.png";

export default function Info(){


    return (
        <div className="info--stuff">
            <img className="info--image" src="https://media-exp1.licdn.com/dms/image/C4D03AQEPG4RvUGNQtQ/profile-displayphoto-shrink_800_800/0/1605528889559?e=1651104000&v=beta&t=rKLf001UmRwho-5uUg8HaVtd-1PhhA9hpFJijvVoXec" />
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
