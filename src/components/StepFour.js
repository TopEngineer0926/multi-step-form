import { Divider, Typography, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';
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

const ConfirmPanel = styled('div')({
  width: 'calc(100% - 40px)',
  padding: 20,
  backgroundColor: 'hsl(217, 100%, 97%)',
  borderRadius: 8,
  display: 'grid',
  gap: 20,
});

const StyledStepLastContent = styled('div')(({ matches }) => ({
  display: 'grid',
  gap: 25,
}));

const PlanTitle = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const ChangePlan = styled(Typography)({
  color: 'hsl(231, 11%, 63%)',
  ':hover': {
    color: 'hsl(243, 100%, 62%)',
    cursor: 'pointer',
  },
  textDecoration: 'underline',
});

const DetailedPanel = styled('div')({
  width: '100%',
  backgroundColor: 'hsl(217, 100%, 97%)',
  borderRadius: 8,
  display: 'grid',
  gap: 20,
});

const TotalPanel = styled('div')({
  width: 'calc(100% - 40px)',
  padding: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const AddonItem = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const StepFourContent = () => {
  const [multiFormValue, setMultiFormValue] = useContext(MultiFormContext);
  const [totalValue, setTotalValue] = useState(0);

  const handleChangePlan = () => {
    setMultiFormValue({
      ...multiFormValue,
      yearly: !multiFormValue['yearly'],
    });
  };

  const getPrice = (obj) => {
    const getValue = (obj, flag) => {
      var sum = 0;
      for (const key in obj) {
        if (obj[key].select) {
          if (flag) {
            sum += obj[key].yearly;
          } else {
            sum += obj[key].monthly;
          }
        }
      }
      return sum;
    };
    return getValue(obj.plan, obj.yearly) + getValue(obj.addon, obj.yearly);
  };

  useEffect(() => {
    let total = getPrice(multiFormValue);
    setTotalValue(total);
  }, [multiFormValue]);

  return (
    <StyledStepLastContent>
      <div>
        <Typography variant="h4" color="hsl(213, 96%, 18%)" fontWeight={700}>
          Finishing up
        </Typography>
        <Typography variant="body1" color="hsl(231, 11%, 63%)">
          Double-check everything looks OK before confirming.
        </Typography>
      </div>
      <ConfirmPanel>
        <PlanTitle>
          <div>
            <Typography
              variant="body1"
              color="hsl(213, 96%, 18%, 0.9)"
              fontWeight={700}
            >
              {multiFormValue['plan']['arcade']['select']
                ? 'Arcade'
                : multiFormValue['plan']['advanced']['select']
                ? 'Advanced'
                : 'Pro'}{' '}
              ({multiFormValue['yearly'] ? 'Yearly' : 'Monthly'})
            </Typography>
            <ChangePlan onClick={handleChangePlan}>Change</ChangePlan>
          </div>
          <Typography
            variant="body1"
            color="hsl(213, 96%, 18%, 0.9)"
            fontWeight={700}
          >
            {multiFormValue['yearly']
              ? multiFormValue['plan']['arcade']['select']
                ? `$${multiFormValue['plan']['arcade']['yearly']}/yr`
                : multiFormValue['plan']['advanced']['select']
                ? `$${multiFormValue['plan']['advanced']['yearly']}/yr`
                : `$${multiFormValue['plan']['pro']['yearly']}/yr`
              : multiFormValue['plan']['arcade']['select']
              ? `$${multiFormValue['plan']['arcade']['monthly']}/mo`
              : multiFormValue['plan']['advanced']['select']
              ? `$${multiFormValue['plan']['advanced']['monthly']}/mo`
              : `$${multiFormValue['plan']['pro']['monthly']}/mo`}
          </Typography>
        </PlanTitle>
        <Divider />
        <DetailedPanel>
          {multiFormValue['addon']['service']['select'] && (
            <AddonItem>
              <Typography
                variant="body2"
                fontWeight={500}
                color="hsl(231, 11%, 63%)"
              >
                Online service
              </Typography>
              <Typography
                variant="body2"
                color="hsl(213, 96%, 18%, 0.9)"
                fontWeight={600}
              >
                {multiFormValue['yearly']
                  ? `$${multiFormValue['addon']['service']['yearly']}/yr`
                  : `$${multiFormValue['addon']['service']['monthly']}/mo`}
              </Typography>
            </AddonItem>
          )}
          {multiFormValue['addon']['storage']['select'] && (
            <AddonItem>
              <Typography
                variant="body2"
                fontWeight={500}
                color="hsl(231, 11%, 63%)"
              >
                Larger storage
              </Typography>
              <Typography
                variant="body2"
                color="hsl(213, 96%, 18%, 0.9)"
                fontWeight={600}
              >
                {multiFormValue['yearly']
                  ? `$${multiFormValue['addon']['storage']['yearly']}/yr`
                  : `$${multiFormValue['addon']['storage']['monthly']}/mo`}
              </Typography>
            </AddonItem>
          )}
          {multiFormValue['addon']['profile']['select'] && (
            <AddonItem>
              <Typography
                variant="body2"
                fontWeight={500}
                color="hsl(231, 11%, 63%)"
              >
                Customizable profile
              </Typography>
              <Typography
                variant="body2"
                color="hsl(213, 96%, 18%, 0.9)"
                fontWeight={600}
              >
                {multiFormValue['yearly']
                  ? `$${multiFormValue['addon']['pro']['yearly']}/yr`
                  : `$${multiFormValue['addon']['pro']['monthly']}/mo`}
              </Typography>
            </AddonItem>
          )}
        </DetailedPanel>
      </ConfirmPanel>
      <TotalPanel>
        <Typography variant="body2" color="hsl(231, 11%, 63%)" fontWeight={600}>
          Total (per {multiFormValue['yearly'] ? 'year' : 'month'})
        </Typography>
        <Typography variant="h5" color="hsl(243, 100%, 62%)" fontWeight={600}>
          {multiFormValue['yearly']
            ? `$${totalValue}/yr`
            : `+$${totalValue}/mo`}
        </Typography>
      </TotalPanel>
    </StyledStepLastContent>
  );
};

const StepFour = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  if (matches) {
    return (
      <ContainerMobile>
        <StepFourContent matches={matches} />
      </ContainerMobile>
    );
  }

  return (
    <Container>
      <StepOneTitle>
        <StepFourContent matches={matches} />
      </StepOneTitle>
    </Container>
  );
};

export default StepFour;
