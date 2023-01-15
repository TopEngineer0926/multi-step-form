import { Typography, useMediaQuery, useTheme, Checkbox } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';

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

const ConfirmPanel = styled('div')({
  width: 'calc(100% - 40px)',
  padding: 20,
});

const StyledStepLastContent = styled('div')(({ matches }) => ({
  display: 'grid',
  gap: 35,
}));

const StepLastContent = () => {
  return (
    <StyledStepLastContent>
      <div>
        <Typography variant="h4" color="hsl(213, 96%, 18%)">
          Finishing up
        </Typography>
        <Typography variant="body1" color="hsl(229, 24%, 87%)">
          Double-check everything looks OK before confirming.
        </Typography>
      </div>
      <ConfirmPanel></ConfirmPanel>
    </StyledStepLastContent>
  );
};

const StepLast = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  if (matches) {
    return (
      <ContainerMobile>
        <StepLastContent matches={matches} />
      </ContainerMobile>
    );
  }

  return (
    <Container>
      <StepOneTitle>
        <StepLastContent matches={matches} />
      </StepOneTitle>
    </Container>
  );
};

export default StepLast;
