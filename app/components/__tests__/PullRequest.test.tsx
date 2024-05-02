import React from 'react';
import { render, screen } from '@testing-library/react';
import PullRequest from '../PullRequest';
import { expect, describe, it } from '@jest/globals';
import '@testing-library/jest-dom';

describe('PullRequest component', () => {
  it('renders the correct title, repository, and state', () => {
    
    const mockPullRequest = {
        id: '1',
        title: 'Test Pull Request',
        state: 'OPEN',
        repository: {
            name: 'Test Repository',
        },
    };

    render(<PullRequest pullRequest={mockPullRequest} />);

    expect(screen.getByText('Test Pull Request')).toBeInTheDocument();
    expect(screen.getByText('Repository: Test Repository')).toBeInTheDocument();
    expect(screen.getByText('State: OPEN')).toBeInTheDocument();
  });
});