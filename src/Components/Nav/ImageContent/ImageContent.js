import React from 'react'
import classes from './ImageContent.module.css'
import ImageOne from '../../../assets/img1.png'


const imageContent=()=>{
    return(
        <div className={classes.ImageContent}>
            <div className={classes.ImageDiv}>
                <img src={ImageOne} alt="phone-img"/>
                <img src={ImageOne} alt="phone-img"/>
            </div>
            <div className={classes.ImageDetails}>
                <h2>State of the Art Infrastructure</h2>
                <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</p>
            </div>

        </div>
    )
}
export default imageContent;