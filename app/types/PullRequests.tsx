import { PullRequest } from './PullRequest';

export interface PullRequests {
    edges: { node: PullRequest }[];
  }