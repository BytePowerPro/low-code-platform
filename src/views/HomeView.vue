<template>
  <div class="home">
    	<!-- 标题 -->
    <header>
      <el-row>
        <h1>low-Code</h1>
        <el-button plain>保存</el-button>
        <el-button type="warning" plain>后退</el-button>
        <el-button type="danger" plain>重置</el-button>
        <el-button type="primary" plain>生成页面</el-button>
        <div class="resolutionRatio" >
          <span>分辨率:</span>
        <el-input v-model="viewWidth" size="mini" placeholder="" ></el-input>
        <span>x</span>
        <el-input v-model="viewHeight" size="mini" placeholder="" ></el-input>
        </div>
      </el-row>
    </header>
    <!-- 内容区 -->
    <div class="container">
    	<!-- 中间区域 -->
        <div class="middle column">
            <MiddleCanvas />
        </div>
        <!-- 左边区域 -->
        <div class="left column">
            <ComponentCard/>
        </div>
        <!-- 右边区域 -->
        <div class="right column">
           <AttributeCard/>
        </div>
        <!-- 清除浮动 -->
        <div style="clear: both"></div>
    </div>
  </div>
</template>

<script>
import ComponentCard from "../components/ComponentCard.vue"
import MiddleCanvas from "../components/MiddleCanvas.vue"
import AttributeCard from "../components/AttributeCard.vue"
export default {
  name: 'HomeView',
  components:{
    ComponentCard,
    MiddleCanvas,
    AttributeCard
  },
  data(){
    return{
      viewWidth:1080,
      viewHeight:1920
    }
  }
}
</script>
<style scoped lang="less">
.home{
  height: 100%;
   min-width: 1200px;
   max-width:1920px
}
	*{
            margin: 0;
            padding: 0;
        }
        header{
            height: 60px;
            line-height: 60px;
            color: white;
            // border-bottom: 1px solid black;
            box-shadow: 0 0 2px black;
           .el-row{
            
            h1{
              display: inline;
              font-size:24px;
              color: black;
            padding-right:80px ;
              padding-left:24px ;
            }
            
            .resolutionRatio{
                  display: inline-block;
                   margin-left:30px;
                 span{
                 
                  font-size:14px
                 }
                .el-input{
                  width: 60px;
                  height: 30px;
                }
            
                span{
                  color: black;
                  margin:0 10px;
                }
             }
          }
        }
        .container{
            padding-left: 250px;
            padding-right: 250px;
            height: calc(100% - 60px);
        }
        .column{
            float: left;
        }
        .middle{
            width: 100%;
            height: 100%;
            // background-color: salmon;
            text-align: center;
        }
        .left{
            width: 250px;
            height: 100%;
            margin-left: -100%;
            position: relative;
            right: 250px;
        }
        .right{
            width: 250px;
            height: 100%;
            text-align: center;
            // background-color: #bed28c;
            position:relative;
            margin-left: -250px;
            right:-250px;
        }
       
</style>
