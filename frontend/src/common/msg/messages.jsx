import React from 'react'
import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

export default props => (
    <ReduxToastr 
        timeOut={4000}
        newestOnTop={true}
        preventDuplicates={true}
        position='top-right'
        transitionOut='fadeOut'
        transitionIn='fadeIn'
        progressBar
    />
)