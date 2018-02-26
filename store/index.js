export const state = () => ({
  speakers: [{
      id: 1,
      name: 'Mike Grabowski',
      image: 'mike',
      role: 'Callstack.io, Poland',
      description: 'Head of Open Source, React Native Core Contributor.'
    }, {
      id: 2,
      name: 'Tyler Clark',
      image: 'tyler',
      role: 'Pluralsight, US',
      description: 'Tyler is a Full-Stack software engineer at Pluralsight. He loves reading, writing, and teaching about emerging technologies.'
    }, {
      id: 3,
      name: 'Sara Vieira',
      image: 'sara',
      role: 'YLDio, Portugal',
      description: 'Front-End Developer at @YLDio, open sorcerer, maker of useless modules, Blogger, Drummer and horror movie fan girl.'
    }, {
      id: 4,
      name: 'Kristin Baumann',
      image: 'kristin',
      role: 'HomeToGo, Germany',
      description: 'Kristin Baumann is a Senior Frontend Developer with great interest in UI / UX design and React programming. With a degree in Computational Visualistics and after developing abroad in Australia and Vietnam she is currently working as a Product Design & Prototyping Manager at HomeToGo in Berlin. in UI / UX design and React programming. With a degree in Computational Visualistics and after developing abroad in Australia and Vietnam she is currently working as a Product Design & Prototyping Manager at HomeToGo in Berlin.'
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

  tickets: [{
    id: 1,
    value: 40,
    title: '1 Lote',
    date: '12 de Setembro - 23 de Setembro',
    link: ''
  }, {
    id: 2,
    value: 60,
    title: '2 Lote',
    date: '12 de Setembro - 23 de Setembro',
    link: ''
  }, {
    id: 3,
    value: 80,
    title: '3 Lote',
    date: '12 de Setembro - 23 de Setembro',
    link: ''
  }]
})
