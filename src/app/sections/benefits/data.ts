import { Lightning } from '@phosphor-icons/react/dist/ssr'

export interface PropsType {
  id?: number
  Icon: any
  title: string
  paragraph: string
}

export const BENEFITS: PropsType[] = [
  {
    id: 0,
    Icon: Lightning,
    title: 'Networking',
    paragraph: 'Resolução de problemas, discussões e colaboração face a face',
  },
  {
    id: 1,
    Icon: Lightning,
    title: 'Aprender',
    paragraph: 'Aprenda sobre as últimas tendências em ciência da computação e tecnologias abertas',
  },
  {
    id: 2,
    Icon: Lightning,
    title: 'Acelerar',
    paragraph: 'Obtenha uma vantagem competitiva aprendendo sobre o que há de mais moderno em soluções abertas inovadoras',
  },
]
