import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class BillingCycle extends Component{
    render(){

        return(            
            <div>
                <ContentHeader title='Ciclos de pagamento' small='Cadastro' />
                
                <Content>
                <h1>Ciclos de pagamento</h1>
                </Content>                    
            </div>
        )
    }
}

export default BillingCycle