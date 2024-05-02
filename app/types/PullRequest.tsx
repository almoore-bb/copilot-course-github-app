export interface PullRequest {
    id: string;
    title: string;
    state: string;
    repository: {
      name: string;
    };
  }