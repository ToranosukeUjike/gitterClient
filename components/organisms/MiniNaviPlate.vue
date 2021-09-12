<template>
  <div @click='goOtherPages' class='navi-plate'>
    <mini-navi-icon-emp :imgUrl='imgUrl'/>
    <micro-text class='micro-text' :microDisplayText='naviName'/>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import MiniNaviIconEmp from '../molecules/MiniNaviIconEmp.vue';
import MicroText from '../atoms/texts/MicroText.vue';

@Component({
  components: {
    MiniNaviIconEmp,
    MicroText,
  }
})
export default class MiniNaviPlate extends Vue {
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
  .micro-text {
    padding-top: 13px;
    margin-left: 20px;
  }
</style>