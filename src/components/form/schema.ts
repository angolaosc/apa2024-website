/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import * as yup from 'yup'

export const schemaForm = yup.object({
  email: yup
    .string()
    .required('O email é obrigatório!!')
    .test('email-validation', 'Email inválido.', (email) => {
      const emailRegex =
        /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/
      if (email?.match(emailRegex)) return true
    }),
  company_name: yup
    .string()
    .required('O nome da impresa é obrigatório!!')
    .min(2, 'O nome da impresa precisa de 2 letras no mínimo'),
  phone: yup
    .string()
    .required('O telefone é obrigatório!!')
    .test('phone-validation', 'Número de telefone inválido.', (phone) => {
      const phoneRegex = /^([0-9]{2,3}?)?[0-9]{9}$/

      if (phone?.match(phoneRegex)) return true
    }),
})
