import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList, showUpdate } from './billingCycleActions'

class BillingCycleList extends Component{

    componentDidMount(){
        this.props.getList()
    }

    renderRows(){
        const list = this.props.list || []

        return list.map(item => (
            <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.month}</td>
                <td>{item.year}</td>
                <td>
                    <button 
                        className="btn btn-warning" 
                        onClick={() => this.props.showUpdate(item)}
                    >
                        <i className='fa fa-pencil'></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render(){
        return(
            <table className='table'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Mês</th>
                        <th>Ano</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => ({ list: state.billingCycle.list }) // joga o estado nas props
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate}, dispatch) // dispara ação para reducers
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)