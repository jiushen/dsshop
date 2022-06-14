<template>
    <div class="goods-item" v-infinite-scroll="load"
        infinite-scroll-disabled="disabled">
        <el-checkbox-group v-model="checkedList" class="checkedItem" :max="1">
        <div v-for="(item,index) in list" :key="index" @click="checkGoods(item)"
                class="goods-item-content" :class="selected === item.id ? 'selected' : ''"  >
            <el-checkbox :label="item.id"></el-checkbox>
            <el-image v-if="item.resources && item.resources.img" class="picture" :src="item.resources.img"></el-image>
            <el-image v-else class="picture">
                <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                </div>
            </el-image>
            <div class="content-wrap">
                <p class="content-title">{{item.name}}
                </p>
                <span class="content-price">¥{{item.price || item.order_price}}</span>
                <div class="content-bottom">
                    <span>库存:{{item.inventory_show}}</span>
                    <span class="content-sales">销量:{{item.sales}}</span>
                </div>
            </div>
        </div> 
        </el-checkbox-group>
        <p v-if="rollLoading && list.length>10" class="loadingTip">列表加载中...</p>
        <!-- <p v-if="noMore" class="loadingTip">没有更多了</p> -->

    </div>
</template>

<script>
export default {
    name:'goodsItem',
    data() {
        return {
            list:[],
            selected: 0,
            rollLoading: false,
            count:1,
            noMore:false,
            checkedList:[]
        }
    },
    props: {
        goodsList: {
            type: Array,
            default() {
                return [];
            }
        },
        selectedSelector:{
            type: Number,
            default: 1
        },
        pageNum:{
            type: Number,
            default: 1
        },
        num:{
            type: Number,
            default: 1
        },
        checkList:{
            type: Array,
            default() {
                return [];
            }
        }
    },
    watch:{
        goodsList:{
            handler:function(newVal){
                if(newVal){
                    this.list = newVal
                }
            },
            deep:true,
        },
        selectedSelector:{
            handler(newValue) {
                if(newValue){
                    this.noMore = false
                    this.count = 1
                }
            }
        },
        checkedList:{
            handler:function(newVal){
                if(newVal){
                    this.$emit('checked',newVal)
                }
            },
            deep:true,
        },
        checkList:{
            handler:function(newVal){
                if(newVal){
                    this.checkedList = newVal
                }
            },
            deep:true,
        },
        pageNum:{
            handler(newValue) {
                if(newValue){
                    this.pageNum = newValue
                }
            }
        }
    },
    computed:{
        disabled () {
            return this.noMore
        }
    },
    mounted() {
        this.list = this.goodsList
        this.count = this.pageNum
        this.checkedList = this.checkList

    },
    methods: {
        //跳转到详情页
        checkGoods(value){
          // this.selected = value.id
          // let href= 
        //  window.open(href, '_blank')

        },
        // 加载更多
        load () {
            this.rollLoading = true
            this.noMore = false
            if(this.pageNum < this.num){
                  this.count += 1
                  this.$emit("change",this.count)
            }else{
                this.noMore = true
                this.rollLoading = false
            }
        }
    }
}
</script>
<style lang='scss' scoped>
.goods-item {
    position: absolute;
    left: 0;
    top: 0;
    right: -17px;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: scroll;
    .checkedItem {
        ::v-deep .el-checkbox__label{
            display: none !important;
        }
        ::v-deep .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
            background-color: #409EFF !important;
            border-color: #409EFF !important;
        }
        ::v-deep .el-checkbox__inner:hover{
              border-color: #409EFF;
        }

    }

    &-title{
        color: rgba(38,45,61,1);
        font-size: 13px;
        font-weight: 500;
        text-align: left;
        margin-bottom:5px;
        line-height: 18px;
    }
    &-content{
        display: flex;
        padding:8px 12px;
        cursor: pointer;
        align-items: center;
        .picture {
            width:56px;
            height:56px;
            margin-left:8px;
        }
        .content-wrap{
            margin-left:10px;
            flex: 1;
            width: calc(100% - 100px);
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
                width: calc(100% - 50px);
            }
            .content-bottom{
                line-height: 17px;
                color: rgba(161,171,194,1);
                font-size: 12px;
                text-align: left;
            }
            .content-sales{
                float:right;
                margin-right: 10px;
            }
            .content-price{
                float:right;
                color: rgba(247,85,89,1);
                font-size: 15px;
                font-weight: 500;
                text-align: right;
                margin-right: 10px;
                line-height: 18px;
            }

        }
        &:hover{
            background: rgba(248, 249, 251, 1);
        }
    }
    .selected{
        background: rgba(248, 249, 251, 1);
    }
    .loadingTip{
      text-align: center;
      font-size: 12px;
      color: #A1ABC2;
      line-height: 18px;
    }
}
</style>
