export type Specialty = {
  id: number;
  name: string;
};

export type Gender = {
  id: number;
  name: "male" | "female" | "other";
};

export type Clinic = {
  id: number;
  name: string;
  address: string | null;
  city: string | null;
  state: string | null;
  zip_code: string | null;
  phone: string | null;
};

export type ProviderProps = {
  id: number;
  name: string;
  email: string;
  phone: string;
  gender: Gender;
  about: string | null;
  languages: string[] | null;
  profile_pic: string | null;
  specialty: Specialty[];
  clinics: Clinic[];
  is_favorited: boolean;
};

export type ProviderCardProps = {
  provider: ProviderProps;
};
