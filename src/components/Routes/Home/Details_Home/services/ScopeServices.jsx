import React from 'react'
import styled from 'styled-components'
import CardServices from './card_services/CardServices'


const ScopeServices = () => {
  return (
    <SectionScopeServices>
        <h2>Full Scope Optometric Services</h2>
        <p>We treat our patients with the most careful and individual approach, stylish eye-wear and latest innovations in contact lenses in a relaxed and friendly environment.</p>
        <section className='container__services'>

            <CardServices
                iconUrl="/images/Services_home/lupa.png"
                title="Comprehensive Eye Exams"
                textDescription="We stick to a complete and full oculat examination process with every patient, every time."
            />

            <CardServices
                iconUrl="/images/Services_home/lupa.png"
                title="Comprehensive Eye Exams"
                textDescription="We stick to a complete and full oculat examination process with every patient, every time."
            />

            <CardServices
                iconUrl="/images/Services_home/lupa.png"
                title="Comprehensive Eye Exams"
                textDescription="We stick to a complete and full oculat examination process with every patient, every time."
            />

            <CardServices
                iconUrl="/images/Services_home/lupa.png"
                title="Comprehensive Eye Exams"
                textDescription="We stick to a complete and full oculat examination process with every patient, every time."
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
    height: 800px;
    gap: 30px 0;

    max-width: 1300px;
    margin: 0 auto;


    .container__services{
        display: flex;
        flex-wrap: wrap;
        gap: 0 30px;
    }

`

