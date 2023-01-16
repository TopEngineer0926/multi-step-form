import { TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useMediaQuery, useTheme } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { MultiFormContext } from '../App';

const Container = styled('div')({
  width: 600,
});

const ContainerMobile = styled('div')({
  gap: 20,
  paddingBottom: 10,
  paddingTop: 10,
  display: 'grid',
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

const StepOneContent = () => {
  const [multiFormValue, setMultiFormValue] = useContext(MultiFormContext);
  const [inputError, setInputError] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const handleChangeInputForm = (e, type) => {
    setMultiFormValue({
      ...multiFormValue,
      info: {
        ...multiFormValue['info'],
        [type]: e.target.value,
      },
    });
    setInputError({
      ...inputError,
      [type]: multiFormValue['info'][type].length === 0 ? true : false,
    });
  };

  const handleChangeBlur = (type) => {
    setInputError({
      ...inputError,
      [type]: multiFormValue['info'][type].length === 0 ? true : false,
    });
  };

  return (
    <>
      <Typography variant="h4" color="hsl(213, 96%, 18%)" fontWeight={700}>
        Personal Info
      </Typography>
      <Typography variant="body1" color="hsl(231, 11%, 63%)" fontWeight={400}>
        Please provide your name, email address, and phone number
      </Typography>
      <div>
        <InputPanel>
          <Typography
            variant="body2"
            color="hsl(213, 96%, 18%)"
            fontWeight={600}
          >
            Name
          </Typography>
          {inputError['name'] && (
            <Typography variant="body2" color="hsl(354, 84%, 57%)">
              This field is required
            </Typography>
          )}
        </InputPanel>
        <TextField
          fullWidth
          placeholder="e.g. Stephen King"
          error={inputError['name']}
          onBlur={() => handleChangeBlur('name')}
          value={multiFormValue['info']['name']}
          onChange={(e) => handleChangeInputForm(e, 'name')}
        />
      </div>
      <div>
        <InputPanel>
          <Typography
            variant="body2"
            color="hsl(213, 96%, 18%)"
            fontWeight={600}
          >
            Email Address
          </Typography>
          {inputError['email'] && (
            <Typography variant="body2" color="hsl(354, 84%, 57%)">
              This field is required
            </Typography>
          )}
        </InputPanel>
        <TextField
          fullWidth
          placeholder="e.g. stephenking@lorem.com"
          error={inputError['email']}
          onBlur={() => handleChangeBlur('email')}
          value={multiFormValue['info']['email']}
          onChange={(e) => handleChangeInputForm(e, 'email')}
        />
      </div>
      <div>
        <InputPanel>
          <Typography
            variant="body2"
            color="hsl(213, 96%, 18%)"
            fontWeight={600}
          >
            Phone Number
          </Typography>
          {inputError['phone'] && (
            <Typography variant="body2" color="hsl(354, 84%, 57%)">
              This field is required
            </Typography>
          )}
        </InputPanel>
        <TextField
          fullWidth
          placeholder="e.g. +1 234 567 890"
          error={inputError['phone']}
          onBlur={() => handleChangeBlur('phone')}
          value={multiFormValue['info']['phone']}
          onChange={(e) => handleChangeInputForm(e, 'phone')}
        />
      </div>
    </>
  );
};

const StepOne = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  if (matches) {
    return (
      <ContainerMobile>
        <StepOneContent />
      </ContainerMobile>
    );
  }

  return (
    <Container>
      <StepOneTitle>
        <StepOneContent />
      </StepOneTitle>
    </Container>
  );
};

export default StepOne;
