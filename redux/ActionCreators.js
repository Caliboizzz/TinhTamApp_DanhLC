import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

// users
export const loginUser = (userinfo) => ({
  type: ActionTypes.LOGIN_USER,
  payload: userinfo
});
export const logoutUser = () => ({
  type: ActionTypes.LOGOUT_USER,
  payload: null
});

// doctors
export const fetchDoctors = () => (dispatch) => {
  dispatch(doctorsLoading());
  return fetch(baseUrl + 'doctors')
    .then((response) => {
      if (!response.ok) throw Error('Error ' + response.status + ': ' + response.statusText);
      else return response.json();
    })
    .then((doctors) => dispatch(addDoctors(doctors)))
    .catch((error) => dispatch(doctorsFailed(error.message)));
};
const doctorsLoading = () => ({
  type: ActionTypes.DOCTORS_LOADING
});
const doctorsFailed = (errmess) => ({
  type: ActionTypes.DOCTORS_FAILED,
  payload: errmess
});
const addDoctors = (doctors) => ({
  type: ActionTypes.ADD_DOCTORS,
  payload: doctors
});

// services
export const fetchServices = () => (dispatch) => {
  dispatch(servicesLoading());
  return fetch(baseUrl + 'services')
    .then((response) => {
      if (!response.ok) throw Error('Error ' + response.status + ': ' + response.statusText);
      else return response.json();
    })
    .then((services) => dispatch(addServices(services)))
    .catch((error) => dispatch(servicesFailed(error.message)));
};
const servicesLoading = () => ({
  type: ActionTypes.SERVICES_LOADING
});
const servicesFailed = (errmess) => ({
  type: ActionTypes.SERVICES_FAILED,
  payload: errmess
});
const addServices = (services) => ({
  type: ActionTypes.ADD_SERVICES,
  payload: services
});