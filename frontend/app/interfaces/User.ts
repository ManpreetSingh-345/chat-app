interface User {
  username: string;
  email: string;
  password: string;
}

interface UserLoggedIn {
  username: string;
  accessToken: string;
}

export type { User, UserLoggedIn };
