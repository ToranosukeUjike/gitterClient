import {　ICompanyMastRepository, Company, Scalars } from "practice-gitter";
import { companiesStore } from '../store';

export class mockCompanyRepository implements ICompanyMastRepository {
  createCompany(company: Company): void {
    companiesStore.Add_Company(company);
  }
  updateCompany(company: Company): void {
    companiesStore.Update_Company(company);
  }
  deleteCompany(company: Company): void {
    console.log(company);
  }
  async fetchCompany(companyID: Scalars['ID']): Promise<Company> {
    companiesStore.Add_Target_Company(companyID);
    const company: Company = companiesStore.getCompany;
    return company;
  }
  async fetchAllCompany(): Promise<Company[]> {
    const companies: Company[] = companiesStore.getCompanies;
    return companies;
  }
  fetchCompaniesByUsername(username: Scalars['ID']): Promise<Company[]> {
    console.log(username);
    throw new Error("Method not implemented.");
  }
}