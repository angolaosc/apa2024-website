import {
  type PropsTypeEventInformation,
  type PropsTypeCardInformation,
  type PropsTypeEvent,
  type PropsTypeSponsors,
  type PropsTypeSponsor,
  type PropsTypeVolunteerProfessionals,
  type PropsTypeSocialMedia,
} from '@/interfaces/data'
import {
  CalendarBlank,
  Users,
  Video,
  PlayCircle,
  WarningCircle,
  EnvelopeSimple,
  Phone,
  FacebookLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
  GithubLogo,
} from '@phosphor-icons/react/dist/ssr'

import AlfranioAlves from '../public/professionals/alfranio-alves.png'
import MarioMonteiro from '../public/professionals/mario-monteiro.png'
import MrAguinaldo from '../public/professionals/mraguinaldo.jpeg'

// O atributo state pode ser prenchido do seguinte modo: "accomplished", "canceled", "inProgress"
export const EVENTS: PropsTypeEvent[] = [
  {
    id: 0,
    headerTitle: 'Quinta feira, 24 Dezembro, 2023: Inovação e Tendências Tecnológicas',
    position: 1,
    activities: [
      {
        id: 0,
        title: 'Introdução à Inteligência Artificial',
        specialGuest: 'Dr. Maria Silva, CEO da TechGenius',
        state: 'accomplished',
        date: '09:00 - 10:30 GMT+1',
      },
      {
        id: 1,
        title: 'Introdução à Inteligência Artificial',
        specialGuest: 'Dr. Maria Silva, CEO da TechGenius',
        state: 'accomplished',
        date: '09:00 - 10:30 GMT+1',
      },
      {
        id: 2,
        title: 'Introdução à Inteligência Artificial',
        specialGuest: 'Dr. Maria Silva, CEO da TechGenius',
        state: 'accomplished',
        date: '09:00 - 10:30 GMT+1',
      },
      {
        id: 3,
        title: 'Introdução à Inteligência Artificial',
        specialGuest: 'Dr. Maria Silva, CEO da TechGenius',
        state: 'canceled',
        date: '09:00 - 10:30 GMT+1',
      },
      {
        id: 4,
        title: 'Introdução à Inteligência Artificial',
        specialGuest: 'Dr. Maria Silva, CEO da TechGenius',
        state: 'accomplished',
        date: '09:00 - 10:30 GMT+1',
      },
      {
        id: 5,
        title: 'Introdução à Inteligência Artificial',
        specialGuest: 'Dr. Maria Silva, CEO da TechGenius',
        state: 'accomplished',
        date: '09:00 - 10:30 GMT+1',
      },
    ],
  },
  {
    id: 1,
    headerTitle: 'Quinta feira, 24 Dezembro, 2023: Inovação e Tendências Tecnológicas',
    position: 2,
    activities: [
      {
        id: 0,
        title: 'Introdução à Inteligência Artificial',
        specialGuest: 'Dr. Maria Silva, CEO da TechGenius',
        state: 'accomplished',
        date: '09:00 - 10:30 GMT+1',
      },
      {
        id: 1,
        title: 'Introdução à Inteligência Artificial',
        specialGuest: 'Dr. Maria Silva, CEO da TechGenius',
        state: 'inProgress',
        date: '09:00 - 10:30 GMT+1',
      },
      {
        id: 2,
        title: 'Introdução à Inteligência Artificial',
        specialGuest: 'Dr. Maria Silva, CEO da TechGenius',
        state: 'accomplished',
        date: '09:00 - 10:30 GMT+1',
      },
      {
        id: 3,
        title: 'Introdução à Inteligência Artificial',
        specialGuest: 'Dr. Maria Silva, CEO da TechGenius',
        state: 'inProgress',
        date: '09:00 - 10:30 GMT+1',
      },
    ],
  },
]

