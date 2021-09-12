<template>
  <div class='container'>
    <back-to-last-page imgUrl='arrow_back.svg'/>
    <div class='company-cards'>
      <tr v-for='(company, i) in displayCompanies' :key='i'>
        <company-card
          :companyname='company.name'
          :companyID='company.companyID'
          :masterID='company.masterID'
          @getID='setID'
        />
      </tr>
    </div>
    <button 
      @click='submitSignInCompany'
    >Submit</button>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import BackToLastPage from '../../components/molecules/BackToLastPage.vue';
import CompanyCard from '../../components/templates/CompanyCard.vue';
import { mockCompanyRepository } from '../../mock/companyRepositoryMock';
import { companiesInteractor, Company, Scalars, usersInteractor, userModel } from 'practice-gitter';
import { userDetailsStore } from '../../store';
import { mockUserRepository } from '../../mock/userRepositoryMock';

@Component({
  components: {
    BackToLastPage,
    CompanyCard,
  }
})

export default class FindWorkSpacePage extends Vue {
  public chooseID: Scalars['ID'] = '';
  
  public async created() {
    const res = new companiesInteractor(new mockCompanyRepository);
    this.displayCompanies = await res.fetchAllCompany();
  }

  public setID(input: string) {
    this.chooseID = input;
    console.log(input);
  }

  public async submitSignInCompany() {
    const username = userDetailsStore.getUsername;
    const res = new usersInteractor(new mockUserRepository);
    const fetchUser = await res.fetchUserByUsername(username);
    const userObj = new userModel(
      new mockUserRepository,
      new mockCompanyRepository,
      fetchUser
    );
    userObj.companyID = this.chooseID;
    // あとはstoreのcompanyの関数を作成するととおる・・・はず！
    userObj.updateProfile();
    this.$router.push('/');
  }

  public displayCompanies: Company[] = [];
}
</script>

<style scoped>
  .container {
    background-color: #3E999F;
    height: 100vh;
  }
  .company-cards {
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
  }
</style>

<style>
  body {
    margin: 0px;
  }
</style>
