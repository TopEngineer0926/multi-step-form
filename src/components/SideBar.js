import { styled } from '@mui/system';
import {
  useMediaQuery,
  useTheme,
  Avatar,
  Stack,
  Typography,
} from '@mui/material';

const SideBarPanel = styled('div')({
  width: 215,
  padding: 30,
  height: '-webkit-fill-available',
  backgroundColor: 'white',
  borderRadius: 15,
  backgroundImage: `url('/assets/images/bg-sidebar-desktop.svg')`,
  backgroundRepeat: 'no-repeat',
  margin: 17,
});

const SideBarPanelMobile = styled('div')({
  width: '100%',
  height: 172,
  backgroundImage: `url('/assets/images/bg-sidebar-mobile.svg')`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const AvatarItem = styled(Avatar)(({ step, index }) => ({
  color:
    step === index || (step === 5 && index === 4)
      ? 'hsl(213, 96%, 18%)'
      : 'hsl(231, 100%, 99%)',
  background:
    step === index || (step === 5 && index === 4)
      ? 'hsl(206, 94%, 87%)'
      : 'transparent',
  border:
    step === index || (step === 5 && index === 4)
      ? '2px solid hsl(206, 94%, 87%)'
      : '2px solid hsl(231, 100%, 99%)',
  borderRadius: '50%',
  fontWeight: 600,
  width: '35px',
  height: '35px',
}));

const StepItem = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 15,
});

const SideBar = ({ step }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const StepItemText = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY'];

  if (matches) {
    return (
      <SideBarPanelMobile>
        <Stack direction="row" spacing={2}>
          {StepItemText.map((itemText, index) => (
            <AvatarItem key={index} step={step} index={index + 1}>
              {index + 1}
            </AvatarItem>
          ))}
        </Stack>
      </SideBarPanelMobile>
    );
  }

  return (
    <SideBarPanel>
      <Stack
        direction="row"
        sx={{
          display: 'grid',
          gap: '28px',
        }}
      >
        {StepItemText.map((itemText, index) => (
          <StepItem key={index}>
            <AvatarItem step={step} index={index + 1}>
              {index + 1}
            </AvatarItem>
            <div>
              <Typography variant="body2" color="hsl(217, 100%, 97%, 0.8)">
                STEP {index + 1}
              </Typography>
              <Typography
                variant="body1"
                color="hsl(231, 100%, 99%)"
                fontWeight={600}
              >
                {itemText}
              </Typography>
            </div>
          </StepItem>
        ))}
      </Stack>
    </SideBarPanel>
  );
};

export default SideBar;
