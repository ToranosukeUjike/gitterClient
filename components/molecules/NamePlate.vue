<template>
  <div class='name-plate'>
    <big-text :bigDisplayText='name'/>
    <micro-text class='micro-text' :microDisplayText='`@${username}`'/>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import MicroText from '../atoms/texts/MicroText.vue';
import BigText from '../atoms/texts/BigText.vue';
@Component({
  components: {
    MicroText,
    BigText,
  },
})
export default class NamePlate extends Vue {
  @Prop() public username!: string;
  @Prop() public name!: string;
} 
</script>

<style scoped>
  .name-plate {
    display: flex;
    height: 20px;
  }
  .micro-text {
    color: #ccc;
    margin-left: 10px;
  }
</style>