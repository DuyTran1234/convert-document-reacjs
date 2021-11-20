import React from 'react'
import {icons, images} from '../../assets';
import useStyles from './styles';
import {Box, Button} from '@material-ui/core';
import HeaderComponent from './HeaderComponent';
import StepComponent from './StepComponent';

function HomeScreen(props) {
    const classes = useStyles()
    return (
        <div className={classes?.container}>
            <div className={classes?.divTop}>
                <HeaderComponent/>
                <div className={classes?.divTextEasy}>
                    <p className={classes?.txtTitle}>File conversion made</p>
                    <p className={classes?.txtEasy}>easy</p>
                </div>
                <p className={classes?.txtSupport}>Support documents, images, sounds, media file,...</p>
                <StepComponent
                
                />
            </div>
            <div>

            </div>
        </div>
    )
}

export default HomeScreen
