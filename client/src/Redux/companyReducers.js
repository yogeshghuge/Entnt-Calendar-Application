
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    companies: [

      {
        id: "1",
        name: "Company 1",
        location: "New York",
        linkedInProfile: "https://www.linkedin.com/company/company1",
        emails: "company1@example.com",
        phoneNumbers: "1234567890",
        comments: "Company 1 Comments",
        communicationPeriodicity: "2 weeks",
      },
      {
        id: "2",
        name: "Company 2",
        location: "Los Angeles",
        linkedInProfile: "https://www.linkedin.com/company/company2",
        emails: "company2@example.com",
        phoneNumbers: "1234567890",
        comments: "Company 2 Comments",
        communicationPeriodicity: "2 weeks",
      },
      {
        id: "3",
        name: "Company 3",
        location: "Chicago",
        linkedInProfile: "https://www.linkedin.com/company/company3",
        emails: "company3@example.com",
        phoneNumbers: "1234567890",
        comments: "Company 3 Comments",
        communicationPeriodicity: "2 weeks",
      },
      {
        id: "4",
        name: "Company 4",
        location: "San Francisco",
        linkedInProfile: "https://www.linkedin.com/company/company4",
        emails: "company4@example.com",
        phoneNumbers: "1234567890",
        comments: "Company 4 Comments",
        communicationPeriodicity: "2 weeks",
      }
   ],
}



const companySlice = createSlice({  
  name: "company",
  initialState,
  reducers: {
    setCompanies: (state, action) => {
        state.companies = action.payload;
    },
    addCompany: (state, action) => {
      state.companies.push(action.payload);
    },
    editCompany: (state, action) => {
        const company = state.companies.find((company) => company.id === action.payload.id);
        company.name = action.payload.name;
        company.location = action.payload.location;
        company.linkedInProfile = action.payload.linkedInProfile;
        company.emails = action.payload.emails;
        company.phoneNumbers = action.payload.phoneNumbers;
        company.comments = action.payload.comments;
        company.communicationPeriodicity = action.payload.communicationPeriodicity;
    },
    deleteCompany: (state, action) => {
        const company = state.companies.find((company) => company.id === action.payload);
        state.companies = state.companies.filter((company) => company.id !== action.payload);
    }
  },
});

export const { setCompanies, addCompany, editCompany, deleteCompany } = companySlice.actions;
export default companySlice.reducer;
