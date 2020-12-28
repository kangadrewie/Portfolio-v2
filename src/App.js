import './app.css';
import React, { Component } from 'react';
import Navigation from './components/navigation.js';
import BurgerIcon from './components/Menu.js';
import LandingDialog from './components/landingPage.js';
import SocialMedia from './components/SocialMediaSidebar.js';
import AboutMe from './components/AboutMe.js';
import Work from './components/WorkSection.js';
import ProjectShowcase from './components/ProjectShowcase.js';
import ProjectModal from './components/ProjectModal.js';
import ContactSection from './components/ContactSection.js';
import Footer from './components/Footer.js';

require('dotenv').config();


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <React.Fragment>
                <div>
                    <Navigation></Navigation>
                    <BurgerIcon></BurgerIcon>
                    <LandingDialog></LandingDialog>
                </div>
                <div style={maxWidth}>
                    <SocialMedia></SocialMedia>
                    <AboutMe></AboutMe>
                    <Work></Work>
                    <ContactSection></ContactSection>
                    <Footer></Footer>
                </div>
            </React.Fragment>
        );
    }
}

const maxWidth = {
    position: 'relative',
    maxWidth: '700px',
    margin: '0 auto'
}

export default App;
