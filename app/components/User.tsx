"use client";

import React from 'react';
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import UserCard from './UserCard';
import PullRequests from './PullRequests';
import GET_USER from '../queries/get-user';
import { GetUserResponse } from '../types/GetUserResponse';
import type { UserProps } from '../types/UserProps';

const User: React.FC<UserProps> = ({ login }) => {
  const { error, data } = useSuspenseQuery<GetUserResponse>(GET_USER, {
    variables: { login }
  });

  if (error) return <p>Error :( {error.message} </p>;
 
  return (
    <div>
    <UserCard
      userId={data.user.login}
      displayName={data.user.name}
      avatarUrl={data.user.avatarUrl}
    />
    <PullRequests pullRequests={data.user.pullRequests.edges.map(edge => edge.node)} />
    </div>
  );
};

export default User;