import React, { Component } from 'react';
import "./css/Project.css";

class Project extends Component {
    render() {
        let direction = this.props.id % 2 === 0 ? "left" : "right";

        return (
            <div className={"Project project" + this.props.id + " " + this.props.lang + " " + direction}>
                <div className="project-header">
                    <h2>{this.props.title}</h2>
                </div>
                <div className="project-desc">
                    {this.props.children}
                </div>

            </div>
        );
    }
}

export default Project;
