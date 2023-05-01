export type ExecMember = {
  name: string;
  title: string;
  imageUrl: string;
  imagePosition?: string;
  bio: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
};

const execTeam: ExecMember[] = [
  {
    name: "Elise Fitzgerald",
    title: "President",
    imageUrl: "/executive/Elise_Headshot.jpg",
    imagePosition: "object-[50%_20%]",
    bio: "",
  },
  {
    name: "Jake Gaertner",
    title: "VP of Operations",
    imageUrl: "/executive/Jake_Headshot.jpg",
    imagePosition: "object-[50%_25%]",
    bio: "",
  },
  {
    name: "Claire Congo",
    title: "VP of Campus Relations",
    imageUrl: "/executive/Claire_Headshot.jpg",
    imagePosition: "object-[50%_25%]",
    bio: "",
  },
  {
    name: "Caroline Browne",
    title: "VP of Community Outreach",
    imageUrl: "/executive/Caroline_Headshot.jpg",
    imagePosition: "object-[50%_30%]",
    bio: "",
  },
  {
    name: "Jack Schamban",
    title: "VP of Finance",
    imageUrl: "/executive/Jack_Headshot.jpg",
    imagePosition: "object-[50%_25%]",
    bio: "",
  },
  {
    name: "Kendall Stephens",
    title: "VP of Communications",
    imageUrl: "/executive/Kendall_Headshot.jpg",
    imagePosition: "object-[50%_20%]",
    bio: "",
  },
  {
    name: "Jack Clem",
    title: "VP of Events",
    imageUrl: "/executive/Clem_Headshot.jpg",
    imagePosition: "object-[50%_20%]",
    bio: "",
  },
  {
    name: "Johanna Ehrhardt",
    title: "VP of Nutritional Programs",
    imageUrl: "/executive/Johanna_Headshot.jpg",
    imagePosition: "object-[50%_25%]",
    bio: "",
  },
  {
    name: "Trevor Aupperle",
    title: "VP of Technology",
    imageUrl: "/executive/Trevor_Headshot.jpg",
    imagePosition: "object-[50%_30%]",
    bio: "",
  },
];

export default execTeam;
