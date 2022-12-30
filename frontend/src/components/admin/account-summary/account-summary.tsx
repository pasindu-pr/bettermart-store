import { ScaleIcon } from "@heroicons/react/outline";
import React from "react";

export type AccountSummaryProps = {
  name: string;
  amount: number;
};

const AccountSummary = ({ name, amount }: AccountSummaryProps) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <ScaleIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">
                {name}
              </dt>
              <dd>
                <div className="text-lg font-medium text-gray-900">
                  {amount}
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSummary;
