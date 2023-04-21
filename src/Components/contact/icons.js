import React from "react";
import github from "./../../images/github.png";
import linked from "./../../images/ln.png";
import email from "./../../images/email.png";
import cv from "./../../images/CV.png";
import "./icons.css"


const Icons = () => {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-3">
                    </div>
                    <div class="col-6 m-1 p-1 d-flex justify-content-center">
                        <a href="https://www.linkedin.com/in/abayomibalogun/" target="_blank" rel="noreferrer">
                            <img class="icon m-1 p-1" src={linked} alt="LinkedIn"></img>
                        </a>
                        <a href="https://github.com/abayomi2010" target="_blank" rel="noreferrer">
                            <img class="icon m-1 p-1" src={github} alt="GitHub"></img>
                        </a>
                        <a href="mailto: abayomibalogun2010@gmail.com" target="_blank" rel="noreferrer">
                            <img class="icon m-1 p-1" src={email} alt="email"></img>
                        </a>
                        <a href="https://drive.google.com/file/d/1Elncb-kdpg8exiQCH1Ib81CqC6f3_ZYG/view?usp=share_link" rel="noreferrer"
                            target="_blank">
                            <img class="icon m-1 p-1" src={cv} alt="CV"></img>
                        </a>
                    </div>
                    <div class="col-3">
                    </div>
                </div>

                <div class="row">
                    <div class="col-3">
                    </div>
                    <div class="col-6 m-1 p-1 d-flex justify-content-center">
                        <h5 class="fw-bold">© 2023 Abayomi Balogun. All rights reserved. </h5>
                    </div>
                    <div class="col-3">
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Icons;