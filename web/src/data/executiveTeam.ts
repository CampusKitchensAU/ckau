interface executiveMember {
  name: string
  position: string
  img: string
  gender: 'male' | 'female'
}

const executiveTeam: executiveMember[] = [
  { name: 'Ryan Mumford', position: 'President', img: '', gender: 'male' },
  {
    name: 'Brandon Thomas',
    position: 'VP of Operations',
    img: '',
    gender: 'male',
  },
  {
    name: 'Barrett Maloney',
    position: 'VP of Nutritional Programs',
    img: '',
    gender: 'female',
  },
  {
    name: 'Phillip McCain',
    position: 'VP of Campus Affairs',
    img: '',
    gender: 'male',
  },
  {
    name: 'Elise Fitzgerald',
    position: 'VP of Outreach',
    img: '',
    gender: 'female',
  },
  { name: 'Owen Harris', position: 'VP of Finance', img: '', gender: 'male' },
  {
    name: 'Teja Ramapuram',
    position: 'VP of Development',
    img: '',
    gender: 'male',
  },
]

export default executiveTeam
