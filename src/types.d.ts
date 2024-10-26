import { DateTime } from 'luxon';

export interface Post {
  get title(): string;
  get body(): string;
  get createdOn(): DateTime;
}

export interface ApiPost {
  get title(): string;
  get body(): string;
  get createdOn(): string;
}

export interface PostName {
  get name(): string;
}

export interface PostContainer {
  [key: string]: ApiPost;
}

export interface NamedPost {
  get name(): string;
  get post(): Post;
}
