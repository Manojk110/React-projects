import React from 'react'

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    
    imgPath:
      'https://assets.tatacliq.com/medias/sys_master/images/52240703684638.jpg',
  },
  {
   
    imgPath:
      'https://assets.tatacliq.com/medias/sys_master/images/52240703881246.jpg',
  },
  {
  
    imgPath:
      'https://assets.tatacliq.com/medias/sys_master/images/52240704012318.jpg',
  },
  {
    
    imgPath:
      'https://assets.tatacliq.com/medias/sys_master/images/52240704274462.jpg',
  },
  {
    
    imgPath:
      'https://assets.tatacliq.com/medias/sys_master/images/52240703815710.jpg',
  },
  {
    
    imgPath:
      'https://assets.tatacliq.com/medias/sys_master/images/52240703946782.jpg',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 1500, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 500,
                  display: 'block',
                  maxWidth: 1500,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default function Tata(){
 




{/*new*/}

  return (
    <div>
      <center>
        <h1 className='heading' >Blockbuster Deals</h1>
      </center>
<SwipeableTextMobileStepper/>
      <div className='deal'>
        <img className='img' src='https://assets.tatacliq.com/medias/sys_master/images/51869116956702.jpg'/>
        <img className='img' src='https://assets.tatacliq.com/medias/sys_master/images/51869117022238.jpg'/>
      </div>
      <div className='deal'>
        <img className='img' src='https://assets.tatacliq.com/medias/sys_master/images/51869117087774.jpg'/>
        <img className='img' src='https://assets.tatacliq.com/medias/sys_master/images/51869117153310.jpg'/>
      </div>
      <div className='deal'>
        <img className="img" src='https://assets.tatacliq.com/medias/sys_master/images/51869117284382.jpg'/>
        <img className='img' src='https://assets.tatacliq.com/medias/sys_master/images/51869117349918.jpg'/>
      </div>
      <div className='deal'>
        <img className='img' src='https://assets.tatacliq.com/medias/sys_master/images/51869117415454.jpg'/>
        <img className='img' src='https://assets.tatacliq.com/medias/sys_master/images/51869117480990.jpg'/>
      </div>
      <div className='deal'>
        <img className='img' src='https://assets.tatacliq.com/medias/sys_master/images/51869120135198.jpg'/>
        <img className='img' src='https://assets.tatacliq.com/medias/sys_master/images/51869117612062.jpg'/>
      </div>
      <div className='deal'>
        <img className='img' src='https://assets.tatacliq.com/medias/sys_master/images/51869117972510.jpg'/>
        <img className='img' src='https://assets.tatacliq.com/medias/sys_master/images/51869118103582.jpg'/>
      </div>
    </div>
  )
}
