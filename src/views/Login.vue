<template>
  <div>
  <!-- 导入头部 内容-->
  <h-header></h-header>
  <!--index banner start-->
  <!--index banner end-->
  <div class="section">
    <form id="form1" class="panel panel-default bg-danger container-fluid col-md-offset-8 form-horizontal loginform" name="form1" method="post" action="/user/doLogin.xf">
      <p class="login_tab" id="loginTab"> <span class="on" title="userLogin" id="userLogin">会员登录</span>
        <em>|</em>
        <span title="codeLogin" class="scan" id="codeLogin">扫码登录</span>
      </p>
      <div class="container formdiv">
        <div class="form-group">
          <span class="STYLE3">
<!--            <a href="/user/forRegister.xf"></a>-->
            <router-link to="/register" >注册新用户</router-link>
          </span>
        </div>
        <div class="form-group">

          <div class="input-group">

            <input class="form-control" type="text" name="u_Name" id="textname" placeholder="用户名" />
          </div>

        </div>

        <div class="form-group">
          <div class="input-group">


            <input class="form-control" type="password" name="u_Pwd" id="textpwd"  placeholder="密码"/>
          </div>
        </div>
        <p><a href="#"><strong id="wjmm">忘记密码</strong></a></p>
        <div class="form-group">
          <input type="hidden" id="errMessage" th:value="${error}">
          <input type="hidden" name="field_url"  value="login">
          <input type="hidden" name="success_url"  value="forward:/index/doIndex.xf">
          <input class="form-control btn btn-primary submit" type="submit" name="submit" id="submit"  value="登陆">

        </div>
        <p class="pos1">
          <a href="javascript:void(0);" class="phone_dynamic1" id="accountPswLogin1">手机二维码登录</a>
          <em>|</em>
          <a href="javascript:void(0);" class="social_login1" data-phone="true">社交登录</a>
        </p>
      </div>
    </form>
    <form id="form2" class="panel panel-default bg-danger container-fluid col-md-offset-8 form-horizontal loginform" name="form2" method="post" action="/user/doLogin2.xf">
      <p class="login_tab" id="loginTab2"> <span class="on" title="userLogin" id="userLogin2">会员登录</span>
        <em>|</em>
        <span title="codeLogin" class="scan" id="codeLogin2">扫码登录</span>
      </p>
      <div class="container formdiv ">
        <div class="form-group">
          <input type="text" class="form-phone" id="phone" name="telephoneNumber" placeholder="请输入正确的手机号">
        </div>
        <p class="captcha_wrap">
          <input type="text" value="" name="verifyCode" id="message_need_captcha_code" placeholder="请输入图形验证码" maxlength="4" class="fl">
          <span class="img-wrap fl">
							<img src="/user/checkCode" style="width:94px; height: 24px" onclick="this.src=this.src+'?'" title="看不清？点击更换另一个验证码。">
							</span>
        </p>

        <p class="message_code">
          <input type="text" name="messageVerifyCode" placeholder="短信验证码" maxlength="6" id="note_code">

          <i></i>
        </p>
        <a  id="get_code"><span>获取验证码</span></a>
        <div class="form-group">
          <input type="hidden" name="field_url"  value="login">
          <input type="hidden" name="success_url"  value="forward:/index/doIndex.xf">
          <input type="submit" class="login submit" id="user_login2" value="登录">
        </div>
        <p class="pos">
          <a href="javascript:void(0);" class="phone_dynamic" id="accountPswLogin">账号密码</a>
          <em>|</em>
          <a href="javascript:void(0);" class="social_login" data-phone="true">社交登录</a>
        </p>
      </div>
    </form>
  </div>
  <!-- 导入底部 -->
  <h-footer></h-footer>
<!--  <script type="text/javascript" src="/js/login.js"></script>-->
<!--  <script type="text/javascript" src="/Script/car.js"></script>-->
  </div>
</template>

<script>
  import HHeader from '../components/HHeader'
  export default {
    name: "Login",
    components:{
      HHeader:HHeader,
    }
  }
</script>

<style scoped>
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