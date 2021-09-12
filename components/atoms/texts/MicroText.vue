<template>
  <div class='micro-text'>
    <span>
      {{ microDisplayText }}
    </span>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class TextMiddle extends Vue {
  @Prop() public microDisplayText!: string;
} 
</script>

<style scoped>
  .micro-text {
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: #FDF6E3;
    cursor: pointer;
  }
</style>
