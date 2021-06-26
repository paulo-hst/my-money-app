import api from '../services/api'

const BASE_URL = 'http://localhost:3003/api'

// action creator
export function getSummary(){
    const request = api.get('/billingCycles/summary')
    
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}