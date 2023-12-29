import { Footer } from '@/components/footer'
import { Form } from '@/components/form'
import Header from '@/components/header'

import HeadLine from './headline'

export default function App() {
  return (
    <>
      <Header />
      <HeadLine />
      <Form />
      <Footer id={'contacts'} />
    </>
  )
}
