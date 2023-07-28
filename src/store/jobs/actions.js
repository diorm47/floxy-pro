import {
    GET_JOB_LIST,
    GET_JOB_LIST_FAIL,
    GET_JOB_LIST_SUCCESS,
    ADD_NEW_JOB_LIST,
    ADD_JOB_LIST_SUCCESS,
    ADD_JOB_LIST_FAIL,
    UPDATE_JOB_LIST,
    UPDATE_JOB_LIST_SUCCESS,
    UPDATE_JOB_LIST_FAIL,
    DELETE_JOB_LIST,
    DELETE_JOB_LIST_SUCCESS,
    DELETE_JOB_LIST_FAIL,
    GET_APPLY_JOB,
    GET_APPLY_JOB_SUCCESS,
    GET_APPLY_JOB_FAIL,
    DELETE_APPLY_JOB,
    DELETE_APPLY_JOB_SUCCESS,
    DELETE_APPLY_JOB_FAIL,
  } from "./actionTypes";
  
  export const getJobList = () => ({
    type: GET_JOB_LIST,
  })
  
  export const getJobListSuccess = jobs => ({
    type: GET_JOB_LIST_SUCCESS,
    payload: jobs,
  })
  
  export const getJobListFail = error => ({
    type: GET_JOB_LIST_FAIL,
    payload: error,
  })
  
  export const addNewJobList = data => ({
    type: ADD_NEW_JOB_LIST,
    payload: data,
  })
  
  export const addJobListSuccess = job => ({
    type: ADD_JOB_LIST_SUCCESS,
    payload: job,
  })
  
  export const addJobListFail = error => ({
    type: ADD_JOB_LIST_FAIL,
    payload: error,
  })
  
  export const updateJobList = job => ({
    type: UPDATE_JOB_LIST,
    payload: job,
  })
  
  export const updateJobListSuccess = job => ({
    type: UPDATE_JOB_LIST_SUCCESS,
    payload: job,
  })
  
  export const updateJobListFail = error => ({
    type: UPDATE_JOB_LIST_FAIL,
    payload: error,
  })
  
  export const deleteJobList = data => ({
    type: DELETE_JOB_LIST,
    payload: data,
  })
  
  export const deleteJobListSuccess = data => ({
    type: DELETE_JOB_LIST_SUCCESS,
    payload: data,
  })
  
  export const deleteJobListFail = error => ({
    type: DELETE_JOB_LIST_FAIL,
    payload: error,
  })
  
  export const getApplyJob = () => ({
    type: GET_APPLY_JOB,
  })
  
  export const getApplyJobSuccess = data => ({
    type: GET_APPLY_JOB_SUCCESS,
    payload: data
  })
  
  export const getApplyJobFail = error => ({
    type: GET_APPLY_JOB_FAIL,
    payload: error
  })
  
  export const deleteApplyJob = data => ({
  type: DELETE_APPLY_JOB,
  payload: data
  })
  
  export const deleteApplyJobSuccess = data => ({
  type: DELETE_APPLY_JOB_SUCCESS,
  payload: data
  })
  
  export const deleteApplyJobFail = error => ({
  type: DELETE_APPLY_JOB_FAIL,
  payload: error
  })