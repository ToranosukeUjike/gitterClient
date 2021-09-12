<template>
  <div class='mini-icon'>
    <img :src='imgUrl'/>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class MiniCircleImage extends Vue {
  @Prop() public imgUrl!: string;

} 
</script>

<style scoped>
  .mini-icon {
    width: 12px;
    height: 12px;
  }
  img {
    width: 100%;
    height: 15px;
  }
</style>