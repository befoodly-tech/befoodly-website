export interface AppConfig {
  BASE_URL: string;
}

export interface CustomCardProps {
  title: string;
  description: string;
  photoUrl: string;
  author: string;
}

export interface TeamCardProps {
  photoUrl: string;
  name: string;
  title: string;
  description: string;
  linkedinLink: string;
}

export interface Location {
  id: number;
  title: string;
  address: string;
}
