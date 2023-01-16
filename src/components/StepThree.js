import { Typography, useMediaQuery, useTheme, Checkbox } from '@mui/material';
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
  const [multiFormValue, setMultiFormValue] = useContext(MultiFormContext);

  const handleClickCard = (type) => {
    setMultiFormValue({
      ...multiFormValue,
      addon: {
        ...multiFormValue['addon'],
        [type]: {
          ...multiFormValue['addon'][type],
          select: !multiFormValue['addon'][type]['select'],
        },
      },
    });
  };

  return (
    <StyledStepThreeContent>
      <div>
        <Typography variant="h4" color="hsl(213, 96%, 18%)" fontWeight={700}>
          Pick add-ons
        </Typography>
        <Typography variant="body1" color="hsl(231, 11%, 63%)">
          Add-ons help enhance your gaming experience.
        </Typography>
      </div>
      <AddonCardBox>
        <AddonCard
          onClick={() => handleClickCard('service')}
          cardType={
            multiFormValue['addon']['service']['select'] ? 'true' : 'false'
          }
        >
          <Checkbox
            sx={{ color: 'hsl(243, 100%, 62%, 0.9) !important' }}
            checked={multiFormValue['addon']['service']['select']}
          />
          <AddonCardPanel>
            <div>
              <Typography
                variant="h6"
                color="hsl(213, 96%, 18%)"
                fontSize={matches ? '1rem' : '1.25rem'}
                fontWeight={600}
              >
                Online Service
              </Typography>
              <Typography
                color="hsl(231, 11%, 63%)"
                fontSize={matches ? '0.8rem' : '1rem'}
              >
                Access to multiplayer games
              </Typography>
            </div>
            <Typography variant="body2" color="hsl(243, 100%, 62%)">
              {multiFormValue['yearly']
                ? `+$${multiFormValue['addon']['service']['yearly']}/yr`
                : `+$${multiFormValue['addon']['service']['monthly']}/mo`}
            </Typography>
          </AddonCardPanel>
        </AddonCard>
        <AddonCard
          onClick={() => handleClickCard('storage')}
          cardType={
            multiFormValue['addon']['storage']['select'] ? 'true' : 'false'
          }
        >
          <Checkbox
            sx={{ color: 'hsl(243, 100%, 62%, 0.9) !important' }}
            checked={multiFormValue['addon']['storage']['select']}
          />
          <AddonCardPanel>
            <div>
              <Typography
                variant="h6"
                color="hsl(213, 96%, 18%)"
                fontSize={matches ? '1rem' : '1.25rem'}
                fontWeight={600}
              >
                Larger storage
              </Typography>
              <Typography
                color="hsl(231, 11%, 63%)"
                fontSize={matches ? '0.8rem' : '1rem'}
              >
                Extra 1TB of cloud save
              </Typography>
            </div>
            <Typography variant="body2" color="hsl(243, 100%, 62%)">
              {multiFormValue['yearly']
                ? `+$${multiFormValue['addon']['storage']['yearly']}/yr`
                : `+$${multiFormValue['addon']['storage']['monthly']}/mo`}
            </Typography>
          </AddonCardPanel>
        </AddonCard>
        <AddonCard
          onClick={() => handleClickCard('profile')}
          cardType={
            multiFormValue['addon']['profile']['select'] ? 'true' : 'false'
          }
        >
          <Checkbox
            sx={{ color: 'hsl(243, 100%, 62%, 0.9) !important' }}
            checked={multiFormValue['addon']['profile']['select']}
          />
          <AddonCardPanel>
            <div>
              <Typography
                variant="h6"
                color="hsl(213, 96%, 18%)"
                fontSize={matches ? '1rem' : '1.25rem'}
                fontWeight={600}
              >
                Customizable profile
              </Typography>
              <Typography
                color="hsl(231, 11%, 63%)"
                fontSize={matches ? '0.8rem' : '1rem'}
              >
                Custom theme on your profile
              </Typography>
            </div>
            <Typography variant="body2" color="hsl(243, 100%, 62%)">
              {multiFormValue['yearly']
                ? `+$${multiFormValue['addon']['profile']['yearly']}/yr`
                : `+$${multiFormValue['addon']['profile']['monthly']}/mo`}
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
