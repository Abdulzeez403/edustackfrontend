export interface Url {
  id?: string;
  originalUrl?: string;
  shortUrl?: string;
  visitCount?: number;
  domain?: string;
  faviconUrl?: string;
  status: "active" | "inactive"; // Add this line
  createdAt: Date; // Add this line
}

export interface IUser {
  id?: string;
  name: string;
  phone: string;
  email: string;
  salary?: string;
  role: string;
  joiningDate: string;
  status: "active" | "inactive"; // Add this line
}

export interface IRole {
  id?: string;
  role: string;
}

export interface IClasses {
  id?: string;
  name: string;
}

export interface ISession {
  id?: string;
  session: string;
  startDate: string;
  endDate: string;
}
