import React, { Component } from 'react';
import SectionHeading from './SectionHeading.js';
import SectionParagraph from './SectionParagraph.js';
import ActionButton from './btnAction.js';

class ContactSection extends Component {
    render() {

        const para = "If you’d like to get in touch with me, whether to hire me, request additional contact information, or just to say hi, you can contact me using the big orange button below!"

        return(
            <div id="contactme" style={container} className="containerAG">
                <div>
                    <SectionHeading heading={'Get In Touch'}></SectionHeading>
                    <SectionParagraph para={para}></SectionParagraph>
                    <ActionButton btnCaption={'Get In Touch'}></ActionButton>
                </div>
            </div>
        )
    }
}
const container = {
    paddingBottom: '120px'
}


export default ContactSection;
