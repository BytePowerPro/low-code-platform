<template>
  <div class="AttributeCard" >
    <el-tabs type="border-card" stretch>
      <el-tab-pane label="样式">样式</el-tab-pane>
      <el-tab-pane label="事件">事件</el-tab-pane>
      <el-tab-pane label="动画">动画</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script >
export default {
  name:'AttributeCard',
  data(){
    return {

    }
  }
}
</script>

<style lang="less" scoped>
   .AttributeCard{
   
    height:calc(100% - 40px);
    .el-tabs{
       margin-top: 20px;
       margin-right: 10px;
        height: 100% ;
     }
    
  }
</style>