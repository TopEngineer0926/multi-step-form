import { Button, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import { useState, createContext } from 'react';
import { SideBar, StepOne, StepTwo, StepThree, StepLast } from './components';

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

export const MultiFormContext = createContext();

const StepContent = (props) => {
  const { step } = props;

  switch (step) {
    case 1:
      return <StepOne />;
    case 2:
      return <StepTwo />;
    case 3:
      return <StepThree />;
    case 4:
      return <StepLast />;
  }
};

const App = () => {
  const [step, setStep] = useState(1);
  const [multiFormValue, setMultiFormValue] = useState({
    info: {
      name: '',
      email: '',
      phone: '',
    },
    plan: {
      arcade: {
        select: true,
        monthly: 9,
        yearly: 90,
      },
      advanced: {
        select: false,
        monthly: 12,
        yearly: 120,
      },
      pro: {
        select: false,
        monthly: 15,
        yearly: 150,
      },
    },
    yearly: false,
    addon: {
      service: {
        select: false,
        monthly: 1,
        yearly: 10,
      },
      storage: {
        select: false,
        monthly: 2,
        yearly: 20,
      },
      profile: {
        select: false,
        monthly: 2,
        yearly: 20,
      },
    },
  });

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickNextButton = () => {
    if (
      multiFormValue['info']['name'].length !== 0 &&
      multiFormValue['info']['email'].length !== 0 &&
      multiFormValue['info']['phone'].length !== 0 &&
      step < 4
    ) {
      setStep(step + 1);
    }
  };

  const handleClickPrevButton = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  if (matches) {
    return (
      <MultiFormContext.Provider value={[multiFormValue, setMultiFormValue]}>
        <div>
          <SideBar />
          <MainContentMobile>
            <StepContent step={step} />
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
      </MultiFormContext.Provider>
    );
  }

  return (
    <MultiFormContext.Provider value={[multiFormValue, setMultiFormValue]}>
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
    </MultiFormContext.Provider>
  );
};

export default App;
