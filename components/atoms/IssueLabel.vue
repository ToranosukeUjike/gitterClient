<template>
  <div v-bind:style='styleObject'>
    <span>
      {{ labelType }}
    </span>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class IssueLabel extends Vue {
  @Prop() public labelType!: string;
  @Prop() public styleObject!: object;
} 
</script>

<style>

</style>
