import PageBreadcrumb from '@/common-components/PageBreadcrumb';
import React from 'react';
import { PageMetadata } from '@/common-components';
import { UserAddress, UserInfo, UserMetadata } from '@/modules';
import { UserIcon } from '@/assets/Icons';

const UserProfile: React.FC = () => {
  const userProfile = {
    icon: UserIcon,
    name: 'Warren',
    email: 'warren@gmail.com',
    fullName: 'Warren Lore',
    userRole: 'Team Manager1',
    addressName: 'Arizona, United States1',
  };

  return (
    <>
      <PageMetadata title="User Profile" description="This is User Profile" />
      <PageBreadcrumb title="Profile" />

      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          Profile
        </h3>
        <div className="space-y-6">
          <UserMetadata {...userProfile} />
          <UserInfo />
          <UserAddress />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
