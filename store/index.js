export const state = () => ({
  speakers: [{
    id: 1,
    name: 'Elder Moraes',
    image: 'elder',
    role: 'Oracle, São Paulo/SP - Brasil',
    description: 'Apaixonado por arquitetura de software, cloud e Java EE, ele compartilha suas experiências através de conteúdo online e eventos internacionais como JavaOne, TDC, Oracle Code e Campus Party.',
    twitter: 'https://twitter.com/@elderjava',
    github: 'https://github.com/eldermoraes',
    linkedin: 'https://br.linkedin.com/in/eldermoraes'
  }, {
    id: 2,
    name: 'Turicas (aka Álvaro Justen)',
    image: 'turicas',
    role: 'Curitiba/PR - Brasil',
    description: 'Turicas (aka Álvaro Justen) é programador, professor, hipnotista e dependente químico de cafés especiais.',
    twitter: 'https://twitter.com/turicas',
    github: 'https://github.com/turicas'
  }],
  schedules: [{
    id: 1,
    time: '8:30',
    title: 'REGISTRATION',
    name: '',
    tag: [],
    description: ''
  }, {
    id: 2,
    time: '9:30',
    title: 'CONFERENCE OPENING',
    name: '',
    tag: [],
    description: ''
  }, {
    id: 3,
    time: '9:40',
    title: 'THE POWER OF INTERPOLATION',
    name: 'Mike Grabowski',
    tag: ['react'],
    description: 'One of the biggest benefits when choosing React Native is its declarative nature. Instead of laying out elements on screen manually, we tell React how our interface should look like for a given state. That, combined with React Native taking care of rendering, allows us to write things that would be hard or even impossible otherwise. One of such things are animations.'
  }, {
    id: 4,
    time: '10:10',
    title: 'KEEP YOUR SANITY WITH REDUX SAGAS',
    name: 'Tyler Clark',
    tag: ['react', 'redux'],
    description: 'Redux is a strict framework. Whether you view that as a pro or a con, handling async actions can sometimes be a pain. Especially if you are using middleware such as Redux Thunk and have to chain promises. an application grows, its difficult to maintain and continuously test these actions'
  }],

  tickets: [
    {
      id: 1,
      value: 40,
      title: 'Lote Promocional',
      date: '05 de Maio até acabar',
      link: 'https://www.sympla.com.br/devparana-conference-2018__281357',
      soldout: true
    }, {
      id: 2,
      value: 50,
      title: '1° Lote',
      date: '05 de Maio até 31 de Maio',
      link: 'https://www.sympla.com.br/devparana-conference-2018__281357',
      soldout: false
    }, {
      id: 3,
      value: 65,
      title: '2° Lote',
      date: '01 de Junho até 30 de Junho',
      link: 'https://www.sympla.com.br/devparana-conference-2018__281357',
      soldout: false
    },
    {
      id: 4,
      value: 80,
      title: '3° Lote',
      date: '01 de Julho até 26 de Julho',
      link: 'https://www.sympla.com.br/devparana-conference-2018__281357',
      soldout: false
    }
  ],
  sponsors: [{
    id: 1,
    name: 'DB1',
    address: 'https://db1.com.br',
    image: 'db1',
    type: 'diamond'
  }],

  support: [{
    id: 1,
    name: 'Sicoob',
    address: 'http://www.sicoob.com.br/',
    image: 'sicoob'
  }, {
    id: 2,
    name: 'Sebrae',
    address: 'http://www.sebraepr.com.br/PortalSebrae',
    image: 'sebrae'
  }]
})
