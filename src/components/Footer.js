import React from "react";
import twitterLogo from "../resources/Twitter.png";
import facebookLogo from "../resources/Facebook.png";
import instagramLogo from "../resources/Instagram.png";
import githubLogo from "../resources/GitHub.png";
import linkedinLogo from "../resources/LinkedinIcon.png";


export default function Footer(){
    return (
        <div className="footer--body">
            <a href="https://twitter.com/"><img src={twitterLogo}/></a>
            <a href="https://www.facebook.com/"><img src={facebookLogo}/></a>
            <a href="https://www.instagram.com/"><img src={instagramLogo}/></a>
            <a href="https://www.linkedin.com/"><img src={linkedinLogo}/></a>
            <a href="https://github.com/ViNguyen15"><img src={githubLogo}/></a>            
        </div>
        
    )
}