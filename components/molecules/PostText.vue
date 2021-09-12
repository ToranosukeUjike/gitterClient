<template>
  <text-middle :postText="postText"/>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import TextMiddle from '../atoms/TextMiddle.vue';
@Component({
  components: {
    TextMiddle,
  },
})
export default class NaviIconEmp extends Vue {
  @Prop() public postText!: string;
} 
</script>

<style>

</style>