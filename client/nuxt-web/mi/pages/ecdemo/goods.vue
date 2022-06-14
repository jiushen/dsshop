<template>
    <div class="ecsetting-demo-goods">
        <div class="goods">
            <div class="goods-filter">
                <tab-filter :value="keyWords" @change="fetchGoods" ref="tabFilter"></tab-filter>
                <el-divider class="divider"></el-divider>
                <div ref="container" class="tab-container">
                    <div ref="tabs" class="tab-list">
                        <span
                            v-for="i in selectorProps"
                            :key="i.key"
                            class="selector-container"
                            :class="selectedSelector === i.key ? 'selected-selector' : ''"
                            @click="selectorChange(i.key)"
                            >{{ i.name}}</span
                        >
                    </div>
                </div>
            </div>
            <div class="goods-content">
                <div class="list-content">
                    <div v-if="selectedSelector === 1">
                        <p class="list-content-title">当前咨询</p>
                        <div class="footprint">
                            <goods-item 
                                :goodsList="currentItem" 
                                :selectedSelector="selectedSelector" 
                                :checkList="goodsIds.checked"
                                @checked="checkedGoods"></goods-item>
                        </div>
                    </div>
                    <div class="list-content-wrap" @click="iconChange" v-if="selectedSelector !== 3">
                        <span class="mr5" :class="isIconShow">{{titleDesc}}</span>
                    </div>
                    <div class="content-item">
                        <goods-item 
                            v-if="iconShow" 
                            :goodsList='list' 
                            :pageNum="pageNum"
                            :num="num"
                            :checkList="goodsIds.checkedList"
                            :selectedSelector="selectedSelector"
                            @checked="checkedGoods"
                            @change="changePages"
                            >
                        </goods-item>
                    </div>
                </div>
            </div>
            <el-footer class="footer">
                <!-- <span>已选({{Number}})</span> -->
                <el-button type="primary" :disabled="!goodsIds.length" size="small" class="button-send" @click="send(goodsIds)">发送</el-button>
            </el-footer>
        </div>
    </div>
</template>

<script>
import TabFilter from './components/tab-filter.vue';
import GoodsItem from './components/goods-item.vue';
import { goosList } from '@/api/good'

export default {
    components: { TabFilter,GoodsItem },
    name:'goods',
    data() {
        return {
            goodsList:[], // 全部
            recommendedList:[], // 推荐
            browseList:[], // 浏览足迹
            selectorProps: [{name:'浏览足迹',key:1},{name:'推荐',key:2},{name:'全部',key:3}],
            selectedSelector: 1,
            iconShow: true,
            list:[],
            currentItem: [],
            isObject: true,
            goodsIds:{
              length:0,
              checked: [],
              checkedList:[]
            },
            keyWords:'',
            pageSize:10, //每页数量
            pageNum: 1 ,//当前页
            pageTotal: 0,//总条数
            num: 0

        }
    },
    mounted() {
        this.fetchGoodsList()
    },
    computed:{
        titleDesc(){
            let num = this.list.length
            if(this.selectedSelector === 1) {
                return '浏览足迹'+ `（${num}）`
            }
            if(this.selectedSelector === 2) {
                return '客户可能喜欢'+ `（${num}）`
            }
        },
        isIconShow(){
            return this.iconShow ? 'el-icon-arrow-down':'el-icon-arrow-up'
        },      
    },
    methods: {
        selectorChange(val){
            this.selectedSelector = val
            this.$refs.tabFilter.inputClear()
            this.pageNum = 1
            this.goodsIds.checkedList = []
            this.goodsIds.checked = []
            this.fetchGoodsList()

        },
        iconChange(){
            this.iconShow = !this.iconShow
        },
        fetchGoods(value){
            this.keyWords = value
            this.pageNum = 1
            this.fetchGoodsList(this.keyWords)
        },
        // 获取列表接口
        fetchGoodsList(value){
            if(this.pageNum === 1){
                this.list = []
            }
            let listType;
            if(this.selectedSelector === 1){
                listType = 1
            }
            if(this.selectedSelector === 2){
                listType = 2
            }
            if(this.selectedSelector === 3){
                listType = 0
            }
            let params={
                limit: this.pageSize,
                page: this.pageNum,
                keyword: value,
                uid: 1,
                sort: '-created_at',
                listType: listType
            }
            goosList(params).then(res => {
                this.list = this.list.concat(res.data)
                this.list = this.handleArray(this.list)
                this.pageTotal = res.total
                if(this.selectedSelector === 1){
                    this.currentItem = [this.list[0]]
                } 
                this.num = parseInt(this.pageTotal / this.pageSize)
            }).catch((error) => {
                this.$message.error(error.message || "加载错误");
            })
        },
        handleArray(array){
            const res = new Map();
            return array.filter((array) => !res.has(array.id) && res.set(array.id, 1));
        },
        // 选择
        checkedGoods(value){
            this.goodsIds.checkedList = value
            this.goodsIds.checked = value
            this.goodsIds.length = value.length
        },
        //发送
        send(arr){
          console.log(arr.checked)
          

        },
        changePages(value){
            this.pageNum = value
            this.fetchGoodsList()   
        }

    }
}
</script>

