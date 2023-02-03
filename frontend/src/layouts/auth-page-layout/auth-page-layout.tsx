import React from "react";
import { H2, Image } from "../../components";

const AuthPageLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="">
      <div className="w-full min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div className="w-full flex justify-center">
              <div className="relative w-full h-full"></div>
            </div>

            <H2 text={title} />
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthPageLayout;
