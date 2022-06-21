import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CropFreeIcon from '@mui/icons-material/CropFree';

import { Patient } from '../PatientListPage/Patient';


interface PatientDetailPageProps {
  patient?: Patient;
}

const cards: InfoCardProps[] = [
  { title: 'Lab Results', terms: ['Complete Blood Count (CBC)', 'Hemoglobin', 'Mean Corpuscular Volume (MCV)'] },
  { title: 'MAR Table' },
  { title: 'Vitals Table' },
  { title: 'CPOE Oreder List' },
]

export function PatientDetailPage({ patient }: PatientDetailPageProps) {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
        {patient?.name} <StarBorderIcon sx={{ marginLeft: '10px' }} />
      </Typography>
      <Box sx={{ display: "flex", justifyContent: 'space-between', flexWrap: "wrap" }}>
        <Typography variant="body1" component="span" sx={{ mb: 1 }}>
          <strong>Birthdate:</strong> {patient?.birthdate}
        </Typography>
        <Typography variant="body1" component="span" sx={{ mb: 1 }}>
          <strong>ID:</strong> {patient?.id}
        </Typography>
        <Typography variant="body1" component="span" sx={{ mb: 1 }}>
          <strong>Location:</strong> {patient?.location}
        </Typography>
        <Typography variant="body1" component="span" sx={{ mb: 1 }}>
          <strong>Visit Type:</strong> Inpatient
        </Typography>
        <Typography variant="body1" component="span" sx={{ mb: 1 }}>
          <strong>Allergies:</strong> {patient?.symptoms}
        </Typography>
        <Typography variant="body1" component="span" sx={{ mb: 1 }}>
          <strong>Gender:</strong> {patient?.gender}
        </Typography>
      </Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {cards.map(card => <Grid key={card.title} item xs={6}><InfoCard key={card.title} {...card}/></Grid>)}
      </Grid>
    </Box>
  )
}

interface InfoCardProps {
  title: string;
  terms?: string[];
}

function InfoCard({ title, terms }: InfoCardProps) {
  return (
    <Card sx={{ minHeight: 250 }} variant="outlined">
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: 'space-between', borderBottom: "1px solid #000" }}>
          <Typography variant="body2" component="div" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
          <CropFreeIcon />
        </Box>
        {terms?.map(term => <Typography key={term} variant="body2">{term}</Typography>)}
      </CardContent>
    </Card>
  );
}
