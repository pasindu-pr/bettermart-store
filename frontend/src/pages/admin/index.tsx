import { AccountSummary } from "../../components";
import { AdminLayout } from "../../layouts";

export default function Admin() {
  return (
    <>
      <AdminLayout>
        <div className="mt-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg leading-6 font-medium text-gray-900">
              Overview
            </h2>
            <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <AccountSummary name="Summary" amount={123} />
            </div>
          </div>

          <h2 className="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
            Recent activity
          </h2>

          {/* Place the table here */}
        </div>
      </AdminLayout>
    </>
  );
}
