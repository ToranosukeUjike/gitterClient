<template>
  <div v-if='companyObj' class='container'>
    <back-to-last-page imgUrl='arrow_back.svg'/>
    <span>会社情報を登録してください</span>
    <input 
      v-model='companyObj.name'
      class='input-gitter'
      type='text' 
      placeholder='会社名'
    >
    <input 
      v-model='companyObj.companyID'
      class='input-gitter'
      type='text' 
      placeholder='CompanyID'
    >
    <button 
      @click='submitCreateCompany'
    >Submit</button>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import BackToLastPage from '../../components/molecules/BackToLastPage.vue';
import { Company, companyModel, Scalars } from 'practice-gitter';
import { userDetailsStore } from '../../store';
import { mockCompanyRepository } from '../../mock';

@Component({
  components: {
    BackToLastPage,
  }
})

export default class CreateWorkSpacePage extends Vue {
  public created() {
    const username: Scalars['ID'] = userDetailsStore.getUsername;
    const companyBlanc: Company = companyModel.getBlanc(username);
    this.companyObj = new companyModel(new mockCompanyRepository, companyBlanc);
  }

  public companyObj: companyModel | null = null;

  public submitCreateCompany() {
    if (this.companyObj) {
      const res = this.companyObj.createCompany();
      if (res === '会社名を入力してください') {
        window.alert('会社名を入力してください');
        return
      } else if (res === 'CompanyIDを入力してください') {
        window.alert('CompanyIDを入力してください');
        return
      }
      console.log(this.companyObj.company);
      console.log('created company!')
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
