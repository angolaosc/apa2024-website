import { Footer } from '@/components/footer'
import Heading from '@/components/heading'

import { EventAgendaSection } from './sections/event-agenda'
import { OtherEventsSection } from './sections/other-events'
/* eslint-disable prettier/prettier */

export default function App() {
  return (
    <main>
      <Heading />
      <div>
        <EventAgendaSection /> 
        <OtherEventsSection /> 
      </div>
        <Footer />
    </main>
  )
}
