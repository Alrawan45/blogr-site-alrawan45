import React from 'react'
import classes from './Footer.module.css'

const footer=()=>{
    return(
        <div className={classes.Footer}>
            <div className={classes.FooterBrand}>
                <h3><a href='#logo'>Blogr</a></h3>
            </div>
            <div className={classes.FooterLink}>
                <div>
                    <p>Product</p>
                    <ul>
                        <li>Overview</li>
                        <li>Pricing</li>
                        <li>Marketplace</li>
                        <li>Features</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div>
                    <p>Company</p>
                    <ul>
                        <li>About</li>
                        <li>Team</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div>
                    <p>Connect</p>
                    <ul>
                        <li>Contact</li>
                        <li>Newsletter</li>
                        <li>Linkedin</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
export default footer;