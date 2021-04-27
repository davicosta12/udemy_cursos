import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = { credits: [{}], debts: [{}] }

export const getList = () => {
  const request = axios.get(`${BASE_URL}/billingCycles`)
  return ({
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  })
}

export const create = values => {
  return submit(values, 'post')
}

export const update = values => {
  return submit(values, 'put')
}

export const remove = values => {
  return submit(values, 'delete')
}

const submit = (values, method) => {
  return dispatch => {
    const id = values._id ? values._id : ''
    axios[method](`${BASE_URL}/billingCycles/${id}`, values)
      .then(resp => {
        toastr.success('Sucesso', 'Operação realizada com sucesso!')
        /* redux-multi */
        dispatch(init())
      })
      .catch(e => {
        e.response.data.errors.forEach(error => toastr.error('Erro', error))
      })
    return {
      type: 'TEMP'
    }
  }
}

export const showUpdate = billingCycle => {
  /* redux-multi */
  return showTab('tabUpdate', billingCycle)
}

export const showDelete = billingCycle => {
  /* redux-multi */
  return showTab('tabDelete', billingCycle)
}

const showTab = (tab, billingCycle) => {
  return dispatch => dispatch([
    showTabs(`${tab}`),
    selectTab(`${tab}`),
    initialize('billingCycleForm', billingCycle)
  ])
}

export const init = () => {
  /* redux-multi */
  return dispatch => dispatch([
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    getList(),
    initialize('billingCycleForm', INITIAL_VALUES)
  ])
}