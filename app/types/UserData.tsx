import { PullRequests } from "./PullRequests";

export interface UserData {
    avatarUrl: string;
    login: string;
    name: string;
    pullRequests: PullRequests;
}
