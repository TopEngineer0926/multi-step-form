import { styled } from '@mui/system';

const SideBarPanel = styled('div')({
  width: 275,
  height: '-webkit-fill-available',
  backgroundColor: 'white',
  borderRadius: 15,
  backgroundImage: `url('/assets/images/bg-sidebar-desktop.svg')`,
  backgroundRepeat: 'no-repeat',
  margin: 17,
});
const SideBar = () => {
  return <SideBarPanel></SideBarPanel>;
};

export default SideBar;
