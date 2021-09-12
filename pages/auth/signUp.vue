<template>
  <div>
    <h1>GitterSignUp</h1>
    <span style='display: inline-block; width: 100px;'>Email</span>
    <input v-model='newEmail' type='text' id='email' placeholder='Email Address'>
    <br/>
    <span style='display: inline-block; width: 100px;'>Username</span>
    <input v-model='newUsername' type='text' id='username' placeholder='User Name'>
    <br/>
    <span style='display: inline-block; width: 100px;'>Password</span>
    <input v-model='newPassword' type='password' id='password' placeholder='Password'>
    <br/><br/>
    <input type='button' value='SignUp' @click='signUp'>
    <NuxtLink to='/auth/signIn'>すでにアカウントをお持ちの方はこちら</NuxtLink>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import { Scalars } from 'practice-gitter';
import { userFunctions }from '../../api/amplify';

@Component({
  components: {

  }
})

export default class SiginUpPage extends Vue {
  public newEmail: Scalars['AWSEmail'] = '';
  public newUsername: string = '';
  public newPassword: string = '';

  public async signUp() {
    try {
      await userFunctions.signUp(
        this.newEmail, 
        this.newUsername, 
        this.newPassword
      );
      this.$router.push('/auth/confirmSignUp');
    } catch(error) {
      window.alert('error sign up');
    }
  }
} 
</script>

<style scoped>

  
</style>
