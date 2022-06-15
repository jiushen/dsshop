<template>
    <div class="ecsetting-demo-order">
        <div class="order-search">
            <el-input v-model="keyWords" prefix-icon="el-icon-search" placeholder="请输入内容" 
                      @change="fetchOrders()">
            </el-input>
        </div>
        <div class="order-goods"
            v-infinite-scroll="loadList"
            infinite-scroll-disabled="disabled"
            v-for="(item, index) in listData" :key="index"
            @click="handleEdit(item.id)"
        >
            <div class="status">{{item.state_show}}</div>
            <div class="fix goods">
                <div class="goods-img"
                    v-for="(tt, idx) in item.goods_list" :key="idx">
                    <img v-show= "idx < 3" :src="tt.img"/>
                    <div class="info" v-show="item.goods_list.length === 1">
                        <div class="title ell">{{tt.name}}</div>
                        <div class="color ell" v-for="(i,idex) in tt.good_sku.product_sku" :key="idex">
                            {{i.key}} : {{i.value}}
                        </div>
                    </div>
                </div>
                <div class="price">
                    <div class="money">¥{{item.total}}</div>
                    <div class="operation">
                        <span>共{{item.goods_list.length}}件</span>
                        <a href="javascript:void(0)" @click="sendData(item.id)">
                          <img src="./assets/icons/normal.png"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      <p v-show="loading" class="loading">列表加载中...</p>
    </div>
</template>

<script>
  import { orderList} from '@/api/user'
  import jsApi from './assets/js/jsApi.js';
  export default {
    name: 'ecsettingOrder',
    // components: { TabFilter },
    head:{
      script:[
          {src:'http://bqq.gtimg.com/qidian-jssdk/release/2.0.0/qidian-jssdk.min.js',type:'text/javascript'}
      ]
    },
    data() {
      return {
        keyWords: '',
        listData: [],
        loading: false,
        currentPage: 1, // 当前第几页
        maxPage: 1,    // 总共多少页
        count: 5,
        uid:1
      }
    },
    computed: {
      queryParams() {
        return {
          limit: this.count,
          page: this.currentPage,
          index: 0,
          sort: '-created_at',
          uid: 1
        }
      },
      disabled () {
          return this.loading;
      }
    },
    methods: {
      // 初始化数据
      initData() {
        if (this.currentPage > this.maxPage) {
          return false;
        }
        this.loading = true;
        if(this.keyWords !== '' ){
            let keyWords = {keyword: this.keyWords}
            this.queryParams = Object.assign(this.queryParams, keyWords)
        }
        this.uid = jsApi.fetchjsApi()
        orderList(this.queryParams).then(res => {
            this.loading = false;
            this.maxPage = Math.ceil(res.total / this.count);
            let arr = res.data;
            if (this.currentPage > 1) {
                this.listData = this.listData.concat(arr)
            }
            else {
                this.listData = arr;
            }
        }).catch((err) => {
            this.loading = false
            this.$message.error(err.message || "加载错误");
        })
      },
      loadList() {
        this.currentPage ++;
        this.initData();
      },
      fetchOrders(){
          this.currentPage = 1
          this.initData()
      },
      // 跳转详情
      handleEdit(id) {
        console.log('id', id);
      },

      // 发送
      sendData(id) {
        console.log('id', id);
      }
    },
    mounted() {
      this.initData();
    }
  }
</script>

<style lang='scss'>
  @import "./assets/scss/order";
</style>
