export interface IEmployee {
  id: string;
  name: string;
  email: string;
  position: string;
}

export interface IEmployees {
  employees: IEmployee[];
}
