import React from 'react'
import useStyles from './styles';
import {Box, Button} from '@material-ui/core';
import {icons, images} from '../../assets';

function HeaderComponent() {
    const classes = useStyles()
    return (
                <div className={classes?.divTitle}>
                    <img src={icons?.transfer} className={classes?.iconTransfer}/>
                    <div className={classes?.divText}>
                        <p className={classes?.txtName}>CONVERT DOCUMENT APPLICATION</p>
                        <p className={classes?.txtDescription}>Online File Conversion</p>
                    </div>
                    {/* <div className={classes?.divSignIn}>
                        <Button className={classes?.btnSignIn} >
                            Sign In
                        </Button>
                        <Button className={classes?.btnSignUp} >
                            Sign Up
                        </Button>
                    </div> */}
                </div>
    )
}

export default HeaderComponent
