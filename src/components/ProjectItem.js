import React, { Component } from 'react';

class ProjectItem extends Component {
    render() {
        return this.props.projects.map((project) => (
            <div className="card" id={project.gitRepo} onClick={this.props.selectedProject}>
                <div className="image">
                    <img style={image} className="imageBrightness" src={process.env.PUBLIC_URL + project.image} alt="" />
                </div>
                <div>
                    <i className="big folder open outline icon folderIcon" style={iconFolder}></i>
                    <div style={title} className="folderTitle">{project.name}</div>
                    <div style={desc} className="folderDesc">{project.caption}</div>
                    <i className="large share square icon shareIcon" style={iconShare}></i>
                </div>
            </div>
        ))
    }
}

const image = {
    overflow: 'hidden',
    zIndex: '-10'
}

const iconFolder = {
    position: 'absolute',
    top: '10%',
    left: '10%',
    color: 'white'
}

const iconShare = {
    color: 'white',
    position: 'absolute',
    right: '10%',
    bottom: '15%'
}

const title = {
    position: 'absolute',
    top: '24%',
    right: '15px',
    fontFamily: 'Source Sans Pro, sans-serif',
    fontWeight: '800',
    fontSize: '1.8em',
    color: 'white',
    textAlign: 'right',
    lineHeight: '1.2em',
}

const desc = {
    position: 'absolute',
    top: '45%',
    right: '15px',
    left: '23px',
    fontFamily: 'Source Sans Pro, sans-serif',
    fontWeight: '100',
    fontSize: '1em',
    color: 'white',
    textAlign: 'right',
    lineHeight: '1.2em',
}

export default ProjectItem;
