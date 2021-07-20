import { test, reduce } from 'ramda';

export const required = (message) => (value) => !value && message;

export const emailFormat = (message) => (value) => value && !test(/\S+@\S+\.\S+/)(value) && message;

export const passwordFormat = (message) => (value) => value.length <= 5 && message;

export const samePassword = (message) => (value, { password }) => password !== value && message;

export const composeValidators = (...validators) => (value, values) =>
  reduce((error, validator) => error || validator(value, values), undefined)(validators);
