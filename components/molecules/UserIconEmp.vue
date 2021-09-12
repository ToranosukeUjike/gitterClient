<template>
  <div class='user-icon-emp'>
    <big-icon :imgUrl='imgUrl'/>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import BigIcon from '../atoms/icons/BigIcon.vue';
@Component({
  components: {
    BigIcon
  },
})
export default class UserIconEmp extends Vue {
  @Prop() public imgUrl!: string;
} 
</script>

<style scoped>
  .user-icon-emp {
    display: flex;
    width: 48px;
  }
</style>