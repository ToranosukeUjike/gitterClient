<template>
  <div class='post-content-title'>
    <big-icon class='pct-user-icon' imgUrl='toraIcon.png'/>
    <div class='input-title'>
      <input 
        v-model='inputTitleData'
        type='text' 
        placeholder='Title'
      >
    </div>
  </div>
</template>
<script lang='ts'>
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import BigIcon from '../atoms/icons/BigIcon.vue';

@Component({
  components: {
    BigIcon,
  }
})
export default class PostContentTitle extends Vue {
  @Prop({ required: true }) value!: string;
  public get inputTitleData() {
    return this.value
  }

  public set inputTitleData(input: string) {
    this.$emit('input', input)
  }
} 
</script>

<style scoped>
  .post-content-title {
    display: flex;
    border-bottom: 1px solid #ccc;
  }
  .input-title {
    margin: 10px 0 0 10px;
    height: 20px;
    width: 100%;
  }
  input {
    font-size: 20px;
    height: 30px;
    width: 100%;
    background-color: #002B36;
    color: #FDF6E3;
    border: none;
  }
</style>