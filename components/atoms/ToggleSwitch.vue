<template>
  <div class="toggle-switch">
    <input v-model='localCheck' :id="switchName" type='checkbox' />
    <label :for="switchName"/>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component({})
export default class ToggleSwitch extends Vue {
  @Prop({ required: true }) value!: boolean;
  @Prop() switchName!: string

  public get localCheck() {
    return this.value;
  }
  public set localCheck(input: boolean) {
    this.$emit('input', input);
  }
} 
</script>

<style scoped>
  label {
    width: 48px;
    height: 30px;
    background: #ccc;
    position: relative;
    display: inline-block;
    border-radius: 46px;
    transition: 0.4s;
    box-sizing: border-box;
  }

  input:checked + label {
    background-color: #74b9ff;
  }

  label:after {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    left: 0;
    top: 0;
    z-index: 2;
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    transition: 0.4s;
    cursor: pointer;
  }

  input:checked + label:after {
    left: 25px;
  }

  input {
    display: none;
  }
</style>