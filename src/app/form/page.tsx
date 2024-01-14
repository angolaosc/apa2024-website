import { Footer } from '@/components/footer'
import { Step } from '@/components/step'
import Header from '@/components/header'

import HeadLine from './headline'

export default function App() {
  return (
    <>
      <Header />
      <HeadLine />
      <Step />
      <Footer id={'contacts'} />
    </>
  )
}
