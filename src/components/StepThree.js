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

const AddonCardBox = styled('div')({
  display: 'grid',
  gap: 20,
});

const AddonCard = styled('div')(({ cardType }) => ({
  width: 'calc(100% - 50px)',
  height: 80,
  paddingLeft: 25,
  paddingRight: 25,
  border: '1px solid',
  borderRadius: 8,
  backgroundColor: cardType === 'true' ? 'hsl(231, 100%, 99%)' : 'white',
  borderColor:
    cardType === 'true' ? 'hsl(243, 100%, 62%, 0.9)' : 'hsl(229, 24%, 87%)',
  ':hover': {
    borderColor: 'hsl(243, 100%, 62%, 0.9)',
    cursor: 'pointer',
  },
  display: 'flex',
  gap: 22,
  alignItems: 'center',
}));

const AddonCardPanel = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'center',
});

const StyledStepThreeContent = styled('div')(({ matches }) => ({
  display: 'grid',
  gap: 35,
}));

const StepThreeContent = ({ matches }) => {
  const initialCardType = {
    service: false,
    storage: false,
    profile: false,
  };

  const yearPlan = false;
  const [cardType, setCardType] = useState(initialCardType);

  const handleClickCard = (type) => {
    setCardType({
      ...cardType,
      [type]: !cardType[type],
    });
  };

  return (
    <StyledStepThreeContent>
      <div>
        <Typography variant="h4" color="hsl(213, 96%, 18%)">
          Select your plan
        </Typography>
        <Typography variant="body1" color="hsl(229, 24%, 87%)">
          You have the option of monthly or yearly billing.
        </Typography>
      </div>
      <AddonCardBox>
        <AddonCard
          onClick={() => handleClickCard('service')}
          cardType={cardType['service'] ? 'true' : 'false'}
        >
          <Checkbox
            sx={{ color: 'hsl(243, 100%, 62%, 0.9) !important' }}
            checked={cardType['service']}
          />
          <AddonCardPanel>
            <div>
              <Typography
                variant="h6"
                color="hsl(213, 96%, 18%)"
                fontSize={matches ? '1rem' : '1.25rem'}
              >
                Online Service
              </Typography>
              <Typography
                color="hsl(229, 24%, 87%)"
                fontSize={matches ? '0.8rem' : '1rem'}
              >
                Access to multiplayer games
              </Typography>
            </div>
            <Typography variant="body2" color="hsl(213, 96%, 18%)">
              {yearPlan ? '+$10/yr' : '+$1/mo'}
            </Typography>
          </AddonCardPanel>
        </AddonCard>
        <AddonCard
          onClick={() => handleClickCard('storage')}
          cardType={cardType['storage'] ? 'true' : 'false'}
        >
          <Checkbox
            sx={{ color: 'hsl(243, 100%, 62%, 0.9) !important' }}
            checked={cardType['storage']}
          />
          <AddonCardPanel>
            <div>
              <Typography
                variant="h6"
                color="hsl(213, 96%, 18%)"
                fontSize={matches ? '1rem' : '1.25rem'}
              >
                Larger storage
              </Typography>
              <Typography
                color="hsl(229, 24%, 87%)"
                fontSize={matches ? '0.8rem' : '1rem'}
              >
                Extra 1TB of cloud save
              </Typography>
            </div>
            <Typography variant="body2" color="hsl(213, 96%, 18%)">
              {yearPlan ? '+$20/yr' : '+$2/mo'}
            </Typography>
          </AddonCardPanel>
        </AddonCard>
        <AddonCard
          onClick={() => handleClickCard('profile')}
          cardType={cardType['profile'] ? 'true' : 'false'}
        >
          <Checkbox
            sx={{ color: 'hsl(243, 100%, 62%, 0.9) !important' }}
            checked={cardType['profile']}
          />
          <AddonCardPanel>
            <div>
              <Typography
                variant="h6"
                color="hsl(213, 96%, 18%)"
                fontSize={matches ? '1rem' : '1.25rem'}
              >
                Customizable profile
              </Typography>
              <Typography
                color="hsl(229, 24%, 87%)"
                fontSize={matches ? '0.8rem' : '1rem'}
              >
                Custom theme on your profile
              </Typography>
            </div>
            <Typography variant="body2" color="hsl(213, 96%, 18%)">
              {yearPlan ? '+$20/yr' : '+$2/mo'}
            </Typography>
          </AddonCardPanel>
        </AddonCard>
      </AddonCardBox>
    </StyledStepThreeContent>
  );
};

const StepThree = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  if (matches) {
    return (
      <ContainerMobile>
        <StepThreeContent matches={matches} />
      </ContainerMobile>
    );
  }

  return (
    <Container>
      <StepOneTitle>
        <StepThreeContent matches={matches} />
      </StepOneTitle>
    </Container>
  );
};

export default StepThree;
