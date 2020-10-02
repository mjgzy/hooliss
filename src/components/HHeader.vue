<template>
  <div>
    <!-- Begin header -->
    <div id="member_info2"></div>
    <div class="head">
      <div class="r1 w1225">
        <div class="ri">
			<span class="tLnk2">
				<a href="/shopcart/doCart.xf">购物车</a>
				<input type="hidden" value="${sessionScope.Joy_User.u_Name}" id="u_name">
				<input type="hidden" id="ParentPath" value="">
			</span>
          <span class="tLnk1">
            <div v-if="this.$store.state.status!=='logout'">
              <span  id="loginInfo">{{$store.state.user.username}},欢迎你</span>
	            <a  @click="logout" class="f12">退出</a>
            </div>
			 <div v-if="this.$store.state.status==='logout'">
                <router-link  to="/login" class="f12"> 请登录 </router-link>
				<a href="/user/forRegister.xf" class="f12">注册</a>
            </div>

			</span>
        </div>
      </div>
      <div class="r2 w1225">
        <h1 class="logo w440">
          <img
                  src="/Images/logo/shop_logo2.png"/>
        </h1>
        <div class="srh">
          <form id="searchForm" name="searchForm" method="get"
                action="/shoubiao.html" onsubmit="return checkSearchForm()">
            <input type="hidden" value="1" name="dow" id="dow">
            <input name="w" id="w" type="text" class="tIptTxt c999 f14"
                   value="搜索 品牌/系列/型号" title="搜索 品牌/系列/型号"/> <a class="c__search"><b>搜索</b></a>
          </form>
        </div>
        <div class="wbPt">
          <span class="tTel" style="font-size: 16px;">服务热线：400-888-8888</span>
        </div>
      </div>
      <!-- 模块修改：腕表弹出层，修改内容：从展开修改为收起。修改2014-5-19 15:17:34 修改员：huang-->
      <div class="r3 w1225" style="position: relative">
        <div @mouseover="nav_left_menu=true"  @mouseout="nav_left_menu=false" class="pt_nav_left fl">
          <a target="_blank" href="" class="all_wb_txt">全部商品<i class="icon-a-all"></i></a>
          <div class="nav_left_menu" v-show="nav_left_menu">
            <div @mouseover="menu_box_state=true" @mouseout="menu_box_state=false" class='menu_box' v-for="menuBox in watchTypes">
              <i class='menu_line fl'></i>
              <dl>
                <dt class='fl'>
                  <a rel='nofollow' target='_blank'
                     :href="'/doShop.xf/'+menuBox.id">{{menuBox.typeName}}<em>/</em></a>
                </dt>
                <dd class='rel fl elps1'>
                  <a  v-for="aBrand in menuBox.watchBrandVo"  rel='nofollow' target='_blank' class='rel_a' @href="'/brand/doShop.xf/' + aBrand.brandId">{{aBrand.brandName}}</a>
                  <div class='clear'></div>
                </dd>
                <dd class='sub_menu clearfix' v-show="menu_box_state">
                  <div class='col_box fl'>
                    <div class='col_1'><span class='t'>品牌</span>
                      <div class='brand_list clearfix'>
                        <ul class='clearfix' >
                          <li  v-for="aBrand in menuBox.watchBrandVo" class='fl'>
                            <a @href="'/brand/doShop.xf/' + aBrand.brandId " >
                            <p class='p_logo lazy-load'>
                              <img @src="aBrand.bLogo" alt=''>
                            </p>
                            <p class='p_name'>{{aBrand.brandName}}</p>
                            </a>
                          </li>
                          <div class='menu_bottom_line'></div>
                        </ul>
                        <i class='brand_bottom'></i>
                      </div>
                    </div>
                  </div>
                  <a target='_blank' href='#' class='brand_ads fl lazy-load'>
                    <img src='//image8.wbiao.co/mall/09f566c7795947d383f924288d945c8d.jpg?x-oss-process=image/resize,m_pad,w_205,h_412'
                         alt=''>
                  </a>
                </dd>
                <div class='clear'></div>
              </dl>
            </div>
          </div>
        </div>
        <!-- end pop_menu-->
        <!--end gMune 修改2019-12-19 15:15:00 修改员——敌敌畏-->
        <ul class="gNav">
          <li>
            <router-link  class="cur" to="/">首页</router-link>
           </li>
          <li><a href="/brand/doBrand.xf" title="品牌馆">品牌馆</a></li>
          <li><a href="/discount/time.xf/0/7" title="限时抢购">限时抢购</a></li>
          <li><a href="/commodity/doOs.xf/0/1/0/1/20/0/0" title="男士腕表">男士腕表</a></li>
          <li><a href="/commodity/doOs.xf/0/2/0/1/20/0/0" title="女士腕表">女士腕表</a></li>
          <li><a href="/user/doVip.xf" title="点击进入个人中心">会员中心</a></li>
          <li><a href="返回到个人中心的请求"
                 style="font-size: 15px; color: #ce1739;" title="寻表专区/采购清单"><strong>寻表专区/采购清单</strong></a></li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  import {service} from '../network/request'

  export default {
    name: "HHeader",
    data() {
      return {
        nav_left_menu:false,
        menu_box_state:false,
        watchTypes: null
      }
    },
    created() {
      service({
        'url': 'brand-provider/doBrandById.xf'
      }).then(res => {
        console.log("watchTypes>>>", res);
        console.log("watchTypes>>>", res.data);
        console.log("watchTypes>>>", res.data.data);
        this.watchTypes = res.data.data;
      }).catch(err => {
        console.log(err);
      });
    },
    methods: {
      //注销用户事件
      logout:{

      }
    }
  }



  // let u_name=$("#u_name").val;
  // let flag=false;
  // let page_size = 20;
  // let user_id = 0;
  // if ( $("#loginInfo").length!==0){
  //   user_id=$("#loginInfo").attr("name");
  // }

  //     $(".pt_nav_left").hover(function () {
  //       if (!flag){
  //         flag = true;
  //         brandbyid(6);
  //       }
  //
  //       $(".nav_left_menu").show();
  //     },function () {
  //       $(".nav_left_menu").hide();
  //     });
  //
  //     $(".nav_left_menu").on("mouseover",".menu_box","",function(){
  //       $(this).find(".sub_menu").show();
  //     }).on("mouseout",".menu_box","",function () {
  //       $(this).find(".sub_menu").hide();
  //     });
  //
  //     $("#h1img").attr("src","http://127.0.0.1:81/logo/LOGO.png");
  //
  //
  // //	搜索框点击事件
  //     $(".tIptTxt").click(function () {
  //       $(this).val("").removeClass("c999");
  //     }).blur(function () {
  //       if ($(this).val()===""){
  //         $(this).addClass("c999").val("搜索 品牌/系列/型号");
  //       }
  //
  //     });
  //     $(".c__search").click(function () {
  //       let key_word = $(this).prev().val();
  //       $(this).attr("href","/commodity/doOs.xf/"+key_word+"/0/0/0/"+page_size+"/0/0");
  //     });


</script>

<style scoped>
  @import "../assets/css/common/header.css";
  @import "../assets/css/common/sxg.css";

</style>