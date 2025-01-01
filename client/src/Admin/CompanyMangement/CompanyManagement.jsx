import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCompany, editCompany, deleteCompany } from '../../Redux/companyReducers';

const CompanyManagement = () => {
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companyReducers.companies);

  // State for managing the form
  const [companyDetails, setCompanyDetails] = useState({
    id: null,
    name: '',
    location: '',
    linkedInProfile: '',
    emails: '',
    phoneNumbers: '',
    comments: '',
    communicationPeriodicity: '2 weeks',
  });

  useEffect(() => {
    setCompanyDetails(companies);
  }, [companies]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompanyDetails({ ...companyDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (companyDetails.id) {
      dispatch(editCompany(companyDetails));
    } else {
      dispatch(addCompany(companyDetails));
    }
    setCompanyDetails({
      id: null,
      name: '',
      location: '',
      linkedInProfile: '',
      emails: '',
      phoneNumbers: '',
      comments: '',
      communicationPeriodicity: '2 weeks',
    });
  };

  const handleEdit = (company) => {
    setCompanyDetails({ ...company });
  };

  const handleDelete = (id) => {
    dispatch(deleteCompany(id));
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Company Management</h2>

      {/* Company Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-4 rounded shadow"
      >
        <input
          type="text"
          name="name"
          value={companyDetails.name}
          onChange={handleInputChange}
          placeholder="Company Name"
          className="p-2 border rounded text-sm"
          required
        />
        <input
          type="text"
          name="location"
          value={companyDetails.location}
          onChange={handleInputChange}
          placeholder="Location"
          className="p-2 border rounded text-sm"
          required
        />
        <input
          type="url"
          name="linkedInProfile"
          value={companyDetails.linkedInProfile}
          onChange={handleInputChange}
          placeholder="LinkedIn Profile"
          className="p-2 border rounded text-sm"
        />
        <input
          type="text"
          name="emails"
          value={companyDetails.emails}
          onChange={handleInputChange}
          placeholder="Emails (comma separated)"
          className="p-2 border rounded text-sm"
        />
        <input
          type="text"
          name="phoneNumbers"
          value={companyDetails.phoneNumbers}
          onChange={handleInputChange}
          placeholder="Phone Numbers (comma separated)"
          className="p-2 border rounded text-sm"
        />
        <select
          name="communicationPeriodicity"
          value={companyDetails.communicationPeriodicity}
          onChange={handleInputChange}
          className="p-2 border rounded text-sm"
        >
          <option value="1 week">Every 1 week</option>
          <option value="2 weeks">Every 2 weeks</option>
          <option value="1 month">Every 1 month</option>
          <option value="3 months">Every 3 months</option>
        </select>
        <textarea
          name="comments"
          value={companyDetails.comments}
          onChange={handleInputChange}
          placeholder="Comments"
          className="p-2 border rounded text-sm sm:col-span-2"
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded text-sm sm:col-span-2"
        >
          {companyDetails.id ? 'Edit Company' : 'Add Company'}
        </button>
      </form>

      {/* Company List */}
      <div className="mt-6">
        <h3 className="text-xl font-medium mb-4">Company List</h3>
        <ul className="space-y-4">
          {companies?.map((company) => (
            <li
              key={company?.id}
              className="flex justify-between items-center p-4 bg-white rounded shadow"
            >
              <div>
                <h4 className="font-semibold text-lg">{company?.name}</h4>
                <p className="text-sm text-gray-600">{company?.location}</p>
                <p className="text-sm text-gray-600">{company?.emails}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(company)}
                  className="px-3 py-1 bg-yellow-500 text-white text-sm rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(company?.id)}
                  className="px-3 py-1 bg-red-500 text-white text-sm rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyManagement;
