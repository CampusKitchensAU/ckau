interface executiveMember {
  name: string
  position: string
  img: string
}

const executiveTeam: executiveMember[] = [
  { name: 'Ryan Mumford', position: 'President', img: 'img/businessman.png' },
  {
    name: 'Brandon Thomas',
    position: 'VP of Operations',
    img: 'img/businessman.png',
  },
  {
    name: 'Barrett Maloney',
    position: 'VP of Nutritional Programs',
    img: 'img/lady.png',
  },
  {
    name: 'Phillip McCain',
    position: 'VP of Campus Affairs',
    img: 'img/businessman.png',
  },
  {
    name: 'Elise Fitzgerald',
    position: 'VP of Outreach',
    img: 'img/lady.png',
  },
  {
    name: 'Owen Harris',
    position: 'VP of Finance',
    img: 'img/businessman.png',
  },
  {
    name: 'Teja Ramapuram',
    position: 'VP of Development',
    img: 'img/businessman.png',
  },
]

export default executiveTeam
