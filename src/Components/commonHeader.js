import React from 'react';
// eslint-disable-next-line no-unused-vars
import '../Styling/header.css'
import IGIcon from '../Icons/ig_icon_color.png'
import FBIcon from '../Icons/fb_icon_color.png'

const CommonHeader = () => {

    return (
        <div >
            <div className="header-grey-background">
                <h1 className="sample-font">CAFE sample</h1>
                <div className="social-media-icons">
                    <img  className="header-icon-background" src={IGIcon} alt="IGIcon"/>
                    <img  className="header-icon-background" src={FBIcon} alt="IGIcon"/>
                </div>
                
            </div>
        </div>

    )
}

export default CommonHeader;

