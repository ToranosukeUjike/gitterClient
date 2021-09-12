<template>
  <div>
    <user-icon-emp imgUrl='toraIcon.png' />
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import UserIconEmp from '../../molecules/UserIconEmp.vue'

@Component({
  components: {
    UserIconEmp
  }
})
export default class UserIcon extends Vue {

} 
</script>

<style scoped>

</style>