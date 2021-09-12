import { Scalars, Company } from "practice-gitter";
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

@Module({ stateFactory:true, namespaced:true, name: 'companies' })
export default class Companies extends VuexModule {
  private targetCompany: Company = {
    companyID: '',
    name: '',
    masterID: '',
    worker: [],
  };
  private companies: Company[] = [
    {
      companyID: 'chillchill',
      masterID: 'ssssooo',
      name: 'LG',
      worker: [
        'ssssooo',
        'hoshino-gen',
        'Soomaaliya',
        'eeee',
        'xxxzzzz',
        'ohaoha',
        'nemunemu',
      ],
    },
    {
      companyID: 'nintendo',
      masterID: 'miyamoto',
      name: '任天堂',
      worker: [
        'miyamoto',
        'iiduka-kozho'
      ]
    },
    {
      companyID: 'google',
      masterID: 'sundar_pichai',
      name: 'Google',
      worker: [
        'sundar_pichai'
      ],
    },
    {
      companyID: 'facebook',
      masterID: 'mark_zuckerberg',
      name: 'Facebook',
      worker: [
        'mark_zuckerberg'
      ],
    },
    {
      companyID: 'amazon',
      masterID: 'andrew_jassy',
      name: 'Amazon',
      worker: [
        'andrew_jassy'
      ],
    },
  ]

  public get getCompany(): Company {
    return this.targetCompany;
  }
  
  public get getCompanies(): Company[] {
    return this.companies;
  }

  @Action
  public Add_Company(newCompany: Company) {
    this.ADD_COMPANY(newCompany);
  }

  @Action
  public Add_Target_Company(companyID: Scalars['ID']): void {
    this.ADD_TARGET_COMPANY(companyID);
  }

  @Action
  public Update_Company(company: Company) {
    this.UPDATE_COMPANY(company);
  }

  @Mutation
  private ADD_COMPANY(newCompany: Company): string {
    let isDuplicate = false;
    this.companies.forEach((company) => {
      if(company.companyID === newCompany.companyID) {
        isDuplicate = true;
        return 'companyIDが重複しています'
      }
    })
    if(!isDuplicate) this.companies.push(newCompany);
    return '登録しました'
  }

  @Mutation
  private ADD_TARGET_COMPANY(companyID: Scalars['ID']): void {
    for(let i=0; i<this.companies.length; i++) {
      if(this.companies[i].companyID === companyID) {
        this.targetCompany = this.companies[i];
      }
    }
  }

  @Mutation
  private UPDATE_COMPANY(company: Company): void {
    for(let i=0; i<this.companies.length; i++) {
      if(this.companies[i].companyID === company.companyID) {
        this.companies[i] = company;
      }
    }
  }
}