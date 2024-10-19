import { atom, selector } from 'recoil';

export const usernameState = atom({
  key: 'usernameState',
  default: '',
});

export const phoneState = atom({
  key: 'phone',
  default: '',
});

export const lastNameState = atom({
  key: 'lastNameState',
  default: '',
});

export const passwordState = atom({
  key: 'passwordState',
  default: '',
});

export const usersState = atom({
    key: "users", 
    default: []
  })