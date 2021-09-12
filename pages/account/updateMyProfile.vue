<template>
  <div class='container'>
    <back-to-last-page imgUrl='arrow_back.svg'/>
    <input 
      v-model='name'
      class='input-gitter'
      type='text' 
      placeholder='名前'
    >
    <input 
      v-model='bio'
      class='input-gitter'
      type='text' 
      placeholder='ひとこと'
    >
    <button 
      @click='submitUpdateProfile'
    >Submit</button>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import BackToLastPage from '../../components/molecules/BackToLastPage.vue';
import { Scalars, User, userModel, usersInteractor } from 'practice-gitter';
import { mockUserRepository, mockCompanyRepository } from '../../mock';
import { userDetailsStore } from '../../store';

@Component({
  components: {
    BackToLastPage,
  }
})

export default class UpdateMyProfilePage extends Vue {
  public userDetails: User = {
    username: '',
    name: '',
  }

  public async created() {
    const username: Scalars['ID'] = userDetailsStore.getUsername;
    const usersRes: usersInteractor = new usersInteractor(new mockUserRepository);
    this.userDetails = await usersRes.fetchUserByUsername(username);
    this.name = this.userDetails.name;
    this.bio = this.userDetails.bio || '';
  }

  public name: string = '';
  public bio: string = '';

  public submitUpdateProfile() {
    let userObj = new userModel(
      new mockUserRepository, 
      new mockCompanyRepository, 
      this.userDetails
    );
    userObj.name = this.name;
    userObj.bio = this.bio;
    userObj.updateProfile();
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
