<template>
  <div class='text-middle'>
    <span>
      {{ postText }}
    </span>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class TextMiddle extends Vue {
  @Prop() public postText!: string;
} 
</script>

<style scoped>
  .text-middle {
    font-weight: 400;
    font-size: 15px;
    color: #FDF6E3;
    line-height: 20px;
    cursor: pointer;
  }
</style>
