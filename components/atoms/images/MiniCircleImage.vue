<template>
  <div class='mini-circle-image'>
    <img v-bind:src='svgUrl' />
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class MiniCircleImage extends Vue {
  @Prop() public imgUrl!: string;
  svgUrl: any = require(`~/assets/images/svg/${this.imgUrl}`);
} 
</script>

<style scoped>
  .mini-circle-image {
    width: 30px;
    height: 30px;
  }
  img {
    width: 100%;
    height: 40px;
    border-radius: 50%;
  }
</style>