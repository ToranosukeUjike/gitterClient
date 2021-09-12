<template>
  <div>
    <h1>GitterSignIn</h1>
    <span style='display: inline-block; width: 100px;'>Username</span>
    <input v-model='username' type='text' id='username' placeholder='User Name'>
    <br/>
    <span style='display: inline-block; width: 100px;'>Password</span>
    <input v-model='password' type='password' id='password' placeholder='Password'>
    <br/><br/>
    <input type='button' value='SignIn' @click='signIn'>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import { userFunctions }from '../../api/amplify';

@Component({
  components: {

  }
})

export default class SiginInPage extends Vue {
  public username: string = '';
  public password: string = '';

  public async signIn() {
    try {
      await userFunctions.signIn(
        this.username, 
        this.password
      );
      this.$router.push('/');
    } catch(error) {
      window.alert('error sign in');
    }
  }
} 
</script>

<style scoped>

  
</style>
