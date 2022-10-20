import { ListItem, ListItemText } from '@mui/material'

interface CommunityPartner {
  name: string
  inceptionYear: number
  email: string | null
  website: string | null
  city: string | null
  state: string | null
  bio: string | null
}

const CommunityPartnerListItem = ({ data }: { data: CommunityPartner }) => {
  return (
    <ListItem>
      <ListItemText
        primary={data.name}
        secondary={'since ' + data.inceptionYear}
      />
    </ListItem>
  )
}

export default CommunityPartnerListItem
