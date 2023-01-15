import { Typography, useMediaQuery, useTheme, Switch } from '@mui/material';
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
  const initialCardType = {
    arcade: false,
    advanced: false,
    pro: false,
  };

  const [cardType, setCardType] = useState(initialCardType);

  const [yearPlan, setYearPlan] = useState(false);

  const handleClickCard = (type) => {
    setCardType({
      ...initialCardType,
      [type]: true,
    });
  };

  const handleChangeYearPlan = (e) => {
    setYearPlan(e.target.checked);
  };

  return (
    <StyledStepTwoContent matches={matches ? 'true' : 'false'}>
      <div>
        <Typography variant="h4" color="hsl(213, 96%, 18%)">
          Select your plan
        </Typography>
        <Typography variant="body1" color="hsl(229, 24%, 87%)">
          You have the option of monthly or yearly billing.
        </Typography>
      </div>
      <PlanCardBox matches={matches ? 'true' : 'false'}>
        <PlanCard
          matches={matches ? 'true' : 'false'}
          onClick={() => handleClickCard('arcade')}
          cardType={cardType['arcade'] ? 'true' : 'false'}
        >
          <img src="/assets/images/icon-arcade.svg" />
          <div>
            <Typography variant="h6" color="hsl(213, 96%, 18%)">
              Arcade
            </Typography>
            <Typography color="hsl(229, 24%, 87%)">
              {yearPlan ? '$90/yr' : '$9/mo'}
            </Typography>
            {yearPlan && (
              <Typography variant="body2" color="hsl(213, 96%, 18%)">
                2 months free
              </Typography>
            )}
          </div>
        </PlanCard>
        <PlanCard
          matches={matches ? 'true' : 'false'}
          onClick={() => handleClickCard('advanced')}
          cardType={cardType['advanced'] ? 'true' : 'false'}
        >
          <img src="/assets/images/icon-advanced.svg" />
          <div>
            <Typography variant="h6" color="hsl(213, 96%, 18%)">
              Advanced
            </Typography>
            <Typography color="hsl(229, 24%, 87%)">
              {yearPlan ? '$120/yr' : '$12/mo'}
            </Typography>
            {yearPlan && (
              <Typography variant="body2" color="hsl(213, 96%, 18%)">
                2 months free
              </Typography>
            )}
          </div>
        </PlanCard>
        <PlanCard
          matches={matches ? 'true' : 'false'}
          onClick={() => handleClickCard('pro')}
          cardType={cardType['pro'] ? 'true' : 'false'}
        >
          <img src="/assets/images/icon-pro.svg" />
          <div>
            <Typography variant="h6" color="hsl(213, 96%, 18%)">
              Pro
            </Typography>
            <Typography color="hsl(229, 24%, 87%)">
              {yearPlan ? '$150/yr' : '$15/mo'}
            </Typography>
            {yearPlan && (
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
          color={yearPlan ? 'hsl(229, 24%, 87%)' : 'hsl(213, 96%, 18%)'}
        >
          Monthly
        </Typography>
        <Switch checked={yearPlan} onChange={handleChangeYearPlan} />
        <Typography
          variant="h6"
          color={yearPlan ? 'hsl(213, 96%, 18%)' : 'hsl(229, 24%, 87%)'}
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
