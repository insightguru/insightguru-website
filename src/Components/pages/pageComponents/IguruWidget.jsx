import React from 'react'
import { Helmet } from "react-helmet";



function IguruWidget() {
    return (
        <>

            <div className="iguru_Widget_Container">
                <iguru data-associateid=""></iguru>
            </div>

            <Helmet>
                <script src="https://8f9p2muuv3.execute-api.ap-southeast-1.amazonaws.com/stage/iguru/redirect"></script>
            </Helmet>

        </>
    )
}

export default IguruWidget
