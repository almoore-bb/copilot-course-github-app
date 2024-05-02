import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserCard from '../UserCard'; // replace with the actual path to your UserCard component

describe('UserCard component', () => {
    it('renders the user data', () => {
      const mockUser = {
        avatarUrl: 'https://example.com/avatar.jpg',
        login: 'testuser',
        name: 'Test User',
      };
  
      render(<UserCard userId={mockUser.login} avatarUrl={mockUser.avatarUrl} displayName={mockUser.name} />);
  
      expect(screen.getByText(mockUser.name)).toBeInTheDocument();
      expect(screen.getByText(mockUser.login)).toBeInTheDocument();
      const avatar = screen.getByAltText(`Avatar of ${mockUser.name}`);
      expect(avatar.src).toContain('avatar.jpg');
    });
  });