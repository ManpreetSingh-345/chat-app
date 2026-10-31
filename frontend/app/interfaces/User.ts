interface User {
  username: string;
  email: string;
  password: string;
}

interface UserLoggedIn {
  username: string;
  refreshToken: string;
}

export type { User, UserLoggedIn };
