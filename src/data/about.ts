export interface TeamMember {
  name: string
  role: string
  initial: string
}

export const about = {
  heading: 'Sobre Nüdo',
  subtitle: 'Hardcore Metal desde Capiatá, Paraguay',
  description: 'Banda paraguaya de Hardcore Metal. Fundada en 2017 en Capiatá.',
  bio: [
    'Nüdo nace en Capiatá, Paraguay, en 2017 de la mano del fundador y guitarra.',
    'Lo que empezó como un proyecto de amigos apasionados por el metal extremo pronto se consolidó como una banda con identidad propia: un sonido que fusiona la agresividad del hardcore con la técnica del metalcore, pasando por influencias del nu metal.',
    'Con influencias que van desde Pantera y Slipknot hasta bandas del metalcore contemporáneo, Nüdo representa la nueva sangre del metal paraguayo: crudo, directo y sin concesiones.',
  ],
  venues: ['Tunakó Pool Party', 'Absoluto Rock Bar', 'Black Mango', 'BREAKDOWN FEST'],
  team: [
    { name: 'Mauricio Arce', role: 'Voz', initial: 'MA' },
    { name: 'Manuel Díaz', role: 'Guitarra', initial: 'MD' },
    { name: 'Edilson Gauto', role: 'Guitarra Líder', initial: 'EG' },
    { name: 'Fidel Dávalos', role: 'Bajo', initial: 'FD' },
    { name: 'Víctor Maldonado', role: 'Batería', initial: 'VM' },
  ] as TeamMember[],
}