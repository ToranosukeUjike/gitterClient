<template>
  <div class='post-navi-bar-emp' @click='goOtherPages'>
    <micro-circle-image :imgUrl='imgUrl' />
    <span class='pnbe-text'>{{ text }}</span>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import MicroCircleImage from '../atoms/images/MicroCircleImage.vue';
@Component({
  components: {
    MicroCircleImage,
  },
})
export default class PostNaviBarEmp extends Vue {
  @Prop() public imgUrl!: string;
  @Prop() public text!: string;

  public goOtherPages(): void {
    this.$emit('goOtherPages');
  }
} 
</script>

<style>
  .post-navi-bar-emp {
    display: flex;
    justify-content: center
  }
  .pnbe-text {
    font-size: 12px;
    color: #FDF6E3;
    margin: 11px 0 0 10px;
  }
</style>