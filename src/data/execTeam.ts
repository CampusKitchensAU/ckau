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
    imageUrl: "/executive/Elise-Headshot.jpg",
    imagePosition: "object-[50%_20%]",
    bio: "",
  },
  {
    name: "Jake Gaertner",
    title: "VP of Operations",
    imageUrl: "/executive/Jake-Headshot.jpg",
    imagePosition: "object-[50%_40%]",
    bio: "",
  },
  {
    name: "Claire Congo",
    title: "VP of Campus Relations",
    imageUrl: "/executive/Claire-Headshot.jpg",
    imagePosition: "object-[50%_20%]",
    bio: "",
  },
  {
    name: "Caroline Browne",
    title: "VP of Community Outreach",
    imageUrl: "/executive/Caroline-Headshot.jpg",
    imagePosition: "object-[50%_35%]",
    bio: "",
  },
  {
    name: "Jack Schamban",
    title: "VP of Finance",
    imageUrl: "/executive/Jack-Headshot.jpg",
    imagePosition: "object-[50%_30%]",
    bio: "",
  },
  {
    name: "Kendall Stephens",
    title: "VP of Communications",
    imageUrl: "/executive/Kendall-Headshot.jpg",
    imagePosition: "object-[50%_15%]",
    bio: "",
  },
  {
    name: "Jack Clem",
    title: "VP of Events",
    imageUrl: "/executive/Clem-Headshot.jpg",
    imagePosition: "object-[50%_20%]",
    bio: "",
  },
  {
    name: "Johanna Ehrhardt",
    title: "VP of Nutritional Programs",
    imageUrl: "/executive/Johanna-Headshot.jpg",
    imagePosition: "object-[50%_25%]",
    bio: "",
  },
  {
    name: "Trevor Aupperle",
    title: "VP of Technology",
    imageUrl: "/executive/Trevor-Headshot-Square.jpg",
    bio: "",
  },
];

export default execTeam;
