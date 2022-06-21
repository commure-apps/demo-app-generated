import { useState } from 'react';
import type { ChangeEvent } from 'react';

import { SearchOutlined } from '@mui/icons-material';
import { FormControl, InputAdornment, Input, InputLabel } from '@mui/material';

interface PatientSearchProps {
  onUpdateParam: (param: string) => void;
}

export function PatientSearch({ onUpdateParam }: PatientSearchProps) {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let param = e.target.value;
    setValue(param);
    onUpdateParam(param);
  };

  return (
    <form className="search-form">
      <FormControl
        sx={{ width: '90%', borderColor: '#fff' }}
        variant="standard"
      >
        <InputLabel htmlFor="search-patient" sx={{ color: '#fff' }}>
          My Patients
        </InputLabel>
        <Input
          id="search-patient"
          type="text"
          value={value}
          onChange={handleChange}
          sx={{ color: '#fff' }}
          endAdornment={
            <InputAdornment position="end" sx={{ color: '#fff' }}>
              <SearchOutlined fontSize="medium" />
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
  );
}
