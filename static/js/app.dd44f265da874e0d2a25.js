webpackJsonp([1],{38:function(n,e,t){t(84);var r=t(23)(t(40),t(96),"data-v-bd26cd6c",null);n.exports=r.exports},40:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(24),o=t.n(r),i=t(45),a=t.n(i),s=t(44),l=t.n(s),u=t(93),c=t.n(u),d=t(92),f=t.n(d),m=t(81),h=(t.n(m),function(){for(var n=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],t=!0,r=0;r<e.length;r++)if(n.indexOf(e[r])>0){t=!1;break}return t}()),g=function(n,e){var t=new Date(Date.parse(n.replace(/-/g,"/"))).getTime(),r=new Date(Date.parse(e.replace(/-/g,"/"))).getTime();return Math.abs(t-r)/864e5};document.title+=g((new Date).getFullYear()+"-"+((new Date).getMonth()+1)+"-"+(new Date).getDate(),"2016-09-15")+1+"天",e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:f.a},data:function(){return{interval:27,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* Hi。宝贝！\n* 这么久了。还没和宝贝展示我的技能呢！但是啊经过很长时间思考我都没有思路做什么\n* 最后啊决定给小宝展示一下魔法\n* 如这个页面。就是个什么也没有的网页。\n* 我现在的工作就是给这种空白的页面加点儿东西。\n* 嗯。说起来手机和电脑还得区分一下。\n* 你现在用的是。。。"+(h?"电脑":"手机")+"\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n/* 白色背景太单调了。来点背景 */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54); \n}\n/* 文字太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  "+(h?"width: 48%;height: 96%;":"width: 96%;height: 50%;")+"\n  font-size: 14px;\n  line-height:1.5;\n}\n/* 这些代码颜色都一样。加点儿高亮区别来 */\n.token.selector{ color: rgb(133,153,0) }\n.token.property{ color: rgb(187,137,0) }\n.token.punctuation{ color: yellow }\n.token.function{ color: rgb(42,161,152) }\n.token.comment{ color: rgb(177,177,177) }\n/* 加个 3D 效果 */\nhtml{\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; \n  "+(h?"left: 0;":"left:0;right:0;margin:auto;")+"\n  top: 0; \n  -webkit-transition: none; \n  transition: none;   \n  "+(h?"-webkit-transform: rotateY(10deg) translateZ(-100px) ;transform: rotateY(10deg) translateZ(-100px) ;":"-webkit-transform: rotateX(-10deg) translateZ(-100px) ;transform: rotateX(-10deg) translateZ(-100px) ;")+"\n  "+(h?"":"-webkit-transform-origin: 50% 0% 0;transform-origin: 50% 0% 0;")+"\n}\n\n/* 再来一张信纸 */\n.resumeEditor{\n  position: fixed; \n  "+(h?"right: 0;":"left:0;right:0;margin:auto;")+"\n  "+(h?"top: 0;":"bottom:2%;")+"\n  padding: .5em;  \n  "+(h?"margin: .5em;":"")+"\n  "+(h?"width: 48%;height: 96%;":"width: 96%;height: 50%;")+"\n  border: 1px solid;\n  color: #222;\n  overflow: auto;\n  font-size: 14px;\n  line-height:1.5;\n  "+(h?"-webkit-transform: rotateY(-10deg) translateZ(-100px) ;transform: rotateY(-10deg) translateZ(-100px) ;":"-webkit-transform: rotateX(10deg) translateZ(-100px) ;transform: rotateX(10deg) translateZ(-100px) ;")+"\n    "+(h?"":"-webkit-transform-origin: 50% 0% 0;transform-origin: 50% 0% 0;")+"\n  }\n/* 我开始写了 */\n\n\n","\n/* 是不是看着很简陋粗糙？\n * 因为这是 Markdown 格式的\n * 一种程序员用来写文档日志的简易语言\n * 翻译成 网页 就行了\n */\n",'\n/* 再加点样式 */\n.resumeEditor{\n  padding: 2em;\n  line-height:1.8;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n  font-size:18px;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;            \n  content: counters(section, ".") " ";  \n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: rgba(221,221,221,.5);\n}\n\n/* OK。完成！ */\n\n'],currentMarkdown:"",fullMarkdown:"haoyu × yuzhu\n----\n\n2014年09月1日。相聚小学。两人初次见面。  \n2023年08月19日。即农历七月初四。在一起。  \n已有 `"+(g((new Date).getFullYear()+"-"+((new Date).getMonth()+1)+"-"+(new Date).getDate(),"2023-08-19")+1)+"` 天\n\n一起呲过的餐厅\n----\n\n* 花莳西餐厅（新世界店）\n* 景巷小厨·始于2006\n* 樊老头樊氏正宗牛骨粉（浮梁县南苑广场店）\n* 朗妈私房菜\n* 月珑沙炭火烤肉（老二中店）\n* 小凤阁秘制鸡虾煲（黉街店）\n* 李想大虾（八佰伴店）\n* 虾趣龙虾·趣味体验馆（徐家汇店）\n* 张记一哥烧烤酒场·香辣蟹·羊蝎子（安顺路艺享之城店）\n* 囧烧夜档·生蚝王·花雕鸡煲（华东师大店）\n* WOW LUCKY创意韩料（环球港店）\n* 肖四女乐山跷脚牛肉（虹桥南丰城店）\n* 水浒烤肉（京澳广场店）\n* 秦胖胖烤肉\n* 小青山铁锅炖东北菜（淮南吾悦广场店）\n* 王大痣自选烧烤工厂\n* 迷你椰泰式\n* 辣三俏.四川民间小吃\n* 懒婆娘成都火锅……\n\n一起看过的电影\n----\n\n1. 哪吒2魔童闹海\n2. 封神第一部：朝歌风云\n3. 坚如磐石\n4. 你想活出怎样的人生\n5. 流浪地球2\n6. 奥本海默\n7. 唐探1900\n8. 飞驰人生2\n19. ……\n\n一起玩过的地方\n----\n\n* 山西上饶\n* 景德镇\n* 婺源\n* 上海\n* 合肥\n* 武汉\n* 南京\n* 无锡\n* 青岛\n* 泰山\n* ……\n\n一起聊过的话\n----\n\n这一年，我们像两颗小行星，\n在彼此的轨道上碰撞出362216次火花✨\n——从清晨的“早安”到深夜的“梦见”，\n每一句都藏着心照不宣的温柔。\n\n🌟 星轨初遇\n\n单日心跳纪录「2024.1.18，2909条心跳信号」\n\n那天我们的对话像永不落幕的烟火，\n每一都都是很可堪的碎星，连月光都悄悄收敛了这些喧器。\n\n🌙 时光糖罐\n\n这一年我们362216次双向奔赴\n「比去年多64%的甜度，是所谓最甜的糖霜（8.5%），而独占7%的是温柔」,\n而1月18日的2909条信息，像雪地里的两串脚印，\n一深一浅，把寒冷踩成沸腾的糖浆。\n\n🌙 深夜2点的秘密基地\n\n你总爱在凌晨悄悄敲响对话框，\n02:00的月光听过最多心事，\n而08:00的朝阳又准时接住我们的“加油鸭！”\n——原来24小时的分分秒秒，都被我们填成了双份的甜。\n\n📅 周四的偏爱，周六的慵懒\n\n周四的咖啡杯旁，\n周五回寝室的路上，周六赖床的被窝里……\n一周七天，周二是最“话痨”的日子\n（悄悄说，14.99%的默契可不是谁都有😉）。\n而周日呢？那些说到一半的“14...”，\n大概是被懒觉偷偷吃掉了叭～\n\n🚀 从2023到2025，未来还要一起续费\n\n看！我们的对话量像坐上了火箭，\n2023年夏天开始一路飙升💫。\n\n你说，等到了2025年，聊天记录会不会绕地球一圈？\n\n🐾 爱的语法书\n\n「浩宇的32058次『宝贝』，\n瑜竹的866次『居居』」\n\n你说「臭宝」时像炸毛的猫（1069次），\n我回「嘿嘿」时藏着偷吃的蜂蜜（371次）。\n\n你说「Do」时像召唤我的咒语（14,340次），\n我应「Do」时如展开羽翼的回应（15,720次）\n\n这30,060次碰撞，\n让「一起做」变成比「我爱你」更滚烫的誓言 🔥\n\n原来「喜欢」这个词，用938种语气说才算完整。\n## 关键词藏宝图\n| 关键词   | 浩宇说  | 瑜竹说  | 总计   | 心动注解                           |\n--------------------------------------------------------------------|\n| 宝贝    | 32,058 | 15,724 | 47,782 | 糖纸剥开的叮咚声                     |\n| Do     | 14,340 | 15,720 | 30,060 | 编织未来的星尘魔法 ✨                |\n| 咪咪    | 386    | 9      | 395    | 专属昵称的甜蜜密码 🐱                |\n| 你好那个 | 1,108  | 1,274  | 2,382  | 欲言又止的暧昧信号 📶               |\n| 居居    | 420    | 866    | 1,286  | 小猪哼唧的撒娇时刻 🐷               |\n| 臭宝    | 597    | 472    | 1,069  | 炸毛猫的傲娇告白 🐾                |\n| 你干嘛  | 1,007  | 2,049  | 3,056  | 猫爪挠痒痒的回合战                 |\n| 尊嘟    | 380    | 508    | 888    | 系统认证的撒娇印章 🐾               |\n📮 **明年今日·未完待签收**\n\n「要不要把5点的留白填成早安？」\n\n毕竟我们的聊天记录，\n早就是时光机最舍不得删除的航行日志。\n\n而下一站，或许该教云雀说「我爱你」。\n\n\n> 【新一年的日历已经翻开，我偷偷许愿：“继续做彼此星标里的头号听众，把平凡日子聊成童话吧”❤️】 \n\n> —— 你的年度总结，来自舍不得删掉任何一条记录的某某\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=l()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=l()(a.a.mark(function e(){var r,s,l,u,c,d=this;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:s=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),l=s-r.length,this.currentStyle.length<s?(u=this.currentStyle.length-l,c=r.substring(u,u+1)||" ",this.currentStyle+=c,"\n"===r.substring(u-1,u)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},41:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(85),o=t.n(r);e.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},42:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(86),o=t.n(r);e.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},43:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(39),o=t(38),i=t.n(o);new r.a({el:"#app",render:function(n){return n(i.a)}})},81:function(n,e){},82:function(n,e){},83:function(n,e){},84:function(n,e){},92:function(n,e,t){t(83);var r=t(23)(t(41),t(95),"data-v-3539023c",null);n.exports=r.exports},93:function(n,e,t){t(82);var r=t(23)(t(42),t(94),"data-v-23b5cc2c",null);n.exports=r.exports},94:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},95:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}},96:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}}},[43]);
