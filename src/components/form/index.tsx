/* eslint-disable @typescript-eslint/naming-convention */
'use client'
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { Upload } from '@phosphor-icons/react/dist/ssr'

import { Button } from '../button'
import { type PropsTypeForm } from './interface'
import { schemaForm } from './schema'
import styles from './styles.module.css'

export const Form = () => {
  const [imagePath, setImagePath] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PropsTypeForm>({ resolver: yupResolver(schemaForm) })

  const onSubmit: SubmitHandler<PropsTypeForm> = (data) => {
    // const { company_name, email, phone, input_file } = data
    console.log(data)

    // alert(`
    //  Empresa: ${company_name}
    //  Email: ${email}
    //  Telefone: ${phone}`)
  }

  const {
    form,
    inputArea,
    inputs,
    label,
    input,
    error,
    inputFile,
    customInput,
    imageInfo,
    s_form,
    container_area,
    header,
    title,
    paragraph,
  } = styles

  return (
    <section className={s_form}>
      <div className={container_area}>
        <header className={header}>
          <h2 className={title}>Seja Nosso Patrocinador</h2>
          <p className={paragraph}>
            Para patrocinar, precise preencher o formulário com os dados do patrocinador
          </p>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className={form}>
          <div className={inputs}>
            <div className={inputArea}>
              <label htmlFor="name" className={label}>
                Nome da Organização
              </label>
              <input type="text" id="name" className={input} {...register('company_name')} />
              <span className={error}>{errors.company_name?.message}</span>
            </div>

            <div className={inputArea}>
              <label htmlFor="email" className={label}>
                Email
              </label>
              <input type="email" id="email" className={input} {...register('email')} />
              <span className={error}>{errors.email?.message}</span>
            </div>

            <div className={inputArea}>
              <label htmlFor="phone" className={label}>
                Telefone
              </label>
              <input type="number" id="phone" className={input} {...register('phone')} />
              <span className={error}>{errors.phone?.message}</span>
            </div>

            <div>
              <Button type="submit" content={'Saiba como patrocinar'} />
            </div>
          </div>

          <div className={inputFile}>
            <label htmlFor="file" className={label}>
              Logotipo da organização
            </label>
            <div>
              <div className={customInput}>
                <Upload color="#fff" size={32} />
                <span className={imageInfo}>
                  {imagePath.length === 0 ? 'Carregue o seu arquivo' : imagePath}
                </span>
              </div>
              <input
                type="file"
                accept="image/*"
                id="file"
                {...register('image')}
                required
                className={input}
                onChange={(e) => {
                  setImagePath(e.target.value.slice(12))
                }}
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
