import api from '../services/api'

// action creator
export function getSummary(){
    const request = api.get('/billingCycles/summary')
    
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}