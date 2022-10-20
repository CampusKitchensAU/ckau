interface CommunityPartner {
  name: string
  inceptionYear?: number
  email?: string | null
  website?: string | null
  city?: string | null
  state?: string | null
  bio?: string
}
const communityPartners: CommunityPartner[] = [
  {
    name: 'Ease House',
    email: 'easehousesc@spm.net',
    website: 'https://www.ease-inc.org/',
    city: 'Auburn',
    state: 'AL',
  },
  {
    name: 'Community Market of East Alabama',
    email: 'food-bank@foodbankofeastalabama.com',
    website: 'https://foodbankofeastalabama.com/',
    state: 'AL',
  },
  {
    name: 'Auburn UMC Food Pantry',
    email: 'aumcfoodpantry@gmail.com',
    website: 'https://www.aumc.net/',
    city: 'Auburn',
    state: 'AL',
  },
  { name: 'New Birth Outreach Ministries', email: 'waymonj12@gmail.com' },
  {
    name: ' Greenwood Missionary Baptist Church',
    email: 'wendysboykin@gmail.com',
  },
  {
    name: 'Backpack International Inc.',
    email: 'backpackinternationalinc@gmail.com',
    website: 'https://www.backpackinternational.org/',
  },
  { name: 'Our House', email: 'ourhouseauburn@gmail.com' },
  { name: "His Place Men's Program", email: 'jeff@harvestevangelism.org' },
  { name: 'Esperanza House', email: 'esperanzahouse01@esperanzahouse.org' },
  { name: 'Auburn Housing Authority', email: 'abcdmattox@hotmail.com' },
  { name: 'Auburn AME Zion Church', email: 'vrh0003@auburn.edu' },
  { name: 'Alabama Council on Human Relations' },
  { name: 'Porter House', email: 'cmattox@auburnhousingauth.org' },
  { name: 'Meals on Wheels' },
  { name: 'Auburn Family Meals' },
  { name: 'Timothy Manor' },
  { name: 'Salvation Army' },
  { name: 'Macon Food Pantry', email: 'maconfoodpantry@gmail.com' },
  { name: 'Boys and Girls Club' },
  { name: 'Hosanna Home', email: 'hosannahome@yahoo.com' },
]

export default communityPartners
