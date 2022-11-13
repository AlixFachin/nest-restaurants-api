// type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';

export interface Restaurant {
  id: string;
  name: string;
  tags: string[];
  //TODO: Restrict the day of the week with a union type
  regularClose: string[];
  area: string;
  address: string;
  phone: string;
}
