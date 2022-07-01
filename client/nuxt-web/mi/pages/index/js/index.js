import {getList as getGoodList, goodCategory} from '@/api/good'
import {getList as bannerList} from '@/api/banner'
import request  from '@/plugins/request'
export default {
  data() {
    return {
      categoryStyle: 0,
      naveOn: null,
      goodList: [],
      banner: '',
      bannerList: [],
      categoryList: [],
      categorySublevel:[],
      recommendCategoryList: [],
      recommendGoodList: [],
      openId:'',
      groupId:''
    }
  },
  async asyncData (ctx) {
    try {
      let [goodData, bannerData, categoryData, recommendCategoryData] = await Promise.all([
        getGoodList({
          limit: 10,
          is_recommend: 1
        }),
        bannerList({
          limit: 5,
          type: 0,
          state: 0,
          sort: '+sort'
        }),
        goodCategory({
          tree: true
        }),
        goodCategory({
          is_recommend: 1
        }),
      ])
      bannerData.data.forEach(item=>{
        item.url = item.url ? item.url.replace('?id=','/') : ''
      })
      return {
        goodList: goodData.data,
        bannerList: bannerData.data,
        categoryList: categoryData,
        recommendCategoryList: recommendCategoryData
      }
    } catch(err) {
      ctx.$errorHandler(err)
    }
  },
  mounted() {
    this.categoryGood();
    this.getBanner()
    this.fetchopenId()
  },
  methods: {
    // 分类切换
    naveCut(index){
      if(index !== -1){
        this.naveOn = index;
        if(this.categoryList[index].children){ //存在子类目
          if(this.categoryList[index].children[0].resources){
            this.categorySublevel = this.categoryList[index].children;
            this.categoryStyle = 2
          }else{  //存在三级
            this.categorySublevel = this.categoryList[index].children;
            this.categoryStyle = 1
          }
        }else{
          this.categorySublevel = []
        }
      }
    },
    // 获取分类商品
    categoryGood() {
      this.recommendCategoryList.forEach((item,index)=>{
        this.recommendGoodList[index] = []
        getGoodList({
          limit: 10,
          category_id: item.id
        }).then(response => {
          this.recommendGoodList[index] = response.data
          this.$forceUpdate()
        })
      })
    },
    // 分类移出
    naveShiftOut(){
      this.naveOn = null;
      this.categoryStyle = 0
    },
    // 首页广告
    getBanner(){
      bannerList({
        limit: 1,
        type: 1,
        state: 0,
        sort: '+sort'
      }).then(response => {
        this.banner = response.data[0]
        this.banner.url = this.banner.url ? this.banner.url.replace('?id=','/') : ''
      })
    },
    toJump(){
        let path = 'http://dsshop.test/oauth/authorize?client_id=4&redirect_uri=https://wpa1.qq.com/aLk78xQL?_type=wpa&qidian=true&auth=commonAuth'
        let pathTwo='response_type=code&scope=*&state=DdVUdF32xwRPU42hEDTfwAvVIoh21PeYsao6noAr'
        let href= `${path}&qidian_ex1=${this.openId}&qidian_ex2=${this.groupId}&${pathTwo}`;
        window.open(href, '_blank');
    },
    fetchopenId() {
        request({
          url: 'http://114.132.223.235:8082/api/v1/app/getWpaOpenId',
          method: 'GET'
        }).then(res=>{
            console.log(res.openId,"22222")
            this.openId = res.openId
        })
        request({
            url: 'http://114.132.223.235:8082/api/v1/app/getImGroupId',
            method: 'GET'
        }).then(res=>{
            console.log(res.id,"res===========")
            this.groupId = res.id
        })
    }
  }
}
