import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from './billingCycleActions'

class BillingCycleList extends Component{

    componentDidMount(){
        this.props.getList()
        console.log(this.props.list)
    }

    render(){
        return(
            <table className='table'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Mês</th>
                        <th>Ano</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => ({ list: state.billingCycle.list }) // joga o estado nas props
const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch) // dispara ação para reducers
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)