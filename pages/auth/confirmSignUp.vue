<template>
  <div>
    <h1>GitterConfirmSignUp</h1>
    <span style='display: inline-block; width: 100px;'>Username</span>
    <input v-model='username' type='text' id='username' placeholder='User Name'>
    <br/>
    <span style='display: inline-block; width: 100px;'>Code</span>
    <input v-model='code' type='text' id='code' placeholder='Code'>
    <br/><br/>
    <input type='button' value='confirm' @click='confirmSignUp'>
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
  public code: string = '';

  public async confirmSignUp() {
    try {
      await userFunctions.confirmSignUp(
        this.username,
        this.code
      );
      this.$router.push('/');
    } catch(error) {
      window.alert('error confirm sign up');
    }
  }

} 
</script>

<style scoped>

  
</style>
