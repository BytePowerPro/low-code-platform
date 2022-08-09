<template>
<div class="leftBox">
    <el-card :body-style="{ padding: '0px' }"> 
      <span>组件</span>
   
     <div name="btn"  @mousedown="show">
        按钮
     </div>
      <div>
        插件
     </div>
     <div>
        插件
     </div>
    </el-card>
</div>
</template>

<script >
export default {
  name:'ComponentCard',
  data(){
    return {

    }
  },
  methods:{
    show(e){
       console.log(e)
    }
  }
}
</script>

<style lang="less" scoped>
 .leftBox{
         height:calc(100% - 50px);
    padding: 20px 0 20px 10px;
    padding-top: 20px;

      .el-card{
   
       height: 100%;
       padding:5px;
       span{
        display: block;
        height:60px;
        font-size: 24px;
        text-align: center;
      line-height: 60px;
       }
        div{
          display:inline-block;
          width: 107px;
          margin-right: 5px;
          margin-top:5px;
          height:50px;
          line-height: 50px;
          text-align: center;
          border: 1px solid #ccc;
          border-radius: 5px;
          // box-shadow: 0 0 2px #ccc;
          
        }
      }
      
 }
</style>