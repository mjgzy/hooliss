<template>
  <div>
    <div class="W_top_banner" style="background-color: #3178a7;height: 60px;">
      <a target="_blank" href="//www.wbiao.cn/dynamic/20082588871/">
        <img src="//static.wbiao.co/p/pc/images/1/fix-b.png"
             data-wpl="//image8.wbiao.co/mall/689481fc0d65415d9eadd3da2291f790.jpg" alt=""/></a>
      <div class="close_slider icon-a-close01"></div>
    </div>
    <div class="W_pt_top">
      <div class="pt_top_wrap clearfix">
        <div class="pt_top_left fl"><a target="_blank" class="to_introduction"
                                       href="https://www.wbiao.cn/activity/wbiao2introduction/">正品保障，免息分期！</a></div>
        <div class="pt_top_left_warn fl" id="pt_top_marquee_warning"></div>
        <div class="pt_top_right fr">
          <div class="pt_top_login clearfix fl"><a href="https://pu.wbiao.cn/member/login/">请登录</a> <a
                  href="https://pu.wbiao.cn/member/register/" style="color:#ae0f17;">注册即送3500元大礼包</a></div>
          <div class="pt_top_others fl"><span class="line">|</span> <a target="_blank" href="https://www.wbiao.cn/cart/"
                                                                       class="cart_line">购物车<span
                  class="cart_count h">(<i></i>)</span></a>
            <div class="a_hover fl"><a target="_blank" href="https://pu.wbiao.cn/member/" class="wb_mobile_a">客户服务</a>
              <div class="wb_dropdown wb_contact">
                <div class="dropdown_line">
                  <ul>
                    <li><a href="javascript:void(0);" class="ntalk_pre CUSTOMER-SERVICE">客户顾问</a></li>
                    <li><a href="javascript:void(0);" class="ntalk_after CUSTOMER-SERVICE"
                           after-service-code="wx_1000_1515726262308">售后维修</a></li>
                    <li><a target="_blank" href="https://www.wbiao.cn/help-706.html">帮助中心</a></li>
                    <li><a target="_blank" href="https://www.wbiao.cn/credit-card/">办理信用卡</a></li>
                  </ul>
                  <p class="teltxt">服务专线：400-883-2688</p>
                  <p class="teltxt">外呼号码：020-83931899</p></div>
              </div>
            </div>
            <a target="_blank" href="https://www.wbiao.cn/dynamic/18080193077/" class="fl">会员福利</a> <span
                    class="line">|</span> <a href="https://www.wbiao.cn/gwie/" class="fl">ENGLISH</a></div>
        </div>
      </div>
    </div>
    <div class="W_pt_head">
      <div class="head_wrap clearfix">
        <div class="head_left fl"><h1 class="wb_logo fl"><a href="https://www.wbiao.cn/index.html"
                                                            title="正品名表 终身服务"><img
                src="//static.wbiao.co/p/pc/images/1/logo-icon.png" alt=""/></a></h1>  <a target="_blank"
                                                                                          href="https://www.wbiao.cn/activity/wbiao2introduction/"
                                                                                          class="wb_act_link fl"><img
                src="//static.wbiao.co/p/pc/images/1/slogan-02242018.png" alt=""></a></div>
        <div class="order_head_right fr">
          <ul>
            <li><i class="i_01"></i><span>购物车</span></li>
            <li class="on line_on"><i class="i_on"></i><span>填写订单信息</span></li>
            <li><i class="i_02"></i><span>支付订单</span></li>
            <li><i class="i_02"></i><span>等待签收</span></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="W_main">
      <div class="order_wrap">
        <div class="order_floor order_floor_01 clearfix"><span class="guide_point fl"><i></i></span>
          <div class="floor_content fl">
            <h2 class="h2_tit">
              <div>
                <span>收货人信息</span>
                <a target="_blank" href="https://pu.wbiao.cn/member/consignee" class="mag_address">管理收货地址</a>
              </div>
            </h2>
            <ul class="clearfix con_box">
              <li class="on" relationId="538342"><p class="p1 elps1"><span class="c_name">往事随风</span> <em
                      class="c_phone">17671356085</em>
                <i class="is_default ">默认</i></p>
                <p class="p2p elps2">
                  <i class="icon-a-o-local01"></i><i class="icon-a-o-local02"></i>
                  <span class="c_province" c_code="6">广东</span>
                  <span class="c_city" c_code="79">东莞</span>
                  <span class="c_region" c_code="714">南城区</span>
                  <span class="c_address elps1">2165</span></p>
                <a href="javascript:void(0);" class="to_edit">编辑</a>
                <i class="icon-a-o-arrow-bg"></i>
              </li>
              <li class="add_address" @click="showAddAddressCon">
                <a href="javascript:void(0);">
                  <em><i class="icon-a-o-add"></i> 添加收货地址</em>
                </a>
              </li>
            </ul>
            <a href="javascript:void(0);" class="change_type show_more_address fr h">显示更多地址</a></div>
        </div>
        <div class="order_floor order_floor_03 clearfix"><span class="guide_point fl"><i></i></span>
          <div class="floor_content fl"><h2 class="h2_tit">送货清单（<em class="all_goods_count">1</em>）<a href="/cart"
                                                                                                      class="mag_address">返回购物车修改</a>
          </h2>
            <div class="goods_list con_box">
              <div class="store_type">
                <div class="type_tit"><span class="shop_name">瑞士爱宝时官方旗舰店（<em class="goods_count">1</em>）</span></div>
                <div class="store_goods" version="101" cartCode="0" data-price-type="0">
                  <div class="goods_detail clearfix" goodsCode="42471">
                    <dl class="fl">
                      <dt class="fl"><a target="_blank" href="/goods/42471"><img
                              src="//image8.wbiao.co/shop/28cc3cbbf68a49afb3186dc8bef4c345.jpg?x-oss-process&#x3D;image/resize,w_90,h_90"
                              alt=""/></a></dt>
                      <dd><p class="p1 act-code" actCode="2989"><span>满减</span><em>920九周年庆 每满300减40</em></p> <a
                              target="_blank" href="/goods/42471"><p class="p2p elps1">瑞士艺术制表大师 爱宝时（EPOS）-Emotion情感系列
                        罗马假期-水蓝版 3390.152.20.16.25 机械男表</p></a>
                        <p class="p3"><span>真皮 蓝色 牛皮</span></p>
                        <p class="p4"><span>7天退换</span></p></dd>
                    </dl>
                    <ul class="fr">
                      <li class="unit_price">¥<em>5960</em></li>
                      <li class="goods_num"><span class="reduce">-</span> <input type="text" class="num" value="1"
                                                                                 g-num="1" readonly="true"> <span
                              class="add">+</span></li>
                      <li class="total_price">¥<em></em></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="popularity">
                <div class="popularity_title"><span>保障服务 <em>万表名匠手表维修诚信平台</em></span></div>
                <div class="popularity_goods">
                  <div class="popularity_detail clearfix">
                    <dl class="fl">
                      <dt class="fl"><a href="/goods/70812.html"><img
                              src="//image8.wbiao.co/shop/6ad1267c6907474f855e6675b27f3fba.jpg?x-oss-process&#x3D;image/resize,w_90,h_90"
                              alt=""/></a></dt>
                      <dd><a href="/goods/70812.html"><p class="item_goods_name">万表名匠1年延保服务-手表维修保养售后</p></a></dd>
                    </dl>
                    <ul class="fr">
                      <li class="unit_price">¥<em>197</em>
                        <del class="del">¥328</del>
                      </li>
                      <li class="popularity_btn"><span class="item_btn add" data-goods-code="70812"
                                                       data-ware-code="1_1_3_2" data-version="10"><i>+</i> 优惠加购</span>
                        <span class="item_btn slice" data-goods-code="70812" data-ware-code="1_1_3_2" data-version="10">取消加购</span>
                      </li>
                      <li class="item_total_price">¥<em>0</em></li>
                    </ul>
                  </div>
                </div>
                <div class="popularity_goods">
                  <div class="popularity_detail clearfix">
                    <dl class="fl">
                      <dt class="fl"><a href="/goods/70813.html"><img
                              src="//image8.wbiao.co/shop/a0733d95ae334bbca632660c2888ab76.jpg?x-oss-process&#x3D;image/resize,w_90,h_90"
                              alt=""/></a></dt>
                      <dd><a href="/goods/70813.html"><p class="item_goods_name">万表名匠3年延保服务-手表维修保养售后</p></a></dd>
                    </dl>
                    <ul class="fr">
                      <li class="unit_price">¥<em>275</em>
                        <del class="del">¥458</del>
                      </li>
                      <li class="popularity_btn"><span class="item_btn add" data-goods-code="70813"
                                                       data-ware-code="1_1_3_2" data-version="10"><i>+</i> 优惠加购</span>
                        <span class="item_btn slice" data-goods-code="70813" data-ware-code="1_1_3_2" data-version="10">取消加购</span>
                      </li>
                      <li class="item_total_price">¥<em>0</em></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="order_floor order_floor_05 clearfix"><span class="guide_point fl"><i></i></span>
          <div class="floor_content fl"><h2 class="h2_tit">发票类型</h2>
            <div class="invoice_type con_box"><p class="invoice_txt"><span class="invoice_category"></span> <span
                    class="mold_box h">（<em class="invoice_mold"></em>）</span> <a href="javascript:void(0);"
                                                                                  class="change_type">填写信息</a></p></div>
          </div>
        </div>
        <div class="order_floor order_floor_06 clearfix"><span class="guide_point fl"><i></i></span>
          <div class="floor_content fl"><h2 class="h2_tit">优惠券／现金券／礼金券／青苗抵用</h2>
            <div class="coupon_type con_box"><p class="coupon_txt"><span id="auto_cash_code"> 券无可用  &nbsp;&nbsp;&nbsp;&nbsp;青苗可抵 <em
                    id="point_amount">0</em> 元</span> <a href="javascript:void(0);" class="change_type">修改</a></p></div>
          </div>
        </div>
        <div class="order_floor order_floor_07 clearfix"><span class="guide_point fl"><i></i></span>
          <div class="floor_content fl"><h2 class="h2_tit">留言</h2>
            <div class="leave_message con_box"><textarea class="msg_area" id="msg_area" placeholder="请输入..."></textarea>
              <span>0/200</span></div>
          </div>
        </div>
        <div class="pay_price"><p>商品总额 <i class="price_determined h">(待定)</i><span>￥<em
                class="goods_amount">5960</em></span></p>
          <div class="discount_list"><p>活动优惠<span>-￥760</span></p></div>
          <p>运费<span>￥0</span></p></div>
        <div class="submit_box" cps-source="" cps-track="">
          <ul class="clearfix">
            <li class="o_li03 fr"><a href="javascript:void(0);" class="submit_order">提交订单</a></li>
            <li class="o_li02 fr"><p class="p1">应付款 <span class="p1 price_determined h">(待定)</span><b>¥<em>5200</em></b>
            </p>
              <p class="price_determined h">请提交订单后咨询客服确定最终售价</p></li>
          </ul>
        </div>
      </div>
    </div>
    <mou-jian @maskClose="parentMaskClose" v-show="addAddressCon">
      <template v-slot:title>
        添加收货地址
      </template>
      <template v-slot:content>
        <div>
          <div id="" class="layui-layer-content" style="height: 287px;">
            <div class="add_address_con">
              <div class="add_info clearfix">
                <p class="address_msg p_basic add_name fl"><span class="p_txt">(收货人)</span>
                  <input type="text" v-model="watchReceinfo.raceName" class="p_msg" id="p_name" placeholder="必填">
                  <em class="error_tips h">请填写收货人姓名</em>
                </p>
                <p class="address_msg p_basic add_phone fl"><span class="p_txt">(手机号)</span>
                  <input type="text" class="p_msg" id="p_phone" v-model="watchReceinfo.phone" placeholder="必填" maxlength="11"
                         onchange="wbiao.confirm.checkPhone(this);">
                  <em class="error_tips p_err01 h">请填写手机号</em> <em class="error_tips p_err02 h"><span class="ico">
                  <img src="//static.wbiao.co/p/pc/images/1/icon-a-error-hyaline.png" alt=""></span>
                    <span class="txt">手机号格式不正确</span>
                  </em>
                </p>
              </div>
              <p class="address_msg"><span class="p_txt">(所在地区)</span>
                <select @change="addressChange" name="province_id" id="province_id" class="add_area" >
                  <option value="0">请选择省</option>
                  <option v-for="province in provinces" :value="province.id">{{province.areaName}}</option>
                </select>
                <select @change="addressChange" name="province_id" id="city_id" class="add_area" >
                  <option value="0">请选择市</option>
                  <option v-for="city in citys" :value="city.id">{{city.areaName}}</option>
                </select>
                <select  name="province_id" id="area_id" class="add_area" >
                  <option value="0">请选择区</option>
                  <option v-for="area in areas" :value="area.id">{{area.areaName}}</option>
                </select>
              </p>
              <p class="address_msg p_basic add_street"><span class="p_txt">(详细地址)</span>
                <input type="text" class="p_msg" v-model="watchReceinfo.street" id="p_street" placeholder="街道门牌">
                <em class="error_tips h">请填写详细地址</em>
              </p>
              <p class="address_msg set_default">
                <!--                onclick="wbiao.confirm.setDefaultAdd(this);"-->
                <span @click="setDefaultAdd" :class="setDefault?'icon-a-o-gou01':''" class="default_btn">
                  <i></i>
                </span>
                设为默认
              </p>
            </div>
          </div>
        </div>
      </template>
      <template  v-slot:save>
        <span @click="addressSubmit">保存并使用</span>
      </template>
      <template v-slot:cancel>
        取消
      </template>
    </mou-jian>
  </div>
