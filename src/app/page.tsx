import { Footer } from '@/components/footer'
// import { Form } from '@/components/form'
// import Heading from '@/components/heading'

import { BenefitsSection } from './sections/benefits'
import { EventAgendaSection } from './sections/event-agenda'
import { EventInformationsSection } from './sections/event-information'
import { OtherEventsSection } from './sections/other-events'
import { Sponsors } from './sections/sponsors'

/* eslint-disable prettier/prettier */

export default function App() {
  return (
    <main>
      {/* <Heading /> */}
      <div> 
        <BenefitsSection />
        <EventAgendaSection /> 
        <EventInformationsSection />
        <OtherEventsSection /> 
        <Sponsors />
      </div> 
        <Footer /> 
    {/*
        <Form /> */}
    </main>
  )
}
