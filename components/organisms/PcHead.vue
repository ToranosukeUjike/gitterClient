<template>
  <div class='pc-head'>
    <name-plate 
      :username='username'
      :name='name'
    />
    <issue-label 
      v-if='postLabel === labels.Issue'
      class='issue-label' 
      :labelType='labels.Issue' 
      :styleObject='issueStyleObject'
    />
    <issue-label 
      v-else-if='postLabel === labels.Tweet'
      class='issue-label' 
      :labelType='labels.Tweet' 
      :styleObject='tweetStyleObject' 
    />
    <issue-label 
      v-else-if='postLabel === labels.Routine'
      class='issue-label' 
      :labelType='labels.Routine' 
      :styleObject='routineStyleObject' 
    />
    <issue-label 
      v-else-if='postLabel === labels.Reply'
      class='issue-label' 
      :labelType='labels.Reply' 
      :styleObject='replyStyleObject' 
    />
  </div>
</template>
<script lang='ts'>
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import IssueLabel from '../atoms/IssueLabel.vue';
import NamePlate from '../molecules/NamePlate.vue';
import { Label } from 'practice-gitter';

@Component({
  components: {
    IssueLabel,
    NamePlate,
  }
})
export default class PostNaviBar extends Vue {
  @Prop() public username!: string;
  @Prop() public name!: string;
  @Prop() public postLabel!: Label;

  public labels = Label

  public issueStyleObject: object = {
    fontSize: '12px',
    textAlign: 'center',
    color: '#FDF6E3',
    height: '20px',
    width: '45px',
    backgroundColor: '#CF2E92',
    borderRadius: '10%',
  }

  public tweetStyleObject: object = {
    fontSize: '12px',
    textAlign: 'center',
    color: '#FDF6E3',
    height: '20px',
    width: '45px',
    backgroundColor: '#4C64D3',
    borderRadius: '10%',
  }

  public routineStyleObject: object = {
    fontSize: '12px',
    textAlign: 'center',
    color: '#FDF6E3',
    height: '20px',
    width: '50px',
    backgroundColor: '#F26939',
    borderRadius: '10%',
  }

  public replyStyleObject: object = {
    fontSize: '12px',
    textAlign: 'center',
    color: '#FDF6E3',
    height: '20px',
    width: '50px',
    backgroundColor: '#39475D',
    borderRadius: '10%',
  }
} 
</script>

<style scoped>
  .pc-head {
    display: flex;
    margin-bottom: 2px;
  }
  .issue-label {
    margin-left: 10px;
  }
</style>