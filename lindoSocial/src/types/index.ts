import { PaletteMode } from "@mui/material";

export type State = {
  mode: PaletteMode;
  user: User | null;
  token: null;
  posts: Post[];
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  occupation: string;
  location: string;
  friends?: string[];
  picturePath: string;
};

type Post = {
  userId: string;
  firstName: string;
  lastName: string;
  location: string;
  description: string;
  picturePath: string;
  userPicturePath: string;
  likes: Map<User, Boolean>;
  comments: string[];
};
