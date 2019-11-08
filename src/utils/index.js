export { default as in_object } from './in_object';
export { default as noop } from './noop';
export { default as datasets, filter, sanitize } from './datasets';
export { default as sleep } from './sleep';
export { default as objectToQueryString } from './objectToQueryString';
export { exec } from 'utils/external';
export * from './lang';

export const toObject = stringOrObject => {
  let data = stringOrObject;
  try {
    data = JSON.parse(data);
  } catch (e) {}

  return data;
};
