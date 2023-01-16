import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled('div')({
  width: 600,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '-webkit-fill-available',
});

const ContainerMobile = styled('div')({
  gap: 20,
  paddingBottom: 10,
  paddingTop: 10,
  display: 'flex',
  justifyContent: 'center',
  height: '-webkit-fill-available',
});

const StepOneTitle = styled('div')({
  marginTop: 38,
  marginBottom: 38,
  marginLeft: 80,
  marginRight: 80,
  display: 'grid',
  gap: 15,
});

const StyledStepLastContent = styled('div')(({ matches }) => ({
  display: 'grid',
  gap: 25,
}));

const StepLastContent = () => {
  return (
    <StyledStepLastContent>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/assets/images/icon-thank-you.svg" alt="thank you" />
      </div>
      <Typography
        variant="h4"
        color="hsl(213, 96%, 18%)"
        fontWeight={700}
        textAlign="center"
      >
        Thank you!
      </Typography>
      <Typography
        variant="body1"
        color="hsl(231, 11%, 63%)"
        fontWeight={500}
        textAlign="center"
      >
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </Typography>
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
