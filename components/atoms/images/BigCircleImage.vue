<template>
  <div class="big-circle-image">
    <img v-bind:src='svgUrl' />
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'nuxt-property-decorator'
@Component({
  components: {
  }
})

export default class BigCircleImage extends Vue {
  @Prop() public imgUrl!: string
  svgUrl: any = require(`~/assets/images/svg/${this.imgUrl}`);
} 
</script>

<style scoped>
  .big_circle_image {
    width: 60px;
    height: 60px;
  }
  img {
    width: 100%;
    height: 40px;
    border-radius: 50%;
  }
</style>