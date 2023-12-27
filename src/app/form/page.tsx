import { Footer } from '@/components/footer'
import { Form } from '@/components/form'
import Header from '@/components/header'

import Heading from './heading'

export default function App() {
  return (
    <>
      <Header />
      <Heading />
      <Form />
      <Footer id={'contacts'} />
    </>
  )
}
