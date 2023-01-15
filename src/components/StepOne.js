import { TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

const Container = styled('div')({
  width: 600,
});

const ContainerMobile = styled('div')({
  gap: 20,
  paddingBottom: 10,
  paddingTop: 10,
  display: 'grid',
  gap: 15,
});

const StepOneTitle = styled('div')({
  marginTop: 38,
  marginBottom: 38,
  marginLeft: 80,
  marginRight: 80,
  display: 'grid',
  gap: 15,
});

const InputPanel = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});

const StepOneContent = ({ handleCheckNextStep }) => {
  const [inputForm, setInputForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChangeInputForm = (e, type) => {
    setInputForm({
      ...inputForm,
      [type]: e.target.value,
    });
  };

  useEffect(() => {
    if (
      inputForm['name'].length !== 0 &&
      inputForm['email'].length !== 0 &&
      inputForm['phone'].length !== 0
    ) {
      handleCheckNextStep(true);
    } else {
      handleCheckNextStep(false);
    }
  }, [inputForm]);

  return (
    <>
      <Typography variant="h4" color="hsl(213, 96%, 18%)">
        Personal Info
      </Typography>
      <Typography variant="body1" color="hsl(229, 24%, 87%)">
        Please provide your name, email address, and phone number
      </Typography>
      <div>
        <InputPanel>
          <Typography variant="body2" color="hsl(213, 96%, 18%)">
            Name
          </Typography>
          {inputForm['name'].length === 0 && (
            <Typography variant="body2" color="hsl(354, 84%, 57%)">
              This field is required
            </Typography>
          )}
        </InputPanel>
        <TextField
          fullWidth
          placeholder="e.g. Stephen King"
          error={inputForm['name'].length === 0}
          value={inputForm['name']}
          onChange={(e) => handleChangeInputForm(e, 'name')}
        />
      </div>
      <div>
        <InputPanel>
          <Typography variant="body2" color="hsl(213, 96%, 18%)">
            Email Address
          </Typography>
          {inputForm['email'].length === 0 && (
            <Typography variant="body2" color="hsl(354, 84%, 57%)">
              This field is required
            </Typography>
          )}
        </InputPanel>
        <TextField
          fullWidth
          placeholder="e.g. stephenking@lorem.com"
          error={inputForm['email'].length === 0}
          value={inputForm['email']}
          onChange={(e) => handleChangeInputForm(e, 'email')}
        />
      </div>
      <div>
        <InputPanel>
          <Typography variant="body2" color="hsl(213, 96%, 18%)">
            Phone Number
          </Typography>
          {inputForm['phone'].length === 0 && (
            <Typography variant="body2" color="hsl(354, 84%, 57%)">
              This field is required
            </Typography>
          )}
        </InputPanel>
        <TextField
          fullWidth
          placeholder="e.g. +1 234 567 890"
          error={inputForm['phone'].length === 0}
          value={inputForm['phone']}
          onChange={(e) => handleChangeInputForm(e, 'phone')}
        />
      </div>
    </>
  );
};

const StepOne = (props) => {
  const { handleCheckNextStep } = props;

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  if (matches) {
    return (
      <ContainerMobile>
        <StepOneContent handleCheckNextStep={handleCheckNextStep} />
      </ContainerMobile>
    );
  }

  return (
    <Container>
      <StepOneTitle>
        <StepOneContent handleCheckNextStep={handleCheckNextStep} />
      </StepOneTitle>
    </Container>
  );
};

export default StepOne;
