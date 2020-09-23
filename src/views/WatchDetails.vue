<template>
  <div>
    <!--    导入头部-->
    <h-header></h-header>
  <div id="member_info2"></div>
  <input type="hidden" id="s" value="0"/>
  <div id="main2">
    <div class="map">
      <div class="map_info">
        当前位置: <router-link to="/index">首页</router-link>
        <code>&gt;</code>
        <a href="">[{{brand.country.cName+brand.brandName }}]官方旗舰店</a>
        <code>&gt;</code>
        <a class="watch_name" href="">[{{watch.watchName}}]</a>
      </div>
    </div>
    <div class="shop_info1 clearfix">
      <div class="shop_info1_img">
        <div class="left-pro">
          <div class="t2">
            <a :href="watch.watchImage" :name="watch.watchImage" id="zoom1" class="MagicZoom MagicThumb">
              <pic-zoom :url="watch.watchImage" width="350" height="350" class="main_img"
                   id="main_img" style="width:400px; height:400px;" /></a>
          </div>
          <div class="t1">
            <div id="showArea">
              <img v-for="(images,index) in watchImages"
                        :href="images.images" rel="zoom1"
                        :rev="images.images" class="image_detail" :src="images.images" :scale="3"/>
            </div>
          </div>
        </div><!--end left-por-->
      </div><!--end shop_img-->
      <div class="shop_info1_tit">
        <div class="text_life">
          <h1 v-if="brand" class="shop_tit">【<i :name="brand.brandId">{{brand.brandName}}</i>】&nbsp;&nbsp;{{watch.watchName}}</h1>
          <span class="mc" v-if="watch">{{watch.watchName}}
                    <a id="watchid">{{watch.watchId}}</a></span>

          <div class="upper_price_jiage clearfix">
            <div class="upper_price_jiage_left fl">好利时价</div>
            <div class="upper_price_jiage_right fl">
              <span class="upper_price_jiage_a">￥</span>
              <span class="upper_price_jiage_b js_price" v-if="watch">{{watch.soPrice}}</span>
              <span class="upper_price_jiage_c">
                            <em>市场价</em> <i v-if="watch">￥{{watch.watchPrice}}</i>
                        </span>
              <a href="#">(促销通知)</a>
            </div>
          </div>
          <div class="fuqi">
            <span class="fq1">分期价：</span>
            <span class="fq2" v-if="watch">{{watch.soPrice / 12}}×12期</span>
            <a href="#">如需了解更多活动详情或推荐，请咨询在线客服</a>
          </div>
          <div class="peisong">
            <span>中国大陆，下单后17点前支付，当天发货</span>
          </div>
        </div>
        <div class="xian clearfix"></div>
        <div class="promise clearfix">
          <div class="left fl">承诺</div>
          <div class="right fl">
            <li class="fl"><i></i> <span class="">正品保障</span>
              <div class="popup" style="display: none;">
                全站自营直采，高于瑞士国家标准的进出仓全检机制，万表7年零假货投诉。
              </div>
            </li>
            <li class="fl"><i></i> <span>正规发票</span>
              <div class="popup" style="display: none;">
                提供国家税务局认可的正规发票，具有售后维权法律效力。
              </div>
            </li>
            <li class="fl"><i></i> <span class="">假一赔三</span>
              <div class="popup" style="display: none;">
                已售出名表超过45万枚，正品无假货，如有售假三倍赔偿。
              </div>
            </li>
            <li class="fl"><i></i> <span>7天退换</span>
              <div class="popup" style="display: none;">
                无理由退换：除特殊商品外（特卖、私人定制、预售等）质量退换：非人为机芯故障或商品制造缺陷。
              </div>
            </li>
            <li class="fl"><i></i> <span class="">全球联保</span>
              <div class="popup" style="display: none;">
                800+家售后服务点，完善的售后保障，可享受品牌全球联保服务。
              </div>
            </li>
            <li class="fl"><i></i> <span>免息分期</span>
              <div class="popup" style="display: none;">
                与15家银行合作，招商、中行等提供免息分期购表服务。
              </div>
            </li>
            <li class="fl"><i></i> <span>专人送货</span>
              <div class="popup" style="display: none;">
                高级腕表由VIP专员专人送到客户手中。
              </div>
            </li>
          </div>
        </div>
        <div  class="yanse">
          <span class="ys1">款式：</span> <span class="ys2"></span>
        </div>
        <div class="upper_style_right fl __web-inspector-hide-shortcut__">
          <a :style="'border:2px '+style.watchId===watch.watchId ? '#cc5252': '#ddd'+' solid;'"
             v-if="styles" v-for="style in styles" :href="'/watch/doWatch.xf/'+style.watchId"
             :class="'fl '+ style.watchId===watch.watchId ? '': 'watchStyle'">
                    <span class="upper_style_right_img fl">
                        <img :src="style.watchImage" alt=""></span>
            <span class="upper_style_right_text fl">{{style.watchStyle}}</span>
          </a>
        </div>

        <div class="shuliang">
          <span class="sl1">数量</span> <span>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a id="slx">-</a>
                <input type="text" id="number" class="quantity" maxlength="4" size="6"
                       value="1" name="goods_number"/>
                <a id="sls">+</a>
					</span>
        </div>
        <div class="goumai">
          <!--<div>-->
          <div class="fl">
            <a @click="toPlaceOrder" id="buy"><span :name="watch.watchId">立即购买</span></a>
          </div>
          <div class="fl">
            <a id="addGwc" >加入购物车</a>
          </div>
          <!--</div>-->


        </div>
      </div>

      <div class="clear"></div>
      <div id="rightArea" class="w995">
        <div id="fixed" class="w994 fixed-top">
          <ul class="subnav">
            <li @click.stop="subnavClick"  ><a   alt="#desc">商品详情</a></li>
            <li @click.stop="subnavClick"><a  alt="#quality"
                   onclick="javascript:show_quality();">规格参数</a></li>
            <li @click.stop="subnavClick"><a onclick="javascript:show_story('epos');" id="s2"
                   alt="#story">品牌故事</a></li>
            <li @click.stop="subnavClick"><a  href="javascript:void(0);" id="n" alt="#nous"
                   onclick="javascript:show_nous();">手表常识</a></li>
            <li @click.stop="subnavClick" class="comment"><a  id="c" alt="#comment">用户评价
            </a></li>
          </ul>

          <a href="javascript:void(0);" title="立即购买"
             onclick="javascript:$('#buy_now').click();"></a>
        </div>
        <!-- 商品详情 Begin -->
        <div id="desc" class="commodity_details column">
<!--          <div class="null">&nbsp;</div>-->
          <div class="tips">
            <span><s class="light-icon"></s>好利时手表网承诺：我们出售的每一枚手表均为原装正品、假一赔十、凭联保卡可享受全球联保，请放心购买。</span>
          </div>
          <div class="clear"></div>
          <div class="showImg goodsImg">
            <div class="photo">&nbsp;</div>
            <div class="pdtDtlSet">
              <img  v-for="images in watchImages"   alt="" :src="images.images" class="lazy"
                    data-original=""  />
            </div>
          </div>
          <div id="certificate">
            <div class="g_t">
              <div class="ico c"></div>
              <div style="width: 100%; float: left; position: relative;">
                <span class="lbg w197"></span> <span class="rbg"></span>
              </div>
            </div>
            <div class="g_c tc">
              <img src="/Images/blank.gif" class="lazy"
                   data-original="http://img2.wbiao.cn/brand/201403/31/139625460707684.jpg"
                   alt="相关证书"/>
            </div>
          </div>
          <div id="product">
            <div class="g_t">
              <div class="ico p"></div>
              <div style="width: 100%; float: left; position: relative;">
                <span class="lbg w197"></span> <span class="rbg"></span>
              </div>
            </div>
            <div class="g_c tc">
              <img src="/Images/blank.gif" class="lazy"
                   data-original="http://img2.wbiao.cn/brand/201404/10/139709208906686.jpg"
                   alt="包装盒"/>
            </div>
          </div>
          <div id="master">
            <div class="g_t">
              <div class="ico m"></div>
              <div style="width: 100%; float: left; position: relative;">
                <span class="lbg w165"></span> <span class="rbg"></span>
              </div>
            </div>
            <div class="g_c">
              <p class="xb">爱宝时，近一个世纪的古老制表品牌，在瑞士享誉盛名，得到众多名流的热爱与推崇。这款爱宝时EPOS-Passion系列
                3412.183.24.30.27
                男士机械表，典雅白色表盘，十二点钟位置独特镂空透窗，大气金色柳叶指针时尚大方；搭配简洁金色数字刻度，简约大气。镀金表壳彰显儒雅风范，搭载瑞士原装
                UT 6497 OH 手动机械机芯，高档真皮腕带与针扣设计舒适贴腕，给手腕以最舒适的享受，背透表底，满足您对机芯运作的细致观察。</p>
            </div>
          </div>
        </div>
        <!-- 商品详情 End -->
        <!--规格参数 Begin -->
        <div id="quality" class="commodity_details column hide quality quality">
          <div class="series w995">
            <div class="t">基本参数：</div>
            <ul class="ul_parameter">
              <li  >系列：{{watch.watchSeries.seriesName}}</li>
              <li >款式：{{watch.watchGrade.gradeName}}</li>
              <li >机芯：[[${wParameter.movementType}]]</li>
              <li class="li248"  >机芯型号：{{wParameter.movementTypeNo}}</li>
              <li >表壳：{{wParameter.wCase}}</li>
              <li >尺寸：{{wParameter.width}}mm</li>
              <li >厚度：{{wParameter.thickness}}mm</li>
              <li >表冠：{{wParameter.crown}}</li>
              <!--<li >表底：[[${w_parameter.movementType}]]</li>-->
              <li >表镜：{{wParameter.specialFunctions}}</li>
              <li >表盘：{{wParameter.shellColor}}</li>
              <li class="li248" >表带材质：{{wParameter.bandMaterial}}</li>
              <li  >表带颜色：{{wParameter.color}}</li>
              <li >表耳：{{wParameter.watchEar}}</li>
              <li >防水：{{wParameter.waterproof}}</li>
              <li >特殊功能：{{wParameter.specularShading}}</li>
              <li  >上市日期：{{wParameter.listingDate}}</li>
              <li class="li248" >包装：精美包装盒、说明书、保修卡</li>
            </ul>
          </div>
        </div>
        <!-- 规格参数 End -->
        <div class="clear"></div>
        <!-- 品牌故事 Begin -->
        <div id="story" class="commodity_details column hide story" data=""></div>
        <!-- 品牌故事 End -->
        <!-- 手表常识 Begin -->
        <div id="nous" class="commodity_details column hide nous"></div>
        <!-- 手表常识 End -->
        <!-- 评论 Begin-->
        <div class="commodity_details tab_content"  >
          <div class="evaluate">
            <div class="evaluate_title">商品评论</div>
            <div class="evaluate_score clearfix">
              <div class="evaluate_score_a fl">
                <div class="evaluate_score_a_a fl">99</div>
                <div class="evaluate_score_a_b fl">
                  <div>好评度</div>
                  <div class="evaluate_score_a_b_a">%</div>
                </div>
              </div>
              <div class="evaluate_score_b fl" id="gnTag3">
                <div class="evaluate_score_b_a action fl">全部评价(1628)</div>
                <div class="evaluate_score_b_b fl">有图(234)</div>
              </div>
            </div>
            <div class="evaluate_content clearfix" id="gnContent3">
              <div class="tab_evaluate">
                <ul class="wholeTwo_img">

                </ul>
                <!--分页信息-->
                <div class="evaluate_pag clearfix">
                  <ul class="pagination center commentTwo_img" data-pager-total="234">
                    <span class="red">1</span>
                    <a href="javascript:;" data-page="2">2</a>
                    <span>...</span>
                    <a href="javascript:;" data-page="12">12</a>
                    <a href="javascript:;" class="next">&gt;</a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 评论 End -->
        <!-- 你可能感兴趣 End -->
      </div>
      <!--rightArea:end-->
      <div id="leftArea">
        <!--hot:begin-->
        <div class="hot">
          <div class="h_top">
            <div class="h_tit">[{{brand.brandName}}]表热销排行</div>
          </div>
          <div v-for="sellwell in sellWellTbWatchs"  class="h_mid">
            <a rel="nofollow" class="h_link" :href="'/watch/doWatch.xf/'+sellwell.watchId" target="_blank">
              <img :src="sellwell.watchImage"
                   class="lazy" :alt="sellwell.watchName">
              <p class="p2">
                <em class="month_tag">好利时价</em>
                <span class="fenqi_price">¥{{sellwell.soPrice}}</span>
                <em class="month_tag2">市场价</em>
                <span style="text-decoration-line: line-through" class="s_price">¥{{sellwell.watchPrice}}</span>
              </p>
              <p class="p3 elps2">{{sellwell.watchName}}</p>
            </a>

          </div>
        </div>
        <!--hot:end-->

        <!-- 最新活动广告(左下) Begin -->
        <!--    <div style="margin-bottom: 10px;">
                <a href="http://data.wbiao.cn/ad.php?ad_id=988" target="_blank"
                   rel="nofollow"
                   onclick="_gaq.push(['_trackEvent','lie-biao','zuo-xia__1','http://data.wbiao.cn/ad.php?ad_id=988']);"><img
                        src="//image8.wbiao.co/shop/28cc3cbbf68a49afb3186dc8bef4c345.jpg?x-oss-process=image/resize,m_pad,h_350" class="lazy"

                        alt="赫柏林"/></a>
            </div>-->
        <!--           <div style="margin-bottom: 10px;">
                       <a href="http://data.wbiao.cn/ad.php?ad_id=624" target="_blank"
                          rel="nofollow"
                          onclick="_gaq.push(['_trackEvent','lie-biao','zuo-xia__2','http://data.wbiao.cn/ad.php?ad_id=624']);"><img
                               width="210" src="//image8.wbiao.co/shop/28cc3cbbf68a49afb3186dc8bef4c345.jpg?x-oss-process=image/resize,m_pad,h_350" class="lazy"
                               data-original="http://img2.wbiao.cn/ad/201311/14/138442341925235.jpg"
                               alt="CYS"/></a>
                   </div>
                   <div style="margin-bottom: 10px;">
                       <a href="http://data.wbiao.cn/ad.php?ad_id=1135" target="_blank"
                          rel="nofollow"
                          onclick="_gaq.push(['_trackEvent','lie-biao','zuo-xia__3','http://data.wbiao.cn/ad.php?ad_id=1135']);"><img
                               src="/Images/blank.gif" class="lazy"
                               data-original="http://img2.wbiao.cn/ad/201403/20/139529428295444.jpg"
                               alt="招行特惠"/></a>
                   </div>-->
        <!-- 最新活动广告(左下) End -->
        <!--history:begin-->
        <!--history:end-->
      </div>
      <!--leftArea:end-->
      <div id='fancybox-content' style="display: none"></div>
    </div>
    <!--end shop_info1-->

  </div>

  <!--goods:end-->
  <!--main2:end-->

