import api from '../services/api'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const INITIAL_VALUES = {credits: [{}], debts: [{}]}

export function getList(){
    const request = api.get('/billingCycles')
    return{
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values){
    return submit(values, 'post')
}

export function update(values){
    return submit(values, 'put')    
}

export function remove(values){
    return submit(values, 'delete')    
}

function submit(values, method){
    return dispatch => {
        const id = values._id ? values._id : ''
        api[method](`/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }    
}

// reusar método - utilizar método showTab
export function showUpdate(billingCycle){
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function showDelete(billingCycle){
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init(){
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}