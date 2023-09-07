import { useState } from 'react'
import '../styles/Contact.css'

function Contact() {

    let [contacts, setContacts] = useState([
        {
            title: "iGuru Development Team",
            details: 'development.team@insightguru.com'
        }, {
            title: "iGuru Feedback Team",
            details: 'feedback.team@insightguru.com'
        }, {
            title: "iGuru Management  Team",
            details: 'management.team@insightguru.com'
        }, {
            title: "iGuru Marketplace Team",
            details: 'marketplace.team@insightguru.com'
        }, {
            title: "iGuru Recruitment Team",
            details: 'recruitment.team@insightguru.com'
        }
    ])


    return (
        <>
            <div className="contact_us_Container">
                <div className='Contact_Details_Listing'>


                    {
                        contacts.map((contact, ind) => {
                            return (
                                <div className="contacts" key={contact.title + ind + Math.random() * 1000}>
                                    <p className='contact_title'>{contact.title}</p>
                                    <a className='contact_details' href={`mailto:${contact.details}`}>{contact.details}</a>
                                </div>
                            )
                        })
                    }


                    <div className="contacts">
                        <p className='contact_title'>iGuru Ventures Private Limited</p>
                        <p className='contact_details'>602 Silver Beliza, 48 St. Francis Avenue, SantaCruz West, Mumbai, Maharashtra 400054, India</p>
                    </div>

                    <div className="contacts">
                        <p className='contact_title'>Google Maps</p>
                        <a className='contact_details' href='https://goo.gl/maps/Ejd7wDA4hm11mnWx6' target='_blank'>https://goo.gl/maps/Ejd7wDA4hm11mnWx6</a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact
