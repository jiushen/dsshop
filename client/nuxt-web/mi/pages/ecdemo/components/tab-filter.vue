<template>
    <div class="tab-filter">
        <el-input 
            class="filter-input" 
            prefix-icon="el-icon-search" 
            v-model="key" 
            size="small"
            placeholder="请输入关键字" 
            clearable
            @change="inputChange(key)"
            @clear="inputClear"></el-input>
    </div>
</template>

<script>
export default {
  name:'tabFilter',
  props:{
      value:{
          type: String,
          default:''
      }
  },
  data() {
    return {
      key:''
    }
  },
  mounted() {
    this.key = this.value

  },
  methods: {
    inputChange(value){
        this.$emit('change',value)
    },
    inputClear(){
        this.key=''
        this.$emit('change',this.key)
    }

  }
}
</script>
<style lang='scss'>
 .tab-filter{
      padding: 0px 12px;
      .el-input.is-active .el-input__inner, .el-input__inner:focus{
          border-color:#409eff;
          outline: 0
      }
 }
</style>
