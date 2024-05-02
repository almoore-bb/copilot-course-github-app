import React from 'react';
import PullRequest from './PullRequest';

interface PullRequestsProps {
    pullRequests: PullRequest[];
  }
  
  const PullRequests: React.FC<PullRequestsProps> = ({ pullRequests }) => (
    <div>
      <h2>Pull Requests</h2>
      {pullRequests.map((pullRequest) => (
        <PullRequest key={pullRequest.id} pullRequest={pullRequest} />
      ))}
    </div>
  );

  export default PullRequests;