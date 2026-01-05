export interface Instrument {
  id: string;
  name: string;
  type: string;
  image: string;
  isCheckedOut: boolean;
  checkedOutBy: string | null;
  checkedOutAt: string | null;
}

export const instruments: Instrument[] = [
  {
    id: '1',
    name: 'Irumbu Parai',
    type: 'Parai',
    image: '/APTWebsite/images/IrumbuParai.jpeg',
    isCheckedOut: false,
    checkedOutBy: null,
    checkedOutAt: null
  },
  {
    id: '2',
    name: 'Kombu Back',
    type: 'Kombu',
    image: '/APTWebsite/images/KombuBack-1.jpeg',
    isCheckedOut: true,
    checkedOutBy: 'Ayyappan Gengadurai',
    checkedOutAt: '2024-01-15T10:30:00Z'
  },
  {
    id: '3',
    name: 'Kombu Front',
    type: 'Kombu',
    image: '/APTWebsite/images/KombuFront-1.jpeg',
    isCheckedOut: false,
    checkedOutBy: null,
    checkedOutAt: null
  },
  {
    id: '4',
    name: 'Melam',
    type: 'Melam',
    image: '/APTWebsite/images/Melam.jpeg',
    isCheckedOut: true,
    checkedOutBy: 'Anand Shanmugam',
    checkedOutAt: '2024-01-14T14:20:00Z'
  },
  {
    id: '5',
    name: 'Pambai',
    type: 'Pambai',
    image: '/APTWebsite/images/Pambai.jpeg',
    isCheckedOut: false,
    checkedOutBy: null,
    checkedOutAt: null
  },
  {
    id: '6',
    name: 'Sangu 1',
    type: 'Sangu',
    image: '/APTWebsite/images/Sangu-1.jpeg',
    isCheckedOut: true,
    checkedOutBy: 'Divya Vinoth',
    checkedOutAt: '2024-01-13T09:15:00Z'
  },
  {
    id: '7',
    name: 'Sangu 2',
    type: 'Sangu',
    image: '/APTWebsite/images/Sangu-2.jpeg',
    isCheckedOut: false,
    checkedOutBy: null,
    checkedOutAt: null
  },
  {
    id: '8',
    name: 'Sivan Kombu',
    type: 'Kombu',
    image: '/APTWebsite/images/SivanKombu.jpeg',
    isCheckedOut: true,
    checkedOutBy: 'Rajesh Masilamani',
    checkedOutAt: '2024-01-12T16:45:00Z'
  },
  {
    id: '9',
    name: 'Thudumbu',
    type: 'Thudumbu',
    image: '/APTWebsite/images/Thudumbu-1.jpeg',
    isCheckedOut: false,
    checkedOutBy: null,
    checkedOutAt: null
  },
  {
    id: '10',
    name: 'Udukkai',
    type: 'Udukkai',
    image: '/APTWebsite/images/Udukkai.jpeg',
    isCheckedOut: false,
    checkedOutBy: null,
    checkedOutAt: null
  },
  {
    id: '11',
    name: 'Urumi',
    type: 'Urumi',
    image: '/APTWebsite/images/Urumi.jpeg',
    isCheckedOut: true,
    checkedOutBy: 'Vijay Chakravarthy',
    checkedOutAt: '2024-01-11T11:30:00Z'
  },
  {
    id: '12',
    name: 'Uruttu Satti',
    type: 'Uruttu Satti',
    image: '/APTWebsite/images/UruttuSatti.jpg',
    isCheckedOut: false,
    checkedOutBy: null,
    checkedOutAt: null
  }
];