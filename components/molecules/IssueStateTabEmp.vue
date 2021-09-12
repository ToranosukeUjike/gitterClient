<template>
  <div 
    class='issue-state-tab-emp' 
    @click='isActive'
  >
    <mini-circle-image :imgUrl='imgUrl'/>
    <span class='iste-text'>{{ text }}</span>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import MiniCircleImage from '../atoms/images/MiniCircleImage.vue';
@Component({
  components: {
    MiniCircleImage
  },
})
export default class IssueStateTabEmp extends Vue {
  @Prop() public imgUrl!: string;
  @Prop() public text!: 'Open' | 'Closed';

  public isActive() {
    this.$emit('isActive');
  }
} 
</script>

<style scoped>
  .issue-state-tab-emp {
    display: flex;
    justify-content: center;
  }
  .iste-text {
    color: #FDF6E3;
    margin: 9px;
  }
</style>