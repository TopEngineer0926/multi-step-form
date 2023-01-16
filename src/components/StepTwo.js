import { Typography, useMediaQuery, useTheme, Switch } from '@mui/material';
import { styled } from '@mui/system';
import { useContext } from 'react';
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

const PlanCardBox = styled('div')(({ matches }) => ({
  display: matches === 'true' ? 'grid' : 'flex',
  gap: 10,
}));

const PlanCard = styled('div')(({ cardType, matches }) => ({
  width: matches === 'true' ? 'calc(100% - 30px)' : 110,
  height: matches === 'true' ? 'auto' : 160,
  border: '1px solid',
  borderRadius: 8,
  backgroundColor: cardType === 'true' ? 'hsl(231, 100%, 99%)' : 'white',
  borderColor:
    cardType === 'true' ? 'hsl(213, 96%, 18%)' : 'hsl(229, 24%, 87%)',
  ':hover': {
    borderColor: 'hsl(213, 96%, 18%)',
    cursor: 'pointer',
  },
  display: matches === 'true' ? 'flex' : 'grid',
  padding: 15,
  gap: matches === 'true' ? 12 : 45,
}));

const PlanOption = styled('div')(() => ({
  width: '100%',
  height: 50,
  backgroundColor: 'hsl(231, 100%, 99%)',
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
}));

const StyledStepTwoContent = styled('div')(({ matches }) => ({
  display: 'grid',
  gap: 35,
}));

const StepTwoContent = ({ matches }) => {
  const [multiFormValue, setMultiFormValue] = useContext(MultiFormContext);

  const initialPlan = {
    arcade: {
      select: false,
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
  };

  const handleClickCard = (type) => {
    setMultiFormValue({
      ...multiFormValue,
      plan: {
        ...initialPlan,
        [type]: {
          ...multiFormValue['plan'][type],
          select: true,
        },
      },
    });
  };

  const handleChangeYearPlan = (e) => {
    setMultiFormValue({
      ...multiFormValue,
      yearly: e.target.checked,
    });
  };

  return (
    <StyledStepTwoContent matches={matches ? 'true' : 'false'}>
      <div>
        <Typography variant="h4" color="hsl(213, 96%, 18%)" fontWeight={700}>
          Select your plan
        </Typography>
        <Typography variant="body1" color="hsl(231, 11%, 63%)" fontWeight={400}>
          You have the option of monthly or yearly billing.
        </Typography>
      </div>
      <PlanCardBox matches={matches ? 'true' : 'false'}>
        <PlanCard
          matches={matches ? 'true' : 'false'}
          onClick={() => handleClickCard('arcade')}
          cardType={
            multiFormValue['plan']['arcade']['select'] ? 'true' : 'false'
          }
        >
          <img src="/assets/images/icon-arcade.svg" alt="arcade" />
          <div>
            <Typography
              variant="h6"
              color="hsl(213, 96%, 18%)"
              fontWeight={600}
            >
              Arcade
            </Typography>
            <Typography color="hsl(231, 11%, 63%)">
              {multiFormValue['yearly']
                ? `$${multiFormValue['plan']['arcade']['yearly']}/yr`
                : `$${multiFormValue['plan']['arcade']['monthly']}/mo`}
            </Typography>
            {multiFormValue['yearly'] && (
              <Typography variant="body2" color="hsl(213, 96%, 18%)">
                2 months free
              </Typography>
            )}
          </div>
        </PlanCard>
        <PlanCard
          matches={matches ? 'true' : 'false'}
          onClick={() => handleClickCard('advanced')}
          cardType={
            multiFormValue['plan']['advanced']['select'] ? 'true' : 'false'
          }
        >
          <img src="/assets/images/icon-advanced.svg" alt="advanced" />
          <div>
            <Typography
              variant="h6"
              color="hsl(213, 96%, 18%)"
              fontWeight={600}
            >
              Advanced
            </Typography>
            <Typography color="hsl(231, 11%, 63%)">
              {multiFormValue['yearly']
                ? `$${multiFormValue['plan']['advanced']['yearly']}/yr`
                : `$${multiFormValue['plan']['advanced']['monthly']}/mo`}
            </Typography>
            {multiFormValue['yearly'] && (
              <Typography variant="body2" color="hsl(213, 96%, 18%)">
                2 months free
              </Typography>
            )}
          </div>
        </PlanCard>
        <PlanCard
          matches={matches ? 'true' : 'false'}
          onClick={() => handleClickCard('pro')}
          cardType={multiFormValue['plan']['pro']['select'] ? 'true' : 'false'}
        >
          <img src="/assets/images/icon-pro.svg" alt="pro" />
          <div>
            <Typography
              variant="h6"
              color="hsl(213, 96%, 18%)"
              fontWeight={600}
            >
              Pro
            </Typography>
            <Typography color="hsl(231, 11%, 63%)">
              {multiFormValue['yearly']
                ? `$${multiFormValue['plan']['pro']['yearly']}/yr`
                : `$${multiFormValue['plan']['pro']['monthly']}/mo`}
            </Typography>
            {multiFormValue['yearly'] && (
              <Typography variant="body2" color="hsl(213, 96%, 18%)">
                2 months free
              </Typography>
            )}
          </div>
        </PlanCard>
      </PlanCardBox>
      <PlanOption>
        <Typography
          variant="h6"
          color={
            multiFormValue['yearly']
              ? 'hsl(231, 11%, 63%)'
              : 'hsl(213, 96%, 18%)'
          }
          fontWeight={600}
        >
          Monthly
        </Typography>
        <Switch
          checked={multiFormValue['yearly']}
          onChange={handleChangeYearPlan}
        />
        <Typography
          variant="h6"
          color={
            multiFormValue['yearly']
              ? 'hsl(213, 96%, 18%)'
              : 'hsl(231, 11%, 63%)'
          }
          fontWeight={600}
        >
          Yearly
        </Typography>
      </PlanOption>
    </StyledStepTwoContent>
  );
};

const StepTwo = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  if (matches) {
    return (
      <ContainerMobile>
        <StepTwoContent matches={matches} />
      </ContainerMobile>
    );
  }

  return (
    <Container>
      <StepOneTitle>
        <StepTwoContent matches={matches} />
      </StepOneTitle>
    </Container>
  );
};

export default StepTwo;
