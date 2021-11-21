import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
    Stepper, Step, StepButton, StepLabel, StepConnector,
    Typography,Button
} from '@material-ui/core';

import Check from '@material-ui/icons/Check';
import Backup from '@material-ui/icons/Backup';
import CompareArrows from '@material-ui/icons/CompareArrows';
import GetApp from '@material-ui/icons/GetApp';
import useStyleStep ,{useStepIconStyles} from './styleStep';
import {defaultStep} from './defaultStep';
import InputUpload from './InputUpload';
import SelectConversion from './SelectConversion';

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

function StepComponent(props) {
    const {
        onChangeFile, optionsTool, fileInput,isActive,
        conversionSelected, onSelectConversion
    } = props
  const classes = useStyleStep();

  return (
    <div className={classes.containerSteps}>
      <Stepper alternativeLabel activeStep={isActive} connector={<ColorStepConnector />}>
        {defaultStep.map((item) => (
          <Step key={item?.label} className={classes?.stepItem}>
            <StepIcon>{StepIcon}</StepIcon>
            <div className={classes?.stepIcon}>
            {
               item?.name && item?.name === 'upload' && 
                <InputUpload
                    onChangeFile={onChangeFile}
                />
            }
            {
                item?.name && item?.name ==='convert' && 
                <SelectConversion
                    isDisabled = {isActive<1}
                    optionsTool={optionsTool}
                    onSelectConversion={onSelectConversion}
                    conversionSelected = {conversionSelected}
                />
            }
            {
                item?.name && item?.name ==='download' && 
                <Button 
                  disabled={isActive < 1 || (isActive === 1 && !conversionSelected?.value)}
                  className={clsx(
                      classes?.btnDownload, 
                      {
                  [classes.btnDisable]: isActive < 1 || (isActive === 1 && !conversionSelected?.value && conversionSelected?.value!==0),
                })}
                >
                    <p className={classes.txtDownload}>Download</p>
                </Button>
            }
            </div>
            </Step>
        ))}
      </Stepper>
      <div>
        {/* {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default StepComponent


function StepIcon(props) {
    const classes = useStyleStep();
    const { active, completed } = props;
  
    const icons = {
      1: <Backup />,
      2: <CompareArrows />,
      3: <GetApp />,
    };
  
    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed,
        })}
      >
        {icons[String(props.icon)]}
      </div>
    );
  }


const ColorStepConnector = withStyles({
    alternativeLabel: {
      top: 22,
    },
    active: {
      '& $line': {
        backgroundImage:
          'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
      },
    },
    completed: {
      '& $line': {
        backgroundImage:
          'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
      },
    },
    line: {
      height: 3,
      border: 0,
      backgroundColor: 'transparent',
      borderRadius: 1,
    },
  })(StepConnector);
  