export type Specialty = {
  id: number;
  name: string;
};

export type Gender = {
  name: "male" | "female" | "other";
};

export type Clinic = {
  id: number;
  name: string;
  address: string | null;
  city: string | null;
  state: string | null;
  zipCode: string | null;
  phone: string | null;
};

export type ProviderProps = {
  id: number;
  name: string;
  email: string;
  phone: string;
  gender: "male" | "female" | "other";
  about: string | null;
  languages: string[] | null;
  profilePic: string | null;
  specialty: Specialty;
  clinics: Clinic[];
  isFavorited: boolean;
};

export type ProviderCardProps = {
  provider: ProviderProps;
};
