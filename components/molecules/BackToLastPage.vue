<template>
  <NuxtLink to='/'>
    <mini-circle-image :imgUrl='imgUrl'/>
  </NuxtLink>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import MiniCircleImage from '../atoms/images/MiniCircleImage.vue'
@Component({
  components: {
    MiniCircleImage
  },
})
export default class IssueStateTabEmp extends Vue {
  @Prop() public imgUrl!: string;
} 
</script>

<style scoped>

</style>