export const EVENTCARDINFORMATION: PropsTypeCardInformation[] = [
  {
    id: 10,
    urlVideo: 'https://www.youtube.com/embed/aZbVvl_eeMA?si=dVJ5WI5F9ReYRf75',
    date: '20 de Novembro de 2020',
    Icon: CalendarBlank,
    title: 'Desenvolvendo sistemas com Elixir, José Valim',
    details: [
      { id: 0, Icon: Users, content: '100+ Participantes' },
      { id: 1, Icon: Video, content: '4000 Views' }
    ],
  },
  {
    id: 0,
    urlVideo: 'https://www.youtube.com/embed/aZbVvl_eeMA?si=dVJ5WI5F9ReYRf75',
    date: '3 de Novembro de 2021',
    Icon: CalendarBlank,
    title: 'Compiler engineering, Aaron Ballman',
    details: [
      { id: 0, Icon: Users, content: '150+ Participantes' },
      { id: 1, Icon: Video, content: '1700+ Views' }
    ],
  },
  {
    id: 3,
    urlVideo: 'https://www.youtube.com/embed/M0Wn4g4MNyY?si=DlpdRCugnj69_eNk',
    date: '10 de Novembro de 2020',
    Icon: CalendarBlank,
    title: 'C++: an invisible foundation, Bjarne Stroustrup',
    details: [
      { id: 0, Icon: Users, content: '50+ Participantes' },
      { id: 1, Icon: Video, content: '1000+ Views' }
    ],
  },
  {
    id: 1,
    urlVideo: 'https://www.youtube.com/embed/M0Wn4g4MNyY?si=DlpdRCugnj69_eNk',
    date: '6 de Novembro de 2020',
    Icon: CalendarBlank,
    title: 'Ciências de dados em Angola',
    details: [
      { id: 0, Icon: Users, content: '120+ Participantes' },
      { id: 1, Icon: Video, content: '600 Views' }
    ],
  },
  {
    id: 2,
    urlVideo: 'https://www.youtube.com/embed/1-hvhIoK01w?si=UM3zC4TtOkBcAIbp',
    date: '15 a 17 de Março de 2024',
    Icon: CalendarBlank,
    title: 'Q&A with Guido Van Rossum',
    details: [
     /*  { id: 0, Icon: Users, content: '+37 Participantes' },
      { id: 1, Icon: Users, content: '10 Palentrantes' },
      { id: 2, Icon: Users, content: '10 Registros' },
      { id: 3, Icon: Users, content: '15 patrocinadores' }, */
      { id: 0, Icon: Users, content: '90+ Participantes' },
      { id: 1, Icon: Video, content: '450+ Views' }
    ],
  },
 
  {
    id: 4,
    urlVideo: 'https://www.youtube.com/embed/vIyPqXRo0u4?si=ClDQWRVGzP5QAOTG',
    date: '10 de Novembro de 2020',
    Icon: CalendarBlank,
    title: 'Concorrência com linguagens funcionais, Alexandre Juca',
    details: [
      { id: 0, Icon: Users, content: '50+ Participantes' },
      { id: 1, Icon: Video, content: '300+ Views' }
    ],
  },
]

export const EVENTINFORMATION: PropsTypeEventInformation[] = [
  {
    id: 0,
    title: 'Sobre o Projeto',
    paragraph:
      'A Associação dos Programadores Angolanos (APA) tem o prazer de apresentar este evento revolucionário. Nosso objetivo é promover o avanço e a colaboração na comunidade de programação de Angola. Com uma visão centrada na inovação e no crescimento profissional, este evento visa reunir mentes criativas, líderes da indústria e entusiastas da tecnologia para compartilhar conhecimento, explorar tendências emergentes e estimular a criatividade.',
  },
  {
    id: 1,
    title: 'Missão',
    paragraph:
      'Nossa missão é fornecer um ambiente inclusivo e educacional, oferecendo oportunidades de aprendizado e networking de alto nível. Buscamos capacitar os participantes com habilidades relevantes, insights valiosos e conexões significativas que impulsionem suas carreiras e contribuam para o progresso tecnológico em Angola.',
  }
]

export const SPONSORS: PropsTypeSponsors[] = [
  {
    id: 0,
    typeSponsors: 'Platinum',
    sponsors: [
      {
        id: 0,
        logo: '/logo.svg',
        href: '/',
      },
      {
        id: 1,
        logo: '/logo.svg',
        href: '/',
      },
    ],
  },

  {
    id: 1,
    typeSponsors: 'Gold',
    sponsors: [
      {
        id: 0,
        logo: '/logo.svg',
        href: '/',
      },
      {
        id: 1,
        logo: '/logo.svg',
        href: '/',
      },
    ],
  },

  {
    id: 2,
    typeSponsors: 'Silver',
    sponsors: [
      {
        id: 0,
        logo: '/logo.svg',
        href: '/',
      },
      {
        id: 1,
        logo: '/logo.svg',
        href: '/',
      },
    ],
  },
]

export const PARTNERS: PropsTypeSponsor[] = [
  {
    id: 0,
    logo: '/logo.svg',
    href: '/',
  },
  {
    id: 1,
    logo: '/logo.svg',
    href: '/',
  },
  {
    id: 2,
    logo: '/logo.svg',
    href: '/',
  },
  {
    id: 3,
    logo: '/logo.svg',
    href: '/',
  },
]

export const VOLUNTEERPROFESSIONALS: PropsTypeVolunteerProfessionals = {
  title: 'Shoutout para os devs  Voluntários',
  children: [
    {
      id: 0,
      src: MrAguinaldo,
      name: 'Mr Aguinaldo',
      stack: 'Software Enginer',
      href: 'https://www.linkedin.com/in/mr-aguinaldo-3a076728a/',
    },
    {
      id: 1,
      src: MarioMonteiro,
      name: 'Mario Monteiro',
      stack: 'Frontend Developer UI/UX Designer',
      href: 'https://www.linkedin.com/in/m%C3%A1rio-monteiro-da-costa/',
    },
    {
      id: 2,
      src: AlfranioAlves,
      name: 'Alfrânio Alves',
      stack: 'Software Enginer',
      href: 'https://www.linkedin.com/in/afr%C3%A2nio-alves-69a32b1bb/',
    },
  ],
}

export const PAGENAVIGATION: PropsTypeVolunteerProfessionals = {
  title: 'Navegação',
  children: [
    {
      id: 0,
      Icon: PlayCircle,
      name: 'Evento',
      href: '/',
    },
    {
      id: 1,
      Icon: CalendarBlank,
      name: 'Agenda',
      href: '/',
    },
    {
      id: 2,
      Icon: WarningCircle,
      name: 'Informações',
      href: '/',
    },
    {
      id: 3,
      Icon: Users,
      name: 'Patrocinadores',
      href: '/',
    },
  ],
}

export const CONTACTS: PropsTypeVolunteerProfessionals = {
  title: 'Contacto',
  children: [
    {
      id: 0,
      Icon: EnvelopeSimple,
      name: 'filipemulonde@gmail.com',
      href: '/',
    },
    {
      id: 1,
      Icon: Phone,
      name: '+244 940 895 043',
      href: '/',
    },
  ],
}

export const SOCIALMEDIA: PropsTypeSocialMedia[] = [

  {
    id: 1,
    Icon: LinkedinLogo,
    href: 'https://www.linkedin.com/company/association-of-angolan-programmers/',
  },
  {
    id: 2,
    Icon: YoutubeLogo,
    href: 'https://www.youtube.com/@conferenciaapa4273',
  },
  {
    id: 3,
    Icon: TwitterLogo,
    href: 'https://twitter.com/ApaConf',
  },
  {
    id: 0,
    Icon: GithubLogo,
    href: 'https://github.com/Associacao-de-Programadores-Angolanos',
  }
]
