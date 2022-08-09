<template>
  <div  class="can">
    <el-card :body-style="{ padding: '0px',height: '100%'}">
      <div @mouseup="setElement" >
       画布
      </div>
    </el-card>
  </div>
</template>

<script >
export default {
  name:'MiddleCanvas',
  data(){
    return {
       
    }
  },
  methods:{
    setElement(e){
      // console.log(e)
      console.log(e.offsetX,e.offsetY)
    }
  },
  watch:{
   
  }
}
</script>

<style lang="less"scoped>
  .can{
   
    height:calc(100% - 40px);
    padding: 20px 15px;
    .el-card{
       overflow: scroll;
        height: 100% ;
        div{
          
          width: 1920px;
          height: 1080px;
        }
     }
    
  }
</style>