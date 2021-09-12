<template>
  <div class='container'>
    <back-to-last-page imgUrl='arrow_back.svg'/>
    <span>会社のIDを入力してください</span>
    <input 
      v-model='newCompanyId'
      class='input-gitter'
      type='text' 
      placeholder='CompanyID'
    >
    <button 
      @click='submitSignInCompany'
    >Submit</button>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import BackToLastPage from '../../components/molecules/BackToLastPage.vue';
import { Scalars, User, userModel, usersInteractor } from 'practice-gitter';
import { userDetailsStore } from '../../store';
import { mockCompanyRepository, mockUserRepository } from '../../mock';

@Component({
  components: {
    BackToLastPage,
  }
})

export default class SignInWorkSpacePage extends Vue {
  public newCompanyId: Scalars['ID'] = '';

  public async created() {
    const username: Scalars['ID'] = userDetailsStore.getUsername;
    const usersRes: usersInteractor = new usersInteractor(new mockUserRepository);
    const userDetails: User = await usersRes.fetchUserByUsername(username);
    this.userObj = new userModel (
      new mockUserRepository, 
      new mockCompanyRepository, 
      userDetails
    );
    this.newCompanyId = this.userObj.companyID;
    console.log(this.userObj);
  }

  public userObj: userModel | null= null

  public submitSignInCompany() {
    if(this.userObj) {
      this.userObj.companyID = this.newCompanyId;
      this.userObj.updateProfile();
    }
    this.$router.push('/');
  }
}
</script>

<style scoped>
  .container {
    background-color: #3E999F;
    height: 100vh;
  }
  .input-gitter {
    margin: 20px;
    display: block;
    background-color: #3E999F;
    color: #FDF6E3;
    border: none;
    border-bottom: 1px solid #ccc;
  }
</style>

<style>
  body {
    margin: 0px;
  }
</style>
