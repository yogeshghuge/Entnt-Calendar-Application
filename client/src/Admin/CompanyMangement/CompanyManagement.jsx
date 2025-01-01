// src/components/CompanyManagement.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CompanyManagement = () => {
  const dispatch = useDispatch();
  
  const companies = useSelector((state) => state.company.companies);

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

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompanyDetails({ ...companyDetails, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (companyDetails.id) {
      // Editing existing company
      dispatch(editCompany({ id: companyDetails.id, updatedData: companyDetails }));
    } else {
      // Adding new company
      dispatch(addCompany({ ...companyDetails, id: Date.now() }));
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

  // Handle edit
  const handleEdit = (company) => {
    setCompanyDetails({ ...company });
  };

  // Handle delete
  const handleDelete = (id) => {
    dispatch(deleteCompany(id));
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold">Company Management</h2>

      {/* Company Form */}
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-4">
          <label className="block">Company Name:</label>
          <input
            type="text"
            name="name"
            value={companyDetails.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block">Location:</label>
          <input
            type="text"
            name="location"
            value={companyDetails.location}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block">LinkedIn Profile:</label>
          <input
            type="url"
            name="linkedInProfile"
            value={companyDetails.linkedInProfile}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block">Emails (comma separated):</label>
          <input
            type="text"
            name="emails"
            value={companyDetails.emails}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block">Phone Numbers (comma separated):</label>
          <input
            type="text"
            name="phoneNumbers"
            value={companyDetails.phoneNumbers}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block">Comments:</label>
          <textarea
            name="comments"
            value={companyDetails.comments}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block">Communication Periodicity:</label>
          <select
            name="communicationPeriodicity"
            value={companyDetails.communicationPeriodicity}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          >
            <option value="1 week">Every 1 week</option>
            <option value="2 weeks">Every 2 weeks</option>
            <option value="1 month">Every 1 month</option>
            <option value="3 months">Every 3 months</option>
          </select>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          {companyDetails.id ? 'Edit Company' : 'Add Company'}
        </button>
      </form>

      {/* Company List */}
      <div className="mt-6">
        <h3 className="text-2xl">Company List</h3>
        <ul>
          {companies.map((company) => (
            <li key={company.id} className="flex justify-between items-center mb-4">
              <div>
                <h4 className="font-semibold">{company.name}</h4>
                <p>{company.location}</p>
                <p>{company.emails.join(', ')}</p>
              </div>
              <div>
                <button
                  onClick={() => handleEdit(company)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(company.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded"
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