import React from "react";
import { CheckCircleIcon, OfficeBuildingIcon } from "@heroicons/react/solid";

const ProfileSection = () => {
  return (
    <div className="flex items-center">
      <img
        className="hidden h-16 w-16 rounded-full sm:block"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
        alt=""
      />
      <div>
        <div className="flex items-center">
          <img
            className="h-16 w-16 rounded-full sm:hidden"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
            alt=""
          />
          <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
            Good morning, Emilia Birch
          </h1>
        </div>
        <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
          <dt className="sr-only">Company</dt>
          <dd className="flex items-center text-sm text-gray-500 font-medium capitalize sm:mr-6">
            <OfficeBuildingIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Bettermart
          </dd>
          <dt className="sr-only">Account status</dt>
          <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
            <CheckCircleIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
              aria-hidden="true"
            />
            Administrator
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default ProfileSection;
