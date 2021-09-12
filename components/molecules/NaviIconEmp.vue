<template>
  <big-circle-image :imgUrl='imgUrl'/>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import BigCircleImage from '../atoms/images/BigCircleImage.vue';
@Component({
  components: {
    BigCircleImage,
  },
})
export default class NaviIconEmp extends Vue {
  @Prop() public imgUrl!: string;
} 
</script>

<style>

</style>