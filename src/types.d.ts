import { DateTime } from 'luxon';

export interface Post {
  get title(): string;
  get body(): string;
  get createdAt(): DateTime;
}

export interface PostContainer {
  [key: string]: Post;
}

export interface PostName {
  get name(): string;
}
