<template>
  <mini-circle-image :imgUrl='imgUrl'/>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import MiniCircleImage from '../atoms/images/MiniCircleImage.vue';
@Component({
  components: {
    MiniCircleImage,
  },
})
export default class MiniNaviIconEmp extends Vue {
  @Prop() public imgUrl!: string;
} 
</script>

<style>

</style>