<template>
  <div @click='goOtherPages' class='navi-plate'>
    <navi-icon-emp :imgUrl='imgUrl'/>
    <big-text class='big-text' :bigDisplayText='naviName'/>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import NaviIconEmp from '../molecules/NaviIconEmp.vue';
import BigText from '../atoms/texts/BigText.vue';

@Component({
  components: {
    NaviIconEmp,
    BigText,
  }
})
export default class NaviPlate extends Vue {
  @Prop() public imgUrl!: string;
  @Prop() public naviName!: string;
  
  public goOtherPages() {
    this.$emit('goOtherPages');
  }
} 
</script>

<style scoped>
  .navi-plate {
    cursor: pointer;
    display: flex;
  }
  .big-text {
    padding-top: 13px;
    margin-left: 20px;
  }
</style>