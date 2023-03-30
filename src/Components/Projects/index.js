import React from "react";
import Project from "./project";
import projectData from "../../projectData.json";


const Projects = () => {

    return (
        <div>
            <div className="container mt-2 min-vh-100 d-flex align-items-center">
                <div className="row">
                    <h2 className="text-center m-1 p-1 fw-bold"><u>Projects</u></h2>
                    {/* {console.log(typeof _package_json__WEBPACK_IMPORTED_MODULE_2__)}; */}

                    {projectData.map(item => {
                        return <Project name={item.name}
                            image={item.image}
                            stack1={item.stack[0]}
                            stack2={item.stack[1]}
                            stack3={item.stack[2]} />
                    })}
                </div>
            </div>

        </div>
    );

}

export default Projects;