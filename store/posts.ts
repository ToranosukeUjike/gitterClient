import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { Post, PrivacyState, Label, Scalars, User } from 'practice-gitter';

@Module({ stateFactory:true, namespaced:true, name: 'posts' })
export default class Posts extends VuexModule {
  public targetPosts: Post[] = [];
  public targetPost: Post = {
    companyID: "",
    username: "",
    postID: "",
    name: "",
    text: "",
    replyFrom: [],
    privacyState: PrivacyState.Public,
  };

  public posts: Post[] = [
    {
      companyID: 'chillchill',
      name: '氏家',
      username: 'iiitoraiii',
      postID: 'testIDTe',
      title: 'こんにちは',
      text: 'テスト投稿です。',
      label: Label.Tweet,
      replyFrom: [
        'replyA',
        'replyB',
        'replyC',
      ],
      privacyState: PrivacyState.Public,
    },
    {
      companyID: 'chillchill',
      name: '星野 源',
      username: 'hoshino-gen',
      postID: 'testIDNi',
      title: 'こんにちは',
      text: '星野 源は、日本のシンガーソングライター、俳優。埼玉県出身。 インストゥルメンタルバンド・SAKEROCKのリーダーとして、主にギターとマリンバを担当していたほか、エッセイストやコラムニストとしての顔も持ち、複数の連載や刊行物を著している。',
      label: Label.Tweet,
      privacyState: PrivacyState.Public,
      replyFrom:[],
    },
    {
      companyID: 'nintendo',
      name: '飯塚 幸三',
      username: 'iiduka-kozho',
      postID: 'testIDEi',
      title: 'こんにちは',
      text: '飯塚 幸三は日本の研究者、通商産業省技官。東京大学工学博士。専門は計量学。測定器誤差と形状誤差を分離して真円度・円筒度測定ができるマルチステップ法の開発者。',
      label: Label.Issue,
      privacyState: PrivacyState.Public,
      replyFrom:[],
    },
    {
      companyID: 'nintendo',
      name: '宮本茂',
      username: 'miyamoto',
      postID: 'testIDSe',
      title: 'こんにちは',
      text: '宮本 茂は、日本のゲームプロデューサー。任天堂株式会社代表取締役フェロー。同社の情報開発本部本部長、専務、クリエイティブフェローなどを歴任。',
      label: Label.Tweet,
      privacyState: PrivacyState.Public,
      replyFrom:[],
    },
    {
      companyID: 'nintendo',
      name: 'カービー',
      username: 'kirby',
      postID: 'testIDSi',
      title: 'こんにちは',
      text: '1992年4月27日に任天堂より発売されたゲームボーイ用の横スクロールアクションゲーム。開発元はハル研究所',
      label: Label.Tweet,
      privacyState: PrivacyState.Public,
      replyFrom:[],
    },
    {
      companyID: 'chillchill',
      name: 'ソマリア',
      username: 'Soomaaliya',
      postID: 'testIDFi',
      title: 'こんにちは',
      text: 'ソマリア連邦共和国、通称ソマリアは、東アフリカのアフリカの角と呼ばれる地域を領域とする国家。エチオピア、ケニアおよびジブチと国境を接し、インド洋とアデン湾に面する。 1991年勃発の内戦により国土は分断され、事実上の無政府状態が続いていた。',
      label: Label.Routine,
      privacyState: PrivacyState.Public,
      replyFrom:[],
    },
    {
      companyID: 'chillchill',
      name: 'エリザベス・サリバン',
      username: 'eeee',
      postID: 'testIDFo',
      title: '',
      text: '毎日3本のドクターペッパーを飲む。',
      label: Label.Routine,
      privacyState: PrivacyState.Public,
      replyFrom:[],
    },
    {
      companyID: 'google',
      name: 'サンダー・ピチャ',
      username: 'sundar_pichai',
      postID: 'testIDTh',
      title: '',
      text: 'Hello!',
      label: Label.Tweet,
      privacyState: PrivacyState.Public,
      replyFrom:[],
    },
    {
      companyID: 'facebook',
      name: 'マーク',
      username: 'mark_zuckerberg',
      postID: 'testIDTw',
      title: '',
      text: 'Hello!',
      label: Label.Tweet,
      privacyState: PrivacyState.Public,
      replyFrom:[],
    },
    {
      companyID: 'amazon',
      name: 'アンディー',
      username: 'andrew_jassy',
      postID: 'testIDO',
      title: '',
      text: 'Hello!',
      label: Label.Tweet,
      privacyState: PrivacyState.Public,
      replyFrom:[],
    },
  ]

  public get getTargetPosts(): Post[] {
    return this.targetPosts;
  }

  public get getTargetPost(): Post {
    return this.targetPost;
  }
  
  public get getRepliesCount(): number | string {
    if (this.targetPost) {
      return this.targetPost.replyFrom.length;
    }
    return 'nothing';
  }
  
  @Action
  public ADD(e: Post) { this.add(e) }

  @Action
  public Set_Target_Post(postID: Scalars['ID']) {
    this.SET_TARGET_POST(postID);
  }

  @Action
  public Get_Posts_By_User(user: User) {
    this.GET_POSTS_BY_USER(user);
  }
  
  @Action
  public Get_Posts_By_CompayID(companyID: Scalars['ID']) {
    this.GET_POSTS_BY_COMPANYID(companyID);
  }

  @Action
  public Get_Posts_By_Username(username: Scalars['ID']): void {
    this.GET_POSTS_BY_USERNAME(username);
  }

  @Mutation
  private add(e: Post) {
    this.posts.unshift(e)
    console.log(this.posts);
  }

  @Mutation
  private SET_TARGET_POST(postID: Scalars['ID']) {
    this.posts.forEach((post) => {
      if(post.postID === postID) {
        this.targetPost = post;
      }
    })
  }

  @Mutation
  private GET_POSTS_BY_USER(user: User) {
    this.targetPosts = [];
    this.posts.forEach((post) => {
      if(post.username === user.username) {
        this.targetPosts.push(post);
      } else if (post.companyID === user.companyID) {
        this.targetPosts.push(post);
      }
    });
  }

  @Mutation
  private GET_POSTS_BY_COMPANYID(companyID: Scalars['ID']) {
    this.targetPosts = [];
    this.posts.forEach((post) => {
      if(post.companyID === companyID) {
        this.targetPosts.push(post);
      }
    })
  }
  
  @Mutation
  private GET_POSTS_BY_USERNAME(username: Scalars['ID']): void {
    this.targetPosts = [];
    this.posts.forEach((post) => {
      if(post.username === username) {
        this.targetPosts.push(post);
      }
    });
  }
}