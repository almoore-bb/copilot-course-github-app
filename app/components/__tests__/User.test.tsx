import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import User from '../User';
import { expect, describe, it } from '@jest/globals';

jest.mock('@apollo/experimental-nextjs-app-support/ssr', () => {
    const data = { 
          user: {
            avatarUrl: 'https://example.com/avatar.jpg',
            login: 'testuser',
            name: 'Test User',
            pullRequests: {
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
                // Add more pull requests here if needed
              ],
            },
          },
        }; // put your mock data here
    return {
      __esModule: true,
      useSuspenseQuery: jest.fn(() => ({ data })),
    };
  });

describe('User component', () => { 
  it('renders the user data', async () => {

    render(
        <User login="testuser" />
    );

    // Add assertions here to check if the user data is rendered correctly
    // You might need to use findBy* queries and await them because the component makes an asynchronous request
    expect(screen.getByText('Test Pull Request')).toBeInTheDocument();
    expect(screen.getByText('Repository: Test Repository')).toBeInTheDocument();
    expect(screen.getByText('State: OPEN')).toBeInTheDocument();
    expect(screen.getByText('Test User')).toBeInTheDocument();
    expect(screen.getByText('testuser')).toBeInTheDocument();
    const avatar = screen.getByAltText(`Avatar of Test User`);
    expect(avatar).toBeInTheDocument();
    expect(avatar.src).toContain('avatar.jpg');
  });
});