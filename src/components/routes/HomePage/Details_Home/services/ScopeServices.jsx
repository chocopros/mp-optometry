import React from 'react'
import styled from 'styled-components'
import CardServices from './card_services/CardServices'


const ScopeServices = () => {
  return (
    <SectionScopeServices>
        <h2>Full Scope Optometric Services</h2>
        <p className='details_services'>We treat our patients with the most careful and individual approach, stylish eye-wear and latest innovations in contact lenses in a relaxed and friendly environment.</p>
        <section className='container__services'>

            <CardServices
                iconUrl="/images/Services_home/lupa.png"
                title="Comprehensive Eye Exams"
                textDescription="We stick to a complete and full oculat examination process with every patient, every time."
            />

            <CardServices
                iconUrl="/images/Services_home/lentes2.png"
                title="Comprehensive Eye Exams"
                textDescription="Provided is a huge spectr of services, including hand-picked designer frames and glasses."
            />

            <CardServices
                iconUrl="/images/Services_home/contactlens.png"
                title="Comprehensive Eye Exams"
                textDescription="Effective and immediate assistance with getting the perfect pair of high quality eye lens."
            />

            <CardServices
                iconUrl="/images/Services_home/focus.png"
                title="Comprehensive Eye Exams"
                textDescription="Itchy red eyes? Had an accident? Slept in your contacts last night? We will fix everything!"
            />

        </section>
    </SectionScopeServices>
  )
}

export default ScopeServices

const SectionScopeServices = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px 0;

    max-width: 1300px;
    margin: 100px auto;

    .details_services{
        text-align: center;
        padding: 0 20px;
    }


    .container__services{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
        padding: 30px 0;
    }

`

