import React from 'react'
import classes from './LastContent.module.css'
import image from '../../../assets/illustration-editor-desktop.svg'

const lastContent=()=>{
    return(
            <div className={classes.ContentFlex}>
                 <div className={classes.ContentImage}><img src={image} alt='alter-img'/></div>
                <div className={classes.ContentText}>
                    <div>
                        <h3>Introducing an extensible editor</h3>
                        <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</p>
                    </div>
                    <div>
                        <h3>Introducing an extensible editor</h3>
                        <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</p>
                    </div>
                </div>
            </div>
    )
}
export default lastContent;