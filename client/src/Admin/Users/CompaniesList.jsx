import React from 'react';
import { useSelector } from 'react-redux';

const CompaniesList = () => {
  // Access companies data from Redux store
  const companies = useSelector((state) => state.companyReducers.companies);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Companies List</h2>

      {companies?.length > 0 ? (
        <div className="space-y-4">
          {companies.map((company) => (
            <div
              key={company.id}
              className="flex justify-between items-center p-4 bg-white border border-gray-200 rounded shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div>
                <h3 className="font-medium text-lg text-gray-900">{company.name}</h3>
                <p className="text-sm text-gray-600">Location: {company.location}</p>
                {company.emails && (
                  <p className="text-sm text-gray-600">Emails: {company.emails}</p>
                )}
                {company.phoneNumbers && (
                  <p className="text-sm text-gray-600">
                    Phones: {company.phoneNumbers}
                  </p>
                )}
                {company.linkedInProfile && (
                  <a
                    href={company.linkedInProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 hover:underline"
                  >
                    LinkedIn Profile
                  </a>
                )}
              </div>
              <div className="flex space-x-2">
                <button
                  className="px-3 py-1 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No companies found. Please add some companies.</p>
      )}
    </div>
  );
};

export default CompaniesList;
