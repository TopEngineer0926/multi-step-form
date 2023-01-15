import { Button } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';
import { SideBar, StepOne } from './components';

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
  width: 600,
  padding: 17,
});

const ActionGroup = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  margin: 10,
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
  const { step } = props;

  switch (step) {
    case 1:
      return <StepOne />;
  }
};

const App = () => {
  const [step, setStep] = useState(1);

  const handleClickNextButton = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handleClickPrevButton = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <Container>
      <FormPanel>
        <SideBar />
        <MainContent>
          <StepContent step={step} />
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
