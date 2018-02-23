export const state = () => ({
  speakers: [
    { id: 1, name: 'Marcos', description: 'Lorem ipsum dolor sit amet.' },
    { id: 2, name: 'Joao', description: 'Ipsum dolor sit amet.' },
    { id: 3, name: 'Jorge', description: 'Dolor sit amet.' }
  ],
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
  }]
})
