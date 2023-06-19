export const testAuthLogin = {
  mail: 'demo@gmail.com',
  password: 'demo1129'
}

export const testAuthRegister = {
  name: 'Juan Méndez',
  age: 40,
  mail: 'juan@gmail.com',
  password: 'juan1129'
}

export const testAuthLoginUser = {
  mail: 'juan@gmail.com',
  password: 'juan1129'
}

export const testUserStorageAuthRegister = {
  name: 'Danie Méndez',
  age: 40,
  mail: 'daniel@gmail.com',
  password: 'juan1129'
}

export const testAgency = {
  code: '111222',
  name: 'Demo',
  status: true,
  region: '15',
  province: '03',
  district: '03',
  geolocation: '150303',
  address: 'Calle XY'
}

export const testCreditCard = {
  bin: '123666',
  binStart: '188118',
  binEnd: '818181',
  logoCode: '808',
  tioAux: 'VISDAS',
  productName: 'Visa Daniel Demo LATAMPASS',
  commercialName: 'Visa Daniel Demo  LATAM Pass',
  brandName: 'VISA',
  creditCardLevel: 8,
  status: true,
  plasticChoice: true,
  nickname: true,
  minCreditLine: 750,
  maxCreditLine: 25000,
  programBenefitCode: 'LATAMPASS',
  urlDesk: 'http://storage/folder/img.png',
  urlMobile: 'http://storage/folder/img.png',
  createdBy: 'danielsanchez@bbc.com.pe',
  createdDate: '2022-05-12T09:30:00Z',
  lastModifiedBy: 'danielsanchez@bbc.com.pe',
  lastModifiedDate: '2022-05-12T09:30:00Z'
}

export const testProduct = {
  bin: '909090', // SI OBLIGATORIO - VALIDAR QUE NO EXISTA OTRO
  binStart: '11111112', // SI
  binEnd: '11111119', // SI
  logoCode: '111', // SI OBLIGATORIO - VALIDAR QUE NO EXISTA OTRO
  tioAux: 'TCTCTC', // SI OBLIGATORIO - VALIDAR QUE NO EXISTA OTRO
  productName: 'Visa DEMO LATAMPASS', // SI OBLIGATORIO
  commercialName: 'Visa DEMO  LATAM Pass', // SI OBLIGATORIO
  brandName: 'VISA', // SI OBLIGATORIO
  creditCardLevel: 8, // SI
  status: false, // SI OBLIGATORIO
  plasticChoice: false, // SI
  nickname: true, // SI
  minCreditLine: 1800, // SI
  maxCreditLine: 25000, // NO
  programBenefitCode: 'LATAMPASS', // SI
  urlDesk: 'http://storage/folder/img.png', // SI OBLIGATORIO
  urlMobile: 'http://storage/folder/img.png', // SI OBLIGATORIO
  createdBy: 'danielsanchez@bbc.com.pe', // SI OBLIGATORIO
  createdDate: '2022-05-12T09:30:00Z' // SI OBLIGATORIO
}