</template>
<script>
  import MouJian from '../components/MouJian'
  import {service} from '../network/request'
  export default {
    name: "PlaceOrder",
    data() {
      return {
        addAddressCon: false,
        setDefault: false,  //设为默认动态Class,
        provinces:[{areaName:'',id:0}],
        areas:[{areaName:'',id:0}],
        citys:[{areaName:'',id:0}],
        watchReceinfo:{
          infoId:null,
          raceName:'你爸爸',
          areaId:0,
          street:'',
          phone:'',
          defaultaddr:false
        }
      }
    },
    components: {
      MouJian
    },
    methods: {
      addressSubmit(){
        console.log(this.watchReceinfo);
        service({
          url:'/userAddress-provider/addReceInfo',
          method:'post',
          data:'watchReceinfo='+JSON.stringify(this.watchReceinfo)
        }).then(res=>{
          console.log(res);
        });
      },
      setDefaultAdd() {
        this.setDefault = !this.setDefault;
        if (this.setDefault){
          this.watchReceinfo.defaultaddr=true;
        }
      },
      parentMaskClose() {
        this.addAddressCon = false;
      },
      //地区改变事件
      addressChange($event){
        console.log($event);
        let parentId = $event.target.value;
        if(parentId!==0){
          service({
            url:'/hoolissArea/getAreasByParenntId',
            params:{'parentId':parentId}
          }).then(res=>{
            if(res.data.code===1){
              let level = res.data.data[0].level;
              console.log(res);
              console.log(level);
              if(level===1){
                this.citys = res.data.data;
              }else if(level===2){
                this.areas = res.data.data;
              }else if(level===3){
                this.watchReceinfo.areaId = parentId;
              }
            }
          });
        }

      },
      //显示收货地址
      showAddAddressCon() {
        this.addAddressCon = !this.addAddressCon;
        if(this.addAddressCon){
          service({
            url:'/hoolissArea/getAreasByParenntId',
            params:{'parentId':0}
          }).then(res=>{
            console.log(res);
            if(res.data.code===1){
                this.provinces = res.data.data;
            }
          }).catch(err=>{
            console.log(err);
          });
        }


      }
    },
    created() {
      console.log('确认订单创建');
    }
  }
</script>

<style scoped>
  @import "../assets/css/placeOrder.css";
</style>