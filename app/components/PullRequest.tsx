import type { PullRequest } from '../types/PullRequest';

interface PullRequestProps {
    pullRequest: PullRequest;
  }
  
  const PullRequest: React.FC<PullRequestProps> = ({ pullRequest }) => (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
      <h3>{pullRequest.title}</h3>
      <p>Repository: {pullRequest.repository.name}</p>
      <p>State: {pullRequest.state}</p>
    </div>
  );

  export default PullRequest;