import { Box, Card, CardContent, Typography, Container } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessibleIcon from '@mui/icons-material/Accessible';
import ElderlyIcon from '@mui/icons-material/Elderly';
import MasksIcon from '@mui/icons-material/Masks';

import { Patient } from './Patient';

const iconStyles = {
  display: 'inline-block',
  border: '2px solid black',
  borderRadius: '50%',
  marginRight: '10px',
  padding: '2px',
};

interface PatientListItemProps {
  patient: Patient;
  onSelect: (patient: Patient) => void;
  selected?: boolean;
}

export function PatientListItem({ patient, onSelect, selected }: PatientListItemProps) {
  const { id, name, mrn, birthdate, location, symptoms } = patient;

  const handleSelect = () => onSelect(patient);

  return (
    <Box sx={{ borderRadius: 2, mb: '16px' }}>
      <Card onClick={handleSelect}
            sx={{ border: selected ? "1px solid #000" : "1px solid transparent" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            {name} <StarBorderIcon sx={{ marginLeft: '10px' }} />
          </Typography>

          <Container
            disableGutters
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="body1" component="span">
              {mrn}
            </Typography>
            <Typography variant="body1" component="span">
              {id}
            </Typography>
          </Container>

          <Typography sx={{ marginBottom: 0.5 }}>{birthdate}</Typography>
          <Typography variant="body2" sx={{ marginBottom: 0.5 }}>
            {location}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 0.5 }}>
            {symptoms}
          </Typography>

          <Container
            disableGutters
            sx={{
              display: 'flex',
            }}
          >
            <Box>
              <AccessibleIcon fontSize="large" sx={iconStyles} />
            </Box>
            <Box>
              <ElderlyIcon fontSize="large" sx={iconStyles} />
            </Box>
            <Box>
              <MasksIcon fontSize="large" sx={iconStyles} />
            </Box>
          </Container>
        </CardContent>
      </Card>
    </Box>
  );
}
