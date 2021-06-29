import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class TabContent extends Component{
    render(){

        // tab selecionada
        const selected = this.props.tab.selected === this.props.id

        return(
            // compara se a tab estiver ativa ou não
            <div id={this.props.id} className={`tab-pane ${selected ? 'active': ''}`}>
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = state => ({ tab: state.tab })

export default connect(mapStateToProps)(TabContent)