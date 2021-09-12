<template>
  <div class='is-private-switch'>
    <micro-text class='micro-text' :microDisplayText='switchName' />
    <toggle-switch v-model='localCheck' class='toggle-switch' :switchName="switchName" />
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import ToggleSwitch from '../atoms/ToggleSwitch.vue';
import MicroText from '../atoms/texts/MicroText.vue';

@Component({
  components: {
    ToggleSwitch,
    MicroText,
  }
})
export default class SwitchEmp extends Vue {
  @Prop({ required: true }) value!: boolean
  @Prop() switchName!: string

  public get localCheck() {
    return this.value
  }
  public set localCheck(input: boolean) {
    this.$emit('input', input)
  }
} 
</script>

<style scoped>
  .is-private-switch {
    display: flex;
  }
  .toggle-switch {
    position: absolute;
    bottom: 5px;
    right: 20px;
  }
</style>