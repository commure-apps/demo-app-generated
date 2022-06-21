import { Patient } from './Patient';

export interface DataConfig {
  apiUrl: string;
}

export async function patientListRequest(config: DataConfig): Promise<Patient[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: "07304899",
          name: "Alan Parrish",
          mrn: "M35Y",
          birthdate: "19-04-1991",
          gender: "Male",
          location: "Brantford",
          symptoms: "Shortness of breath, Headache"
        },
        {
          id: "55799558",
          name: "Sarah Whittle",
          mrn: "M64K",
          birthdate: "07-02-1989",
          gender: "Female",
          location: "Brantford",
          symptoms: "Aching body, Soreness"
        },
        {
          id: "91852739",
          name: "Sam Parrish",
          mrn: "M64K",
          birthdate: "18-07-1921",
          gender: "Male",
          location: "Brantford",
          symptoms: "Sore throat"
        },
        {
          id: "14583430",
          name: "Carol Parrish",
          mrn: "M64K",
          birthdate: "20-11-1930",
          gender: "Female",
          location: "Brantford",
          symptoms: "Runny nose"
        },
        {
          id: "58126947",
          name: "Carl Bentley",
          mrn: "M64K",
          birthdate: "19-04-1991",
          gender: "Male",
          location: "Brantford",
          symptoms: "Loss of appetite"
        }
      ]);
    }, 2000);
  });
}
