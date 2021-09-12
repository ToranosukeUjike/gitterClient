<template>
  <div 
    class='submit-post'
    @click='post'
  >
    <span>{{ buttonText }}</span>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';
@Component({
  components: {

  },
})
export default class BottomNaviBar extends Vue {
  @Emit('post') public post() {};
  @Prop() public buttonText!: string;
} 
</script>

<style scoped>
  .submit-post {
    cursor: pointer;
    margin-top: 20px;
    color: #37CD3C;
  }
  p {
    margin: 0;
  }
</style>