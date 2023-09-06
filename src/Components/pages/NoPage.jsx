import React from 'react'
import '../styles/404.css'

function NoPage() {
    return (
        <>
            {/* //404 page code is here when route is not exist  */}
            <div className='Page_Text_404_Container'>
                <p className='Text_404'>404</p>
                <p className='Text_404'>Page Not Found</p>
            </div>
        </>
    )
}

export default NoPage
