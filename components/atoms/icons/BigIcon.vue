<template>
  <div class='big-icon'>
    <img :src='pngUrl'/>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class BigCircleImage extends Vue {
  @Prop() public imgUrl!: string;
  pngUrl: any = require(`~/assets/images/${this.imgUrl}`);
} 
</script>

<style scoped>
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
</style>