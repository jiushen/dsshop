<template>
    <div class="orderList">
        <div class="orderList-filter">
            <tab-filter :value="keyWords" @change="fetchOrders" ref="tabFilter"></tab-filter>
            <el-divider class="divider"></el-divider>
        </div>
        <div class="orderList-content">
            <div class="orderList-item" v-for="(item,index) in orderList" :key="index" v-loading="loading">
              <div v-if="item.goods_list && item.goods_list.length === 1 ">
                  <p class="orderList-state">{{item.state_show}}</p>
                  <div class="orderList-item-content">
                      <el-image :src="item.goods_list[0].img" class="picture"></el-image>
                      <div class="content-wrap">
                          <p class="content-title">{{item.goods_list[0].name}}
                          </p>
                          <span class="content-price">¥{{item.total}}</span>
                          <div class="content-bottom">
                              <span class="model">
                                  <span v-for="(i,f) in item.goods_list[0].good_sku.product_sku" :key="f" >
                                      {{i.key}}:{{i.value}}
                                  </span>
                              </span>
                              <div class="sales-content">
                                  <span class="content-sales">共1件</span>
                                  <el-button round size="mini" class="el-icon-map content-location" @click.native="sendOrder"></el-button> 
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div v-else>
                  <p class="orderList-state">{{item.state_show}}</p>
                  <div class="orderList-item-content">
                      <span v-for="(i,index) in orderList[index].goods_list" :key="index" class="orderList-img">
                          <el-image :src="i.img" class="picture"></el-image>
                      </span>
                      <div class="content-wrap">
                          <div class="content-price-two">¥{{item.total}}</div>
                          <div class="content-number" v-if="item.goods_list && item.goods_list.length">
                              共{{item.goods_list.length}}件
                              <el-button round size="mini" class="el-icon-map" @click.native="sendOrder"></el-button> 
                          </div>
                      </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import TabFilter from './tab-filter.vue';
import { getList } from '@/api/goodIndent'

export default {
    name:'orderList',
    components: { TabFilter },
    data() {
        return {
          orderList:[{
              state:"待发货",
              price:'799',
              list:[{
                  name:"小寻智能手表能视频通uu",id:1,img:'',color:'5g蓝色'},{
                  name:"小寻智能手表能视频通11",id:2,img:'',color:'5g蓝色'}]
              },{
                  name:"小寻智能手表能视频通",id:3,img:'',state:"待发货",color:'5g蓝色',price:'799'
              },{
                  name:"小寻智能手表能视频通",id:4,img:'',state:"待发货",color:'5g蓝色',price:'799'
              }
                     
          ], 
          keyWords: '',
          loading:true

        }
    },
    mounted() {
      this.fetchOrdersList()

    },
    computed:{

    },
    methods: {
      fetchOrders(value){
          this.keyWords = value
          this.fetchOrdersList(this.keyWords)
      },
      sendOrder(){

      },
      fetchOrdersList(value){
          let params={
            limit:10,
            page:1,
            title: value 
          }
          this.loading = true;
          getList(params).then(([goodIndent]) => {
              this.orderList = goodIndent.data
              this.loading = false
          }).catch((error) => {
              this.loading = false
          })
      },

    }
}
</script>
<style lang='scss' scoped>
.orderList {
    &-filter {
        padding: 8px 12px;
        .divider {
            margin: 12px 0;
        }
    }
    &-content {
        .orderList-item{
            padding:8px 12px;
            .orderList-state{
                padding: 0 0 8px 0;
                color: rgba(38,45,61,1);
                font-size: 13px;
                font-weight: 500;
                text-align: left;
            }
            p {
                line-height: 18px;
                color: rgba(38,45,61,1);
                font-size: 13px;
                text-align: left;
            }
            &-content{
                display: flex;
                cursor: pointer;
                .picture {
                    width:56px;
                    height:56px;
                }
                .content-wrap{
                    margin-left:10px;
                    flex: 1;
                    width: calc(100% - 70px);
                    .content-title{
                        line-height: 18px;
                        color: rgba(38,45,61,1);
                        font-size: 12px;
                        text-align: left;
                        margin-bottom:12px;
                        display: inline-block;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: inline-block;
                        width: 90%;
                    }
                    .content-bottom{
                        line-height: 17px;
                        color: rgba(161,171,194,1);
                        font-size: 12px;
                        text-align: left;
                        display: flex;
                        .model{
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            flex:1
                        }
                        .sales-content{
                            // display: inline-block;
                            // width: 39%;
                            text-align: right;
                            flex:1;
                        }
                    }

                    .content-price{
                        float:right;
                        color: rgba(247,85,89,1);
                        font-size: 15px;
                        font-weight: 500;
                        text-align: right;
                        line-height: 18px;
                    }
                    .content-price-two{
                        text-align: right;
                        color: rgba(247,85,89,1);
                        font-size: 15px;
                        font-weight: 500;
                        text-align: right;
                        line-height: 18px;
                    }
                    .content-number{
                        text-align: right;
                        margin-top:18px;
                        line-height: 17px;
                        color: rgba(161,171,194,1);
                        font-size: 12px;
                    }

                }
                .orderList-img{
                    margin-right:4px;
                }
            }
            &:hover{
                background: rgba(248, 249, 251, 1);
            }
            &:active{
                background: rgba(248, 249, 251, 1);
            }
        }

    }
    .el-icon-map {
        background: url('../assets/icons/normal.png') center no-repeat;
    }
    .el-icon-map:before {
        content: '切换';
        font-size: 0;
        visibility: hidden;
    }
    .el-button--mini, .el-button--mini.is-round {
        padding: 4px 15px;
    }

}

</style>
