import { HomePage } from './components/HomePage';
import { LoginPage } from './components/LoginPage';
import { PatientListPage } from './components/PatientListPage';
import { PatientDetailPage } from './components/PatientDetailPage';

export const routes = [
  {
    path: '/',
    exact: true,
    element: <HomePage />
  },
  {
    path: '/login',
    element: <LoginPage requestConfig={{"apiUrl":"/api/login","redirectPath":"/patient-list"}} forgotRoute="/forgot-password"/>
  },
  {
    path: '/patient-list',
    element: <PatientListPage dataConfig={{"apiUrl":"/api/patient-list"}}/>
  },
  {
    path: '/patient-detail',
    element: <PatientDetailPage />
  },
];
