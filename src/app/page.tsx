import { EventAgendaSection } from './sections/event-agenda'
import { OtherEventsSection } from './sections/other-events'

export default function App() {
  return (
    <main>
      <div>
        <EventAgendaSection />
        <OtherEventsSection />
      </div>
    </main>
  )
}
