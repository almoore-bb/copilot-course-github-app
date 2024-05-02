import React from 'react';


type UserCardProps = {
  avatarUrl: string;
  userId: string;
  displayName: string;
};

import Image from 'next/image';

const UserCard: React.FC<UserCardProps> = ({ avatarUrl, userId, displayName }) => {
        return (
            <div className="flex items-center space-x-4 p-6 bg-white shadow rounded-lg border border-gray-200 m-4 transform transition-transform hover:scale-105">
                <Image width={100} height={100} className="h-16 w-16 rounded-full" src={avatarUrl} alt={`Avatar of ${displayName}`} />
                <div>
                    <h2 className="text-xl font-bold text-blue-500">{displayName}</h2>
                    <p className="text-gray-500">{userId}</p>
                </div>
            </div>
        );
    };

export default UserCard;