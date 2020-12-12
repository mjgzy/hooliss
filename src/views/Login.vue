<template>
    <div id="login">
        <!-- 导入头部 内容-->
        <h-header></h-header>
        <!--index banner start-->
        <!--index banner end-->
        <div class="section">
            <form class="W_login_mark" @submit.prevent="submit($event)" id="W_login_mark" method="post">
                <p class="login_tab" id="loginTab">
                    <span :class="{on:isUser}" @click="isUserOrClick" title="userLogin" id="userLogin">会员登录</span>
                    <em>竖杠</em>
                    <span title="codeLogin" class="scan" :class="{on:isScan}" @click="isUserOrClick" id="codeLogin">扫码登录</span>
                </p>
                <div class="user_login" :class="{h:isScan}" id="userLoginWrap">
                    <div :class="{h:isCode===false}" class="member_login password">
                    <p>
                        <input type="text" name="username"  placeholder="手机号码/会员名/邮箱" class="user_name"
                            id="username" v-model="user.username"><i></i>
                    </p>
                        <p>
                            <input type="password" name="password" maxlength="20" placeholder="密码" class="password"
                                  id="user_psd" v-model="user.password"> <i></i>
                        </p>
                        <p class="identifying_code identifying_code_name h">
                            <input type="text" maxlength="4" placeholder="图形验证码" id="identifys">
                            <img id="captcha"
                                  alt="验证码"
                                 title="看不清？点击更换另一个验证码。"><i></i>
                        </p>
                        <input class="login" id="user_login" type="submit" value="立即登录">
                        <a href="javascript:void(0);" class="login isLogin h">
                            <em class="icon-a-o-load"></em>
                        </a>
                        <p>
                            <a target="_blank" href="javascript:void(0);" data-href="/member/register" class="fl">免费注册</a>
                            <a target="_blank" href="javascript:void(0);" data-href="/member/forgetpsd" class="fr">忘记密码</a>
                        </p>
                        <p class="pos">
                            <a href="javascript:void(0);" @click="isCodem()" class="phone_dynamic" id="passwordLogin">手机动态码登录
                                <em class="icon-a-hot"></em>
                            </a>
                            <em>|</em>
                            <a href="javascript:void(0);" class="social_login" data-phone="true">社交登录</a>
                        </p>
                        <span class="pos_btm h">仅在APP开放QQ、微信等社交帐号登录功能，
                            <strong>下载登录</strong>
                        </span>
                    </div>
                    <div :class="{h:isCode}" class="member_login phone">
                        <p class="mobile">
                            <input type="text" name="phoneNumber" placeholder="手机号码" class="phone_num" maxlength="11"> <i></i>
                        </p>
                        <p class="captcha_wrap">
                            <input type="text" value="" id="message_need_captcha_code" placeholder="请输入图形验证码" maxlength="4" class="fl">
                            <span  class="img-wrap fl">
                                <img @click="getCaptcha('captcha2')" id="captcha2" alt="验证码" title="看不清？点击更换另一个验证码。">
                            </span>
                        </p>
                        <p class="message_code"><input type="text" name="messageVerifyCode" placeholder="短信验证码"
                                                       maxlength="6" id="note_code">
                            <a href="javascript:void(0);" id="get_code">获取验证码</a> <i></i>
                        </p>
                        <p class="identifying_code identifying_code_phone h">
                            <input type="text" maxlength="4" placeholder="图形验证码" id="identify">
                            <img src="/pub/captcha?w=98&amp;h=38&amp;86021768"
                                 onclick="this.src='/pub/captcha?w=98&amp;h=38&amp;'+Math.random();" alt="验证码"
                                 title="看不清？点击更换另一个验证码。"><i></i></p>
                        <input type="button" class="login" id="user_login2" value="立即登录">
                        <a href="javascript:void(0);" class="login isLogin h"><em>
                            <img src="//static.wbiao.co/p/pc/images/1/loading-red.gif" alt=""></em>
                        </a>
                        <p>
                            <a href="javascript:void(0);" data-href="/member/register" class="fl">免费注册</a>
                        </p>
                        <p class="pos">
                            <a href="javascript:void(0);" @click="isCodem()" class="phone_dynamic" id="accountPswLogin">账号密码</a>
                            <em>|</em>
                            <a href="javascript:void(0);" class="social_login" data-phone="true">社交登录</a>
                        </p>
                        <span class="pos_btm h" data-phone="true">仅在APP开放QQ、微信等社交帐号登录功能，
                            <strong>下载登录</strong>
                        </span>
                    </div>
                </div>
                <input type="hidden" name="loginType" id="loginType" value="1">
                <div class="code_login" :class="{h:isUser}" id="codeLoginWrap">
                    <div class="scan_code_login">
                        <div class="qr_code">
                            <div class="qr_code_img"><img src="/pub/qr?5.049989298462574" alt="" id="qr-code"
                                                          style="width:100%;"></div>
                            <img src="/public/images/1/teaching_chart.png" alt="" class="teaching_chart">
                            <div class="lose_efficacy h">
                                <div class="mark"></div>
                                <div class="content"><p>二维码已失效</p> <a href="javascript:void(0);" id="refresh">点击刷新</a>
                                </div>
                            </div>
                        </div>
                        <p>使用<em>万表APP</em>扫码登录<br><i>在首页顶部搜索栏点击扫一扫</i></p> <a href="javascript:void(0);"
                                                                               id="downloadApp">下载万表APP</a></div>
                    <div class="download h">
                        <div class="qr"><img src="//static.wbiao.co/p/pc/images/1/master-qr.png" alt=""
                                             class="qr_codes"></div>
                        <a href="javascript:void(0);" id="close_qr">关闭二维码</a></div>
                    <div class="scan_success h"><i class="icon-a-icon_scan_success"></i><h5 class="success">扫描成功</h5>
                        <p>请勿刷新本页面，按手机提示操作</p></div>
                </div>
            </form>
        </div>
        <!--  <script type="text/javascript" src="/js/login.js"></script>-->
        <!--  <script type="text/javascript" src="/Script/car.js"></script>-->
    </div>
</template>

<script>
    import HHeader from '../components/HHeader'
    import {service} from '../network/request'
    export default {
        name: "Login",
        data(){
          return {
              isUser:true,      //会员登录
              isScan:false,       //扫码登录
              isCode:false,       //验证码登录
              user:{
                  username:'',
                  password:''}
          }
        },
        components: {
            HHeader: HHeader,
        },
        created() {
            this.getCaptcha('captcha2');
        },
        methods:{
            getCaptcha(id){
                service({
                    url:'/user-provider/verify',
                    responseType: 'arraybuffer'
                }).then(res=>{
                    console.log('验证码请求成功>>>>>');
                    let bytes = new Uint8Array(res.data);
                    let data = "";
                    let len = bytes.byteLength;
                    for (let i = 0; i < len; i++) {
                        data += String.fromCharCode(bytes[i]);
                    }
                    document.getElementById(id).src = "data:image/png;base64," + window.btoa(data);
                }).catch(e=>{
                    console.log('获取图形验证码失败>>>>>'+e);
                });
            },
            isUserOrClick(){
                this.isUser=!this.isUser;
                this.isScan=!this.isScan;
            },
            isCodem(){
                this.isCode = !this.isCode;
            },
            submit(event) {
                // 阻止页面刷新
                event.preventDefault();
                this.$store.dispatch('Login',this.user)
                .then(res=>{
                    console.log('登录>>>>>>',res);
                    if(res.data.code===1){
                        this.$router.push({
                            path:'/index'
                            });
                    }else{
                        alert(res.data.msg);
                    }
                }).catch(err=>{
                    console.log(err);
                });
                //vue-resource
                //axios
            }

        }
    }
</script>

<style scoped>
    @import "../assets/css/login.css";

    .STYLE1 {
        font-size: large
    }

    .STYLE3 {
        font-size: medium;
        color: #CC0000;
    }

    /*.section{*/
    /*  background-image: url(/Images/cb19871ecee52e988f8abbf71c5ee36.png);*/
    /*  background-repeat:no-repeat;*/
    /*  height: 500px;*/
    /*}*/
</style>