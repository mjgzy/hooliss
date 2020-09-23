<template>
  <div>
<!--    导入头部-->
    <h-header></h-header>
  <div class="banner" id="banner">
    <a  class="d1"></a>
    <a class="d1"></a>
    <a class="d1"></a>
    <a class="d1"></a>
    <a class="d1"></a>
    <a class="d1"></a>
    <div class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide">
      <i class="icon-d-h-ctrl01-2">下一页</i>
      <i class="icon-d-h-ctrl01-22">下一页</i>
    </div>
    <div class="swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide">
      <i class="icon-d-h-ctrl01-1">上一页</i>
      <i class="icon-d-h-ctrl01-11">上一页</i>
    </div>
    <div class="d2" id="banner_id">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
  <!--index banner end----------------------------------------------------------------------------------------------------->

  <div class="idxBnd">
    <div class="tCnt w1225">
      <a href="http:"  >
      </a>
      <a href="" >
      </a>
      <a href="" >
      </a>
      <a href="">
        <img src="../../public/Images/index/banimg1.jpg" alt="" />
      </a>
      <a href="">
        <img  src="../../public/Images/index/banimg2.jpg" alt="" />
      </a>
      <a href="">
        <img src="../../public/Images/index/banimg5.jpg" alt="" />
      </a>
      <a href="">
        <img  src="../../public/Images/index/banimg4.jpg" alt="" />
      </a>
<!--      <a href="">-->
<!--        <img src="../../public/Images/index/123.jpg" alt="" />-->
<!--      </a>-->
    </div>
  </div>

  <!--热销 start-->
  <div id="hot_display_position"></div>
  <div class="idxSet hotSet">

    <div class="tTit w1225">
      <span class="tNm"  about="1">[排行榜]</span>
      <!--显示数据库表分类-->
      <ul id="hotTit" class="tGud" >
        <li v-for="grade in watchs.gradeList" >{{grade.gradeName}}</li>
      </ul>

    </div>
    <div class="rotary_button_p">
      <a class="rotary_button_a" href="">
        <img src="../../public/Images/index/e0acea6662ac80a08e6feb26cb40425.png" />
      </a>

      <!--导入轮播图按钮-->
      <!--<div th:insert="~{common/rotary_button :: rotary_button}"></div>-->
    </div>
    <div class="tBdy w1225 hotCon" >
      <div class="tPdtLst">
        <div class="tLnk"></div>
        <!--排行榜显示信息-->
        <ul id="w_info" class="nanrankTit">
          <!--商品展示开始-->

          <li class="watchLi" v-for="(watch,index) in watchs.watchRankingList.list" @click="liClick(watch.watchId)" data-is-boutique="0" >
            <div class="phb_01">
              <i class="icon-d-phb-bg"></i>
              <em>NO.{{index+1}}</em>
            </div>
<!--             :href="'/watch/doWatch.xf/'+watch.watchId"-->
            <a target="_blank" class="s_goods_img">
              <img class="lazy-load"  :src="watch.watchImage" alt="">
            </a>
            <div class="goodss">
              <p style="text-align: center;" class="red f14 bold">
                <del class="c666">市场价:￥<span>{{watch.watchPrice}}</span></del>
                好利时价:￥<span>{{watch.soPrice}}</span>
              </p>
              <a target="_blank" href="https://www.wbiao.cn/goods/42471.html" class="s_goods_name elps2" >{{watch.watchName}}
              </a>
              <div class="goods_sale">
                <em class="s_sale_num">销量<span>{{watch.watchSellCount}}</span></em>
                <a target="_blank"  :href="'/brand/doShop.xf/'+watch.brandId" class="s_shop">
								<span>
									[{{watch.watchBrand.country.cname}}]{{watch.watchBrand.brandName}}官方旗舰店
								</span>
                </a>
              </div>
            </div>
          </li>

          <!--商品展示结束-->
        </ul>
        <div class="mLnk"></div>
      </div>
      <div class="mLnk"></div>
    </div>
    <div class="afwa"><input  type="hidden" value="0"></div>
  </div>

  <!--<p align="center">&nbsp;</p>-->

  <!--排行榜 end-->



  <div id="rank_display_position"></div>
  <div class="idxSet rankSet">

    <div class="tTit w1225">
      <span class="tNm" about="2">[新品推荐]</span>
      <ul name="1" id="idxz" class="tGud">
        <li v-for="g in watchs.gradeList" >{{g.grade_name}}</li>
      </ul>

    </div>
    <p class="rotary_button_p">
      <img src="../../public/Images/index/139632507725908.jpg" />
    </p>

    <div class="tBdy w1225 hotCon" >
      <div class="tPdtLst">
        <div class="tLnk"></div>
        <ul  id="nanrankTit" class="nanrankTit">
          <li class="watchLi" data-is-boutique="0" v-for="d in watchs.products.list"   th:onclick="'javascript:li_click(\''+${d.watchId}+'\');'">
            <div class="phb_01">
            </div>
            <a target="_blank" :href="'/watch/doWatch.xf/'+d.watchId" class="s_goods_img">
              <img class=" lazy-load" :src="d.watchImage" alt="">
            </a>
            <div class="goods_txt">
              <p style="text-align: center;" class="red f14 bold">
                <del class="c666">市场价:￥<span>{{d.watchPrice}}</span></del>
                好利时价:￥<span>{{d.watchPrice}}</span>
              </p>
              <a target="_blank" href="" class="s_goods_name">{{d.watchName}}
              </a>
              <div class="goods_sale">
                <em class="s_sale">销量<span>{{d.watchSellCount}}</span></em>
                <a target="_blank"  :href="'/brand/doShop.xf/'+d.brandId" class="s_shop">
									<span>
									[{{d.watchBrand.country.cname}}]{{d.watchBrand.brandName}}官方旗舰店
								</span>
                </a>
              </div>
            </div>
          </li>
        </ul>
        <div class="mLnk"></div>
      </div>
      <div class="mLnk"></div>
    </div>
    <!--导入分页插件-->
    <div style="text-align: center">
      <div class="page_nav">
        <span class="pre" name="new">上一页</span>&nbsp;
        <div style=" display: inline;" class="page_size">
        </div>
        <a  class="next" name="new">下一页</a>&nbsp;
      </div>
      <!-- 翻页 End -->
      <div class="record">
        共有&nbsp;<span class="pageTotal hnh" >{{watchs.products.pages}}</span> 页，
        当前页:【&nbsp;<span class="current_no">{{watchs.products.pageNum}}</span>&nbsp;】
        跳到第&nbsp;
        <input id="jtp" type="text" class="txt" maxlength="4" maxpage="774" value="" />
        &nbsp;页&nbsp;
        <a class="btnJtp btn" name="new" href="javascript:void(0);">确定</a>
      </div>
    </div>
  </div>

  <!--销售排行榜 end-->

  <div class="idxSet rankSet">

    <div class="tTit w1225">
      <span class="tNm" about="3">[时尚腕表]</span>
      <ul name="2" id="rankTit" class="tGud">
        <li v-for="g in watchs.gradeList" >{{g.grade_name}}</li>
      </ul>

    </div>
    <p  class="rotary_button_p">
      <img src="../../public/Images/index/135789226426016.jpg" />
    </p>
    <div class="tBdy w1225 hotCon" >
      <div class="tPdtLst">
        <div class="tLnk"></div>
        <ul id="nvrankTit" class="nanrankTit">
          <li class="watchLi" v-for="d in watchs.grade.list" th:onclick="'javascript:li_click(\''+${d.watchId}+'\');'" data-is-boutique="0"  >
            <div class="phb_01">
            </div>
            <a target="_blank" :href="'/watch/doWatch.xf/'+d.watchId" class="s_goods_img">
              <img class=" lazy-load"  :src="d.watchImage" alt="">
            </a>
            <div class="goods_txt">
              <p style="text-align: center;" class="red f14 bold">
                <del class="c666">市场价:￥<span>{{d.watchPrice}}</span></del>
                好利时价:￥<span >{{d.watchPrice}}</span>
              </p>
              <a target="_blank"  class="s_goods_name">{{d.watchName}}
              </a>
              <div class="goods_sale">
                <em class="s_sale">销量<span >{{d.watchSellCount}}</span></em>
                <a target="_blank"  :href="'/brand/doShop.xf/'+d.brandId" class="s_shop">
									<span>
									[{{d.watchBrand.country.cname}}]{{d.watchBrand.brandName}}官方旗舰店
								</span>
                </a>
              </div>
            </div>
          </li>
        </ul>
        <div class="mLnk"></div>
      </div>
      <div class="mLnk"></div>
    </div>
    <!--导入分页插件-->
    <div style="text-align: center">
      <div class="page_nav">
        <span class="pre" name="trend">上一页</span>&nbsp;
        <div style=" display: inline;" class="page_count">
        </div>
        <a   class="next" name="trend">下一页</a>&nbsp;
      </div>
      <!-- 翻页 End -->
      <div class="record">
        共有&nbsp;<span class="pageTotal thred">{{watchs.grade.pages}}</span> 页,
        当前页:【&nbsp;<span class="current_no">{{watchs.products.pageNum}}</span>&nbsp;】
        ，跳到第&nbsp;
        <input id="pp" type="text" class="txt" maxlength="4" maxpage="774" value="" />&nbsp;页&nbsp;
        <a class="btnJtp btn" name="trend" href="javascript:void(0);">确定</a>
      </div>
    </div>
  </div>

  <!--back top ---------------------------------------------------------------------------------------------->
  <div id="top_item">
    <a id="back_top" onclick="return false;" title="回到顶部"></a>
  </div>

<!--  <script type="text/javascript" src="public/Script/banner.js"></script>-->
<!--  <script type="text/javascript" src="public/js/index.js"></script>-->

  </div>
</template>

<script>
  import {service} from "../network/request";
  import HHeader from "../components/HHeader";
  export default {
    name: "Index",
    data(){
      return {
        watchs: {
          gradeList:{list:{}},
          products:{pages:0,pageNum:0,list:{}},
          grade:{pages:0,pageNum:0,list:{}},
          watchRankingList:{pages:0,pageNum:0,list:{}}
        }
      }
    },
    components:{
      HHeader
    },
    created() {
        service({
          url:"index-provider/doIndex.xf"
        }).then(res=>{
          console.log(res);
          this.watchs.grade=res.data.data.grade;
          this.watchs.products=res.data.data.products;
          this.watchs.gradeList=res.data.data.gradeList;
          this.watchs.watchRankingList=res.data.data.watch_ranking_list;
        }).catch(err=>{
          console.log(err);
      });
    },
    methods:{
      liClick(watchId){
        console.log('dwadwa');
        const {href}=this.$router.resolve({name:'watchDetails',query:{watchId}});
        window.open(href, '_blank')
      }
    }
  }


</script>

<style scoped>
  @import url('../assets/index/index.css');
  @import url('../assets/css/sxg.css');
</style>