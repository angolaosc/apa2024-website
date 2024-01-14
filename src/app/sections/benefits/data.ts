import { Lightning } from '@phosphor-icons/react/dist/ssr'
import { i18n } from '@/translate/i18n'

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
    title: i18n.t('section_2.card_1.title'),
    paragraph: i18n.t('section_2.card_1.description'),
  },
  {
    id: 1,
    Icon: Lightning,
    title: i18n.t('section_2.card_2.title'),
    paragraph: i18n.t('section_2.card_2.description'),
  },
  {
    id: 2,
    Icon: Lightning,
    title: i18n.t('section_2.card_3.title'),
    paragraph: i18n.t('section_2.card_3.description'),
  },
]
