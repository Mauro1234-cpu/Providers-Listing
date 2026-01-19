type Specialty = {
  id: number;
  name: string;
};

export type Clinic = {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  phone: string;
};

export type ProviderProps = {
  id: number;
  name: string;
  email: string;
  phone: string;
  gender: string;
  about: string;
  languages: string[];
  profile_pic: string;
  specialty: Specialty;
  clinics: Clinic[];
};

export type ProviderCardProps = {
  provider: ProviderProps;
};
