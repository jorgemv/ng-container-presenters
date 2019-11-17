export interface Participant {
  id: number;
  basic: {
    firstName: string;
    lastName: string;
    email: string;
    gender: Gender;
    age: number;
    phone: {
      areaCode: number;
      phoneNumber: number;
    }
  };
  address: {
    street: string;
    number: string;
    postal: number;
  };
  creditCards:
    {
      cardAlias: string;
      cardHolderName: string;
      cardNumber: number;
      ccv: number;
    }[];
}

export enum Gender { 'male', 'female' };
