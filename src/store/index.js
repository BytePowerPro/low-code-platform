//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

//引入一些功能函数

/******准备actions对象——响应组件中用户的动作******/
const actions = {}


//数据操作相关函数
/**根据path获取domTree中的对应对象**/
export function getElement(path) {
  let i = 0;
  let j = 0;
  let temp = state.domTree;
  while (i < path.length) { //寻路算法,最后temp将等于目标父元素
    while (temp.child[j].id !== path[i].id) {
      // console.log(temp.child[j].id);
      // console.log(path[i].id);
      j++;
    }
    temp = temp.child[j];
    i++;
    j = 0;
  }
  return temp;
}

/******准备mutations对象——修改state中的数据******/
const mutations = {
  updateWidth(state, newWidth) {  //更新画布宽度
    state.domTree.style.width = newWidth;
  },
  updateHeight(state, newHeight) {  //更新画布高度
    state.domTree.style.height = newHeight;
  },
  /*添加元素到domTree中
  state:固定的传参
  elem:对象,包含两个部分:
    {
      path:元素的路径,从id为canvas的div盒子开始,到需要添加的元素的父元素为止,为数组,形式,未来我应该会编写专门生成路径的函数和寻路用的函数
      component:需要添加的元素对象,包含预定的全部内容
    }
  */
  addLeaves(state, elem) {
    let temp = getElement(elem.path);
    temp.child.push(elem.component);
  },
  /* 移除元素,根据path,如清除的元素为缓冲区元素,还请手动清除缓冲区以免发生错误 */
  deleteLeaves(state, path) {
    let id = path[path.length - 1].id;
    let i = 0;
    path.splice(-1, 1);
    let temp = getElement(path);
    while (temp.child[i].id !== id) {
      i++;
    }
    console.log(temp.child[i]);
    temp.child.splice(i, 1);
  },
  /* 高亮选中元素(目前只能改个颜色) */
  highlight(state) {
    state.elementBuffer.style['color'] = '#000000'; //本不需要,但是为了能有效果展示需要
    state.elementBuffer.style['border'] = '1px solid #FF0000';
  },
  clearHighLight(state){
    state.elementBuffer.style['color'] = '#010101'; //本不需要,但是为了能有效果展示需要
    state.elementBuffer.style.border = null;
  },
  /* 清空buffer */
  clearBuffer(){
    this.state.pathBuffer.length=0;
    this.state.elementBuffer=null;
  },
  /* 将选中的元素添加到buffer中 */
  writeBuffer(state,path){
    this.state.pathBuffer=path;
    this.state.elementBuffer = getElement(path);
  },
  refreshWidth(state,newWidth) {
    this.state.elementBuffer.style.width=newWidth;
  },
  refreshHeight(state,newHeight) {
    this.state.elementBuffer.style.height=newHeight;
  },
  refreshColor(state,newColor) {
    this.state.elementBuffer.style.color=newColor;
  },
  refreshBackgroundColor(state,newBackgroundColor) {
    this.state.elementBuffer.style.backgroundColor=newBackgroundColor;
  },
  refreshFontFamily(state,newFontFamily) {
    this.state.elementBuffer.style.fontFamily=newFontFamily;
  },
  refreshFontSize(state,newFontSize) {
    this.state.elementBuffer.style.fontSize=newFontSize;
  },
  addEvents(state,newEvent){
    this.state.elementBuffer.events.push(newEvent); //???所以添加的event到底是个啥？
  }
  /*需要函数,转换函数,能将下面的dom树生成相应的结构*/
}

/******准备state对象——保存具体的数据*****/
const state = {
  /* 数据结构：
  树状，与dom树具有映射关系，存储各个元素的基本数据属性
  以下似乎是个例子？在正常情况下应只存在一个div元素盒子,没有下辖的a标签,
  目前存在改变后数据不能很好地抵达目标
  该数据结构并未正式投入使用*/
  domTree:
    {
      id: 'canvas',
      el: '<div>',
      style: {height: 560, width: 640}, //本大小为默认的试做大小,适配了Woceda的显示器,需要可更改
      events: [],
      text: '',
      child: [
        {
          id: 'div',
          el: '<bp-div/>',  //???
          style: {height: '200px', width: '200px',color: '#123456',backgroundColor:'',fontFamily:'',fontSize:''}, //样式
          events: [], // 绑定的事件？
          text: '我是一个div盒子', // 内容
          class: [], //目前只是用于存储
          child: [{ //子组件，可以有多个，为对象数组
            id: '114514',
            el: '<bp-link/>',
            style: {color: '#ccc',backgroundColor:'',fontFamily:'宋体',fontSize:''},
            events: [],
            href: '',
            text: '我应当是一个a标签',
            child: [],
          },
          ]
        },
      ]
    },
  pathBuffer:[],  //用来暂存需用控制的组件的路径信息
  elementBuffer:null,
}

//创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state
})


/*  数据样例，暂存于此
domTree: [{
    id: 'div',
    el: '<bp-div/>',  //???
    style: {height: 122, width: 222}, //样式
    events: [], // 绑定的事件？
    text: '', // 内容
    child: [{ //子组件，可以有多个，为对象数组
      id: '114514',
      el: '<bp-a/>',
      style: {color: '#ccc'},
      events: [],
      href: '',
      text: '',
      child: [
        ,
      ],
    },
    ]
  }]
*/