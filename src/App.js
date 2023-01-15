import { Button, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';
import { SideBar, StepOne } from './components';
import StepThree from './components/StepThree';
import StepTwo from './components/StepTwo';

const FormPanel = styled('div')({
  width: 940,
  height: 600,
  backgroundColor: 'white',
  borderRadius: 15,
  flexDirection: 'row',
  display: 'flex',
});

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

const MainContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: 17,
  width: 'calc(100% - 309px)',
});

const MainContentMobile = styled('div')({
  position: 'absolute',
  marginTop: '-60px !important',
  margin: 15,
  width: 'calc(100% - 70px)',
  backgroundColor: 'white',
  borderRadius: 15,
  padding: 20,
});

const ActionGroup = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  margin: 10,
  marginLeft: 80,
  marginRight: 80,
});

const ActionGroupMobile = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  position: 'absolute',
  width: 'calc(100% - 30px)',
  bottom: 0,
  padding: 15,
  backgroundColor: 'white',
});

const PrevButton = styled(Button)(({ step }) => ({
  color: 'hsl(229, 24%, 87%)',
  ':hover': {
    backgroundColor: 'unset',
    color: 'hsl(213, 96%, 18%)',
  },
  fontSize: 16,
  fontWeight: 700,
  textTransform: 'none',
  visibility: step === 1 ? 'hidden' : 'visible',
}));

const NextButton = styled(Button)(({ step }) => ({
  backgroundColor: step === 4 ? 'hsl(243, 100%, 62%)' : 'hsl(213, 96%, 18%)',
  ':hover': {
    backgroundColor:
      step === 4 ? 'hsl(243, 100%, 62%, 0.9)' : 'hsl(213, 96%, 18%, 0.9)',
  },
  fontSize: 16,
  textTransform: 'none',
}));

const StepContent = (props) => {
  const { step, handleCheckNextStep } = props;

  switch (step) {
    case 1:
      return <StepOne handleCheckNextStep={handleCheckNextStep} />;
    case 2:
      return <StepTwo />;
    case 3:
      return <StepThree />;
  }
};

const App = () => {
  const [step, setStep] = useState(1);
  const [moveToSecond, setMoveToSecond] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickNextButton = () => {
    if (moveToSecond && step < 4) {
      setStep(step + 1);
    }
  };

  const handleClickPrevButton = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleCheckNextStep = (value) => {
    setMoveToSecond(value);
  };

  if (matches) {
    return (
      <div>
        <SideBar />
        <MainContentMobile>
          <StepContent step={step} handleCheckNextStep={handleCheckNextStep} />
        </MainContentMobile>
        <ActionGroupMobile>
          <PrevButton step={step} onClick={handleClickPrevButton}>
            Go Back
          </PrevButton>
          <NextButton
            variant="contained"
            step={step}
            onClick={handleClickNextButton}
          >
            {step === 4 ? 'Confirm' : 'Next Step'}
          </NextButton>
        </ActionGroupMobile>
      </div>
    );
  }

  return (
    <Container>
      <FormPanel>
        <SideBar />
        <MainContent>
          <StepContent step={step} handleCheckNextStep={handleCheckNextStep} />
          <ActionGroup>
            <PrevButton step={step} onClick={handleClickPrevButton}>
              Go Back
            </PrevButton>
            <NextButton
              variant="contained"
              step={step}
              onClick={handleClickNextButton}
            >
              {step === 4 ? 'Confirm' : 'Next Step'}
            </NextButton>
          </ActionGroup>
        </MainContent>
      </FormPanel>
    </Container>
  );
};

export default App;
