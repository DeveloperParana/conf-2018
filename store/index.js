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
    },{
      id: 3,
      name: 'Guilherme Souza',
      image: 'guilherme',
      role: 'São Paulo/SP - Brasil',
      description: 'CTO na Revmob e tem 10 anos de experiência com EcmaScript'
    },{
      id: 4,
      name: 'Carlos dos Santos',
      image: 'carlos',
      role: 'Cornélio Procópio/PR - Brasil',
      description: `Sócio fundador da CDS Informática, moderador das traduções do site MSDN e WIKI, Microsoft MVP desde 2008, Ganhou o prêmio Advisory Council Member Top Award 2012, Membro fundador do projeto Code Cracker (www.github.com/code-cracker)`,
      twitter: 'https://twitter.com/cdssoftware',
      facebook: 'https://facebook.com/carloscds',
      github: 'https://github.com/carloscds'
    },
    {
      id: 5,
      name: 'Heitor Gouvêa',
      image: 'heitor',
      role: 'Campinas/SP - Brasil',
      description: 'Instrutor e Pesquisador de Cibersegurança com mais de 3 anos de experiência na área de segurança ofensiva. Autor da ferramenta de anonimato Nipe, presente em várias distribuições Linux focadas em segurança da informação como por exemplo o BlackArch, LionSec e WeakNet. https: //heitorgouvea.me',
      facebook: 'https://fb.com/GouveaHeitor',
      github: 'https://github.com/GouveaHeitor'
    },
    {
      id: 6,
      name: 'Paulo Rogério da Silva Antiquera',
      image: 'paulo',
      role: 'Florianópolis/SC - Brasil',
      description: 'Tenho desenvolvido software por quase toda minha vida, profissionalmente a uns 20 anos. Na última década venho procurando formas mais eficazes de gerar valor aos clientes. Nesta jornada já misturei práticas de diversas fontes: Xp, Kanban, Scrum, PMI. Sou apaixonado por software já fiz de tudo um pouco: iniciando pela programação, devops, facilitação de times, gestão de projetos, produtos, contas... Já conversei bastante, sobre excelência técnica, testes automatizados, ciclos de feedback curtos, débitos técnicos, autonomia, entrega contínua, fluxo, melhoria contínua. E o melhor, tudo isto continua fazendo parte da minha vida, mas não ao mesmo tempo.Agora gosto de fazer uma coisa por vez, a coisa certa e somente a coisa certa!',
      twitter: 'https://twitter.com/@pauloantiquera',
      github: 'https://github.com/pauloantiquera'
    },
    {
      id: 7,
      name: 'Daniel Leite',
      image: 'daniel',
      role: 'Florianópolis/SC - Brasil',
      description: 'Desenvolvedor Front-End formado em Engenharia de Computação pela Univali, atua na área desde 2006. Fã da cultura open-source e colaborador da Cheesecake Labs desde 2016',
      twitter: 'https://twitter.com/dleitee',
      github: 'https://github.com/dleitee',
      linkedin: 'https://www.linkedin.com/in/dleitee/'
    },
    {
      id: 8,
      name: 'Pedro Gomes Tavares',
      role: 'São Paulo/SP - Brasil',
      description: 'Engenheiro de software remoto para Locaweb na equipe de um dos principais projetos da Locaweb.',
      image: 'pedro'
    }
  ],
  schedules: [{
      id: 1,
      time: '8:00',
      title: 'COFFEE',
      name: '',
      tag: [],
      description: 'Café da manhã  / Credenciamento / Networking'
    }, {
      id: 2,
      time: '9:00',
      title: 'ABERTURA',
      name: '',
      tag: [],
      description: ''
    }, {
      id: 3,
      time: '9:10',
      title: 'Pentest em aplicações Mobile',
      name: 'Heitor Gouvêa',
      tag: ['pentest', 'mobile', 'android', 'ios', 'hacking', 'segurança', 'cybersecurity', 'offensive'],
      description: 'Nos últimos anos o desenvolvimento de aplicações mobile para as plataformas Android e iOS cresceram absurdamente e em paralelo a isto começou a surgir os incidentes de segurança envolvendo estas tecnologias. O objetivo desta palestra é mostrar como é realizado o pentest em aplicações desta categoria.'
    }, {
      id: 4,
      time: '10:00',
      title: 'Você se preocupa com performance ou é sempre problema da infra?',
      name: 'Carlos dos Santos',
      tag: ['desenvolvimento', 'performance'],
      description: 'Como melhorar a performance de sua aplicação, olhando para os problemas e não para os sintomas!'
    },
    {
      id: 5,
      time: '10:50',
      title: 'Consistência de dados entre microservices utilizando serverless e FaaS',
      name: 'Elder Moraes',
      tag: ['faas', 'devops', 'microservice', 'consistencia'],
      description: `Eba! Temos microservices! Agora tudo está resolvido: podemos escalar, distribuir e orquestrar nossos serviços sem qualquer preocupação!

      Será ? Já parou para pensar nos dados de cada serviço ? E nos dados compartilhados entre eles ? E pior : já pensou nas transações entre serviços ?

        Transações ACID não servem mais.Transações distribuídas menos ainda.Como fazer então ?

        Para isso existe o padrão de Sagas!Com ele é possível resolver esse problema de uma forma inteligente, consistente e alinhado ao paradigma de microservices.

      Afinal, de que adianta dezenas, centenas...milhares de microservices, se os dados não forem confiáveis ?`
    }, {
      id: 6,
      time: '11:40',
      title: 'ALMOÇO',
      name: '',
      tag: [],
      description: ''
    }, {
      id: 7,
      time: '13:30',
      title: 'Bots além do hype: Como bots estão revolucionando a interação homem X maquina',
      name: 'Guilherme Souza',
      tag: ['chatbos', 'bots'],
      description: 'A interface gráfica permitiu que indústria de software atingisse a grande massa de consumidores, dando abertura a novas possibilidades de negócios e tornando a compra de software antes feita somente por empresas, algo tão simples quanto a AppStore, criou áreas, mercados e profissões, UX, Ui Designer, Front-End Developers, moldou comportamentos de compra, fez com que você escolhesse seu novo smartphone pelo tamanho da tela. Este, é o poder de uma nova interface com o usuário. Chatbots, não são brinquedos.'
    }, {
      id: 8,
      time: '14:20',
      title: '3 Pilares de uma Cultura de Engenharia Eficaz',
      name: 'Paulo Rogério da Silva Antiquera',
      tag: ['Engenharia de Software', 'Cultura, Boas Práticas', 'Eficácia', 'XP', 'Agilidade'],
      description: `"Cultura, dentro das organizações, é algo até meio místico. Mas é a cultura que faz com que as pessoas tomem decisões eficazes, sem nenhuma necessidade de micro-gerenciamento. Quando falamos de cultura de engenharia, neste caso engenharia de software, estamos nos referindo ao conjunto de valores técnicos que definem a identidade do time de desenvolvimento de uma companhia.

Se esta identidade é adaptada a dinâmica do negócio, consegue ser facilmente escalada, e for intrinsicamente ligada a excelência técnica, esta cultura entrega para a companhia: tempo adequado de resposta, confiança nas soluções, satisfação interna e externa além do tão buscado resultado econômico.  De maneira contrária, quando a cultura de engenharia não consegue se conectar às necessidades do negócio, traz problemas de rentabilidade, insatisfação de clientes e colaboradores entre outros problemas graves.

A cultura de engenharia de software pode contribuir e até definir o sucesso ou fracasso de um negócio.

Mas como nós engenheiros de software podemos construir e fortalecer a cultura? Vamos falar sobre isto, assumir a nossa responsabilidade e fazer a coisa acontecer.

Nesta apresentação vamos discutir três elementos essenciais para construção de uma cultura de engenharia realmente eficaz.

* Excelência
* Colaboração e Ownership
* Liderança

Nosso foco será o conjunto de práticas e princípios que podemos seguir no nosso dia-a-dia para que a cultura cresça e atenda as expectativas do negócio, orgulhe os engenheiros e, seja transmitida e respeitada por todas as áreas da companhia."`
    }, {
      id: 9,
      time: '15:10',
      title: 'Jornalismo de Dados: Programando a Democracia no Brasil',
      name: 'Turicas (aka Álvaro Justen)',
      tag: ['ia', 'jornalismo'],
      description: `Com a quantidade absurda de dados disponíveis hoje é praticamente
impossível fazer uma matéria jornalística sem, no mínimo, utilizar uma
planilha eletrônica e é por isso que programadores jornalistas e
jornalistas programadores estão ganhando as redações do mundo inteiro.
Nessa palestra Álvaro Justen mostrará matérias jornalísticas que foram
feitas utilizando código, o estado dos dados abertos no Brasil e
algumas ferramentas que vem desenvolvendo para tornar esses dados mais
acessíveis a leigos, além de bases de dados que ele mesmo libertou de
formatos ingratos e o portal Brasil.IO, que concentra diversas bases
de dados públicas em formatos acessíveis.`

    }, {
      id: 10,
      time: '16:00',
      title: 'COFFEE',
      name: '',
      tag: [],
      description: 'Café / Sorteios / Networking'
    }, {
      id: 11,
      time: '16:30',
      title: 'Virtual DOM "Creating your own Virtual DOM from strach"',
      name: 'Daniel Leite',
      tag: ['frontend', 'virtualdom'],
      description: 'Para entender o funcionamento do Virtual DOM, iremos construir juntos um protótipo com as principais funcionalidades. Com isso iremos ter uma ideia geral de como as bibliotecas reativas funcionam.'
    }, {
      id: 12,
      time: '17:20',
      title: 'Remote work - The good, the bad and the ugly',
      name: 'Pedro Gomes Tavares',
      tag: ['remote', 'trabalho remoto'],
      description: 'Apesar de ter muitos benefícios, trabalho remoto não é um mar de rosas. Existem diversas complexidades adicionais enfrentadas por uma equipe que trabalha remotamente, principalmente em projetos complexos. Inicar trabalho remoto em uma equipe que trabalhava localmente pode ser um desafio ainda maior. Nessa talk vou falar sobre como lidar com esses problemas, e demonstrar como temos resolvido as complexidades que envolvem o trabalho remoto na engenharia de produtos da Locaweb.'
    }, {
      id: 12,
      time: '18:20',
      title: 'ENCERRAMENTO',
      name: '',
      tag: [],
      description: 'Encerramento / Sorteios / Foto oficial'
    }
  ],
  tickets: [{
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
      soldout: true
    }, {
      id: 3,
      value: 65,
      title: '2° Lote',
      date: '01 de Junho até 30 de Junho',
      link: 'https://www.sympla.com.br/devparana-conference-2018__281357',
      soldout: true
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
    },
    {
      id: 2,
      name: 'Mandic Cloud Solutions',
      address: 'https://www.mandic.com.br/',
      image: 'mandic',
      type: 'diamond'
    },
    {
      id: 3,
      name: 'Elotech',
      address: 'https://www.elotech.com.br/',
      image: 'elotech',
      type: 'diamond'
    },
    {
      id: 4,
      name: 'Locaweb',
      address: 'https://locaweb.com.br',
      image: 'locaweb',
      type: 'silver'
    },
    {
      id: 5,
      name: 'oracle',
      address: 'https://cloud.oracle.com/home',
      image: 'oracle',
      type: 'silver'
    },
    {
      id: 6,
      name: 'Conta Azul',
      address: 'https://contaazul.com/',
      image: 'contaazul',
      type: 'silver'
    }
  ],
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
  }, {
    id: 3,
    name: 'PodTag',
    address: 'https://podtag.com.br/',
    image: 'podtag'
  }, {
    id: 4,
    name: 'Sociedade Rural de Maringá',
    address: 'http://www.srm.org.br/',
    image: 'srm'
  }]
})