<!--  <script type="text/javascript" src="/Script/jqzoom.js"></script>-->
  <div id="dsp" style="display: none;"></div>
  <div style="display: none;"></div>


  <div id="floatBox">
    <div id="return">
      <a href="javascript:void(0);" class="c__gotop" title="返回顶部"
         style="display: none;" rel="nofollow"></a>
    </div>
  </div>
</div>
</template>

<script>
  import PicZoom from 'vue-piczoom'
  import {service} from '../network/request'
  import HHeader from "../components/HHeader";
  export default {
    name: "WatchDetails",
    data(){
      return {
        watchId:0,
        styles:{},
        watch:{watchSeries:{},watchGrade:{}},
        sellWellTbWatchs:[{}],
        brand:{country:{}},
        watchImages:[{imagesType:''}],
        wParameter:{}
      }
    },
    components:{
      PicZoom,HHeader
    },
    methods:{
      //点击购买事件
      toPlaceOrder: function () {
        const {href} = this.$router.resolve({name: 'PlaceOrder', query: {watchId: this.watch.watchId}});
        window.open(href,'_blank');
      },
      //商品详情点击事件
      subnavClick: function (event) {
        let childNodes = event.target.parentNode.parentNode.childNodes;
        for (let item of childNodes) {
          item.classList.remove('subNavHover');
        }
        event.target.parentNode.classList.add('subNavHover');
      }
    },
    created() {
      this.watchId=this.$route.query.watchId; //将传过来的手表信息存入
      //获取从路由传过来的手表id
      service({
        url:'watch-provider/doWatch.xf/'+this.watchId,
        method:'post',
      }).then(res=>{
        console.log(res);
        this.watch=res.data.data.watch;
        this.styles=res.data.data.styles;
        this.sellWellTbWatchs=res.data.data.sellWellTbWatchs;
        this.brand=res.data.data.brand;
        this.watchImages=res.data.data.watchImages;
        this.wParameter=res.data.data.wParameter;
      }).catch(res=>{
        console.log('错误>>>',res);
      });

    }
  }
</script>

<style scoped>
  @import '../assets/css/xiangxi.css';
  @import '../assets/css/goods.css';
</style>