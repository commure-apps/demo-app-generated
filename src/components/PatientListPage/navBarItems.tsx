import UnarchiveIcon from '@mui/icons-material/Unarchive';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ArticleIcon from '@mui/icons-material/Article';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';

export interface NavBarItem {
  title: string;
  icon: JSX.Element | React.ReactElement;
}

export const navBarItems: NavBarItem[] = [
  {
    title: 'Clinical View',
    icon: <UnarchiveIcon fontSize="small" />,
  },
  {
    title: 'OR Schedule',
    icon: <ScheduleIcon fontSize="small" />,
  },
  {
    title: 'Charges',
    icon: <ArticleIcon fontSize="small" />,
  },
  {
    title: 'Resources',
    icon: <MenuBookIcon fontSize="small" />,
  },
  {
    title: 'Calendar',
    icon: <CalendarTodayOutlinedIcon fontSize="small" />,
  },
  {
    title: 'Admin',
    icon: <ManageAccountsOutlinedIcon fontSize="small" />,
  },
];
