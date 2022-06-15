<template>
    <div class="userInfo">
        <div class="member-ship" v-loading="loading">
            <p class="member-ship-title">会员信息</p>
            <div class="member-ship-content">
                <div class="member-ship-item">
                    <div class="information ship-name">会员名</div>
                    <div>{{shipObj.nickname? shipObj.nickname : shipObj.name}}</div>
                </div>
                <div class="member-ship-item">
                    <div class="information ship-name">性别</div>
                    <div>{{shipObj.gender_show}}</div>
                </div>
                <div class="member-ship-item">
                    <div class="information ship-name">余额</div>
                    <div>{{shipObj.money}}</div>
                </div>
                <div class="member-ship-item">
                    <div class="information ship-name">注册时间</div>
                    <div>{{shipObj.created_at}}</div>
                </div>
                <div class="member-ship-item">
                    <div class="information ship-name">最后登录时间</div>
                    <div>{{shipObj.updated_at}}</div>
                </div>
                <div class="member-ship-item">
                    <div class="information ship-name">状态</div>
                    <div>{{shipObj.state_show}}</div>
                </div>
                <div class="member-ship-item">
                    <div class="information ship-name">邮箱地址</div>
                    <div>{{shipObj.email? 'shipObj.email':'无'}}</div>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
import { openapi } from '@/api/user'
import { getToken } from '@/plugins/auth';
import jsApi from './assets/js/jsApi.js';

export default {
    name:'userInfo',
    head:{
      script:[
          {src:'http://bqq.gtimg.com/qidian-jssdk/release/2.0.0/qidian-jssdk.min.js',type:'text/javascript'}
      ]
    },
    data() {
        return {
            shipObj:{},
            loading: true,
            uid:1
        }
    },
    mounted() {
        this.fetchUser()
    },
    methods: {
        fetchUser(){
            // let access_token = this.fetchToken()
            this.uid = jsApi.fetchjsApi()
            let params = {
                // access_token: access_token,
                // code: 1,
                uid:this.uid
            }
            openapi(params).then(res => {
                this.shipObj = res.data[0]
                this.loading = false
            }).catch((error) => {
                this.loading = false
                this.$message.error(error.message || "加载错误");
            })

        },
        // fetchToken(){
        //     let token= getToken('token')
        //     return token
        // }

    }
}
</script>
<style lang='scss' scoped>
.userInfo{
    padding:20px;
    background-color: #fff;
    .member-ship {
        padding:0px 5px;
        &-title{
            color: rgba(38,45,61,1);
            font-size: 13px;
            font-weight: 500;
            text-align: left;
            margin-bottom:5px;
            line-height: 18px;
        }
        &-content{
            font-size: 13px;
            font-weight: 400;
            text-align: left;
            .member-ship-item{
                line-height:24px;
                div{
                    display: inline-block;
                }
                .information {
                    color: rgba(138,147,169,1);
                }
                .ship-name{
                    width:10%;
                    min-width:52px;
                    margin-right:5px;
                }
                
            }

        }


    }
}


</style>