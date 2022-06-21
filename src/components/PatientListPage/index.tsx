import { useEffect, useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import { Patient } from './Patient';
import { PatientListItem } from './PatientItem';
import { PatientSearch } from './PatientSearch';
import { Header } from './Header';
import { DataConfig, patientListRequest } from './patientListApi';
import './styles.css';
import { PatientDetailPage } from '../PatientDetailPage';

interface PatientListPageProps {
  dataConfig: DataConfig;
}

const theme = createTheme();

export function PatientListPage({ dataConfig }: PatientListPageProps) {
  const [patientList, setPatientList] = useState<Patient[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<Patient>();
  const [searchParam, setSearchParam] = useState('');

  const handleSelect = (item: Patient) => setSelectedPatient(item);

  useEffect(() => {
    patientListRequest(dataConfig).then(patients => {
      const filteredPatients = searchParam.trim()
        ? patients.filter(({ name }) => name.toLocaleLowerCase().includes(searchParam.toLocaleLowerCase()))
        : patients;
      setPatientList(filteredPatients);
    });
  }, [searchParam, dataConfig]);

  return (
    <ThemeProvider theme={theme}>
      <Box component="main">
        <CssBaseline />
        <Header />
        <Box sx={{ display: 'flex' }}>
          <div className="sidebar">
            <PatientSearch onUpdateParam={setSearchParam} />
            <div className="list">
              {!patientList?.length && <p>No patients founds</p>}
              {patientList?.map(patient => (
                <PatientListItem key={patient.id}
                                 patient={patient}
                                 onSelect={handleSelect}
                                 selected={patient.id === selectedPatient?.id}
                />
              ))}
            </div>
          </div>
          {selectedPatient && <PatientDetailPage patient={selectedPatient} />}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
