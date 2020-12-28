import React, { Component } from 'react';
import ProjectItem from './ProjectItem.js';
import SectionHeading from './SectionHeading.js';
import FeaturedProject from './FeaturedProject.js';
import Slider from "react-slick";
import Fade from 'react-reveal/Fade';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ProjectShowcase extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 5000,
            cssEase: "ease-out"
        };

        return(
            <Fade duration={1500} bottom>
                <div className="containerAG"  id="mywork">
                    <div>
                        <SectionHeading heading={'Some Things I\'ve Built'}></SectionHeading>
                        <Slider {...settings} style={slider}>
                            {this.props.featuredProjects.map((project, index) => {
                                return(
                                    <FeaturedProject alignment={project.align} title={project.name} caption={project.caption} tech={project.tech} gitRepo={project.gitRepo} image={project.image} mobileImage={project.mobileImage} selectedProject={this.props.selectedProject}></FeaturedProject>
                                )
                            })}
                        </Slider>

                       <div style={container} >
                            <div className="ui three doubling cards" style={otherProjectContainer}>
                                <ProjectItem projects={this.props.projects} selectedProject={this.props.selectedProject}></ProjectItem>
                            </div>
                       </div>
                    </div>
                </div>
            </Fade>
        )
    }
};

const slider = {
    maxWidth: '700px',
    width: 'auto',
    overflow: 'visible'
}

const container = {
    width: '100%',
    height: 'auto',
}

const otherProjectContainer = {
    position: 'relative',
    display: 'flex',
    maxWidth: '700px',
    width: 'auto',
    marginTop: '30px',
    marginLeft: 'auto',
    marginRight: 'auto'
}

export default ProjectShowcase;
