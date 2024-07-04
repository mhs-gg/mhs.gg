type User = {
  name: string;
  email: string;
  image: string;
  emailVerified: Date
  leagueAccount?: {
      gameName: string;
      tagLine: string;
  }
};