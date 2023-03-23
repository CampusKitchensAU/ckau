export type ExecMember = {
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
};

const execTeam: ExecMember[] = [
  { name: "Elise Fitzgerald", title: "President", imageUrl: "", bio: "" },
  { name: "Jake Gaertner", title: "VP of Operations", imageUrl: "", bio: "" },
  {
    name: "Claire Congo",
    title: "VP of Campus Relations",
    imageUrl: "",
    bio: "",
  },
  {
    name: "Caroline Browne",
    title: "VP of Community Outreach",
    imageUrl: "",
    bio: "",
  },
  { name: "Jack Schamban", title: "VP of Finance", imageUrl: "", bio: "" },
  {
    name: "Kendall Stephens",
    title: "VP of Communications",
    imageUrl: "",
    bio: "",
  },
  { name: "Jack Clem", title: "VP of Events", imageUrl: "", bio: "" },
  {
    name: "Johanna Ehrhardt",
    title: "VP of Nutritional Programs",
    imageUrl: "",
    bio: "",
  },
  { name: "Trevor Aupperle", title: "VP of Technology", imageUrl: "", bio: "" },
];

export default execTeam;
