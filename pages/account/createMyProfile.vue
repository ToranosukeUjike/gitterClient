<template>
  <div class='container'>
    <!-- <back-to-last-page /> -->
    <span>ニックネームを登録してください。</span>
    <p>Gitter上であなたが呼ばれる名前です。</p>
    <input 
      v-model='userObj.name'
      class='input-gitter'
      type='text' 
      placeholder='名前'
    >
    <input 
      v-model='userObj.bio'
      class='input-gitter'
      type='text' 
      placeholder='ひとこと'
    >
    <button 
      @click='submitCreateProfile'
    >Submit</button>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import { userModel } from 'practice-gitter';
import { mockUserRepository, mockCompanyRepository } from '../../mock';
import { userDetailsStore } from '../../store';

@Component({
  components: {
  }
})

export default class CreateMyProfilePage extends Vue {
  public userBlanc = userModel.getBlanc(userDetailsStore.getUsername);
  public userObj = new userModel(
    new mockUserRepository, 
    new mockCompanyRepository, 
    this.userBlanc
  );

  public submitCreateProfile() {
    const res = this.userObj.createProfile();

    if(res === '名前を入力してください') {
      window.alert('名前を入力してください');
      return
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
