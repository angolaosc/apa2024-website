import { Footer } from '@/components/footer'
import Header from '@/components/header'
import Headline from '@/components/headline'

import { BenefitsSection } from './sections/benefits'
import { EventInformationsSection } from './sections/event-information'
import { OtherEventsSection } from './sections/other-events'
import { Sponsors } from './sections/sponsors'

/* eslint-disable prettier/prettier */

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Headline />
        <BenefitsSection />
        {/*   <EventAgendaSection id="schedule" />  */}
        <EventInformationsSection id="information" />
        <OtherEventsSection />
        <Sponsors id="partner" />
      </main>
      <Footer id="contact" />
    </>
  )
}
