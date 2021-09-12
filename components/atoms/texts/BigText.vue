<template>
  <div class='big-text'>
    <span>
      <b>{{ bigDisplayText }}</b>
    </span>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class TextMiddle extends Vue {
  @Prop() public bigDisplayText!: string;
} 
</script>

<style scoped>
  .big-text {
    font-weight: 400;
    font-size: 18px;
    color: #FDF6E3;
    line-height: 20px;
    cursor: pointer;
  }
</style>
