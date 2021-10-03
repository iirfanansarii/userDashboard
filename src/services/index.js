import { messages } from '../utils/constants';

export const registerUser = async (payload) => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const existingUser = users.find((u) => u.email === payload.email);
  if (existingUser) {
    return { status: false, message: messages.userAlreadyExists };
  }
  users.push(payload);
  localStorage.setItem('users', JSON.stringify(users));
  return { status: true, message: messages.userCreated };
};

export const loginUser = async (payload) => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const existingUser = users.find((u) => u.email === payload.email);
  if (existingUser) {
    if (existingUser.password === payload.password) {
      localStorage.setItem('user', JSON.stringify(existingUser));
      return { status: true, message: messages.loggedIn };
    }
    return { status: false, message: messages.wrongCredentials };
  }
  return { status: false, message: messages.userNotExists };
};

export const logoutUser = async (payload) => {
  localStorage.removeItem('user');
};
