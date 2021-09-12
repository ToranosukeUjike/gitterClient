<template>
  <div @click='getCompanyID' class="card">
    <!-- <div class="card__imgframe"> -->
      <img class="card__imgframe" src="~/assets/images/baby.png" alt="">
    <!-- </div> -->
    <div class="card__textbox">
      <div class="card__titletext">
        {{ companyname }}
      </div>
      <div class="card__overviewtext">
        <p>CompanyID: {{ companyID }}</p>
        <p>Master: {{ masterID }}</p>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { Scalars } from 'practice-gitter';


@Component({
  components: {

  }
})

export default class CompanyCard extends Vue {
  @Prop({ required: true }) companyname!: string;
  @Prop({ required: true }) companyID!: Scalars['ID'];
  @Prop({ required: true }) masterID!: Scalars['ID'];

  public getCompanyID() {
    this.$emit('getID', this.companyID);
  }
}
</script>

<style scoped>
  .card{
    width: 160px;
    height: 180px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,.2);
    margin: 2px;
    cursor: pointer;
  }
  .card__imgframe{
    width: 50%;
    height: auto;
    /* padding-top: 56.25%; */
    background: #bbb;
    box-sizing: border-box;
  }
  .card__textbox{
    width: 100%;
    height: auto;
    padding: 20px 18px;
    background: #fff;
    box-sizing: border-box;
  }
  .card__textbox > * + *{
    margin-top: 10px;
  }
  .card__titletext{
    font-size: 12px;
    font-weight: bold;
    line-height: 125%;
  }
  .card__overviewtext{
    font-size: 8px;
    line-height: 150%;
  }
</style>
