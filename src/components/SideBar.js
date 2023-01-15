import { styled } from '@mui/system';
import { useMediaQuery, useTheme } from '@mui/material';

const SideBarPanel = styled('div')({
  width: 275,
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
});

const SideBar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  if (matches) {
    return <SideBarPanelMobile></SideBarPanelMobile>;
  }

  return <SideBarPanel></SideBarPanel>;
};

export default SideBar;