<style lang='scss'>
.ecsetting-demo-goods {
    background-color: #fff;
    .goods {
        &-filter{
            padding: 8px 0px;
            .divider{
                margin: 12px 0;
            }
            .tab-container {
                width: 100%;
                font-size: 12px;
                overflow-y: auto;
                overflow-x: hidden;
                margin-top: 8px;
                padding: 0px 12px;
                .tab-list {
                    border-bottom: none;
                    white-space: nowrap;
                    float: left;
                    padding-right: 10px;
                    transition: transform 0.3s;
                }
            }
            .selected-selector{
                color: #4a70ff;
                background: #f0f6ff;
                border: 1px solid #4a70ff;
            }
            .selector-container {
                font-size: 12px;
                line-height: 22px;
                height: 22px;
                border: 1px solid #e1e6f0;
                border-radius: 12px;
                padding: 2px 8px;
                margin-right: 8px;
                cursor: pointer;
            }
        }
        &-content{
            margin-top:8px;
            .list-content{
                &-title{
                    color: rgba(38,45,61,1);
                    font-size: 13px;
                    font-weight: 500;
                    text-align: left;
                    padding:8px 25px;
                    line-height: 18px;
                }
                &-wrap{
                    color: rgba(38,45,61,1);
                    font-size: 13px;
                    font-weight: 500;
                    text-align: left;
                    padding:8px 10px;
                    line-height: 18px;
                    cursor: pointer;
                }
                .content-item{
                    height: 400px;
                    position: relative;
                    overflow: hidden;
                    margin-bottom:65px;
                }
                .footprint{
                    height: 100px;
                    position: relative;
                    overflow: hidden;
                }

            }
            .mr5{
              margin-right:5px;
            }
        }
        .footer {
            width:100%;
            height: 48px;
            position: fixed;
            bottom: 0px;
            padding: 0 40px;
            background: white;
            box-shadow: 0px -1px 16px rgba(30, 36, 49, 0.08);
            z-index: 99;
            .button-send {
                width: 60px;
                min-width: 60px;
                font-size: 12px;
                float: right;
                margin-top: 14px;
            }
        }

    }
    .el-button--primary {
        color: #FFF;
        background-color: #409EFF;
        border-color: #409EFF;
    }
    .el-button--primary.is-disabled, 
    .el-button--primary.is-disabled:active, 
    .el-button--primary.is-disabled:focus, 
    .el-button--primary.is-disabled:hover{
        background-color: rgba(64, 158, 255 , 0.5) !important;
        border-color: rgba(64, 158, 255 , 0.2) !important;

    }
}

</style>
