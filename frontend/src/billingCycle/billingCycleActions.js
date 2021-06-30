import api from '../services/api'

export function getList(){
    const request = api.get('/billingCycles')
    return{
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values){
    api.post('/billingCycles', values)
    return{
        type: 'TEMP',
        
    }
}