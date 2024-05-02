import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PullRequest } from '../../types/PullRequest';
import PullRequests from '../PullRequests'; // replace with the actual path to your PullRequests component

describe('PullRequests component', () => {
    it('renders the pull requests', () => {
        const mockPullRequests = {
            edges: [
              {
                node: {
                  id: '1',
                  title: 'Test Pull Request',
                  state: 'OPEN',
                  repository: {
                    name: 'Test Repository',
                    owner: {
                      login: 'testuser'
                    }
                  },
                },
              },
              {
                node: {
                    id: '2',
                    title: 'Test Pull Request 2',
                    state: 'CLOSED',
                    repository: {
                      name: 'Test Repository 2',
                    },
                  },
              }
            ],
          };
  
      const pullRequestArray: PullRequest[] = mockPullRequests.edges.map(pr => pr.node);

      render(<PullRequests pullRequests={pullRequestArray} />);
  
      pullRequestArray.forEach(pr =>  {
        expect(screen.getByText(pr.title)).toBeInTheDocument();
        expect(screen.getByText(`State: ${pr.state}`)).toBeInTheDocument();
        expect(screen.getByText(`Repository: ${pr.repository.name}`)).toBeInTheDocument();
      });
    });
  });