<template>
  <div>
    <div>
      <div class="layui-layer-shade" id="layui-layer-shade1" times="1"
           style="z-index:19891014; background-color:#000; opacity:0.3; filter:alpha(opacity=30);"></div>
      <div class="layui-layer layui-layer-dialog Wb_confirm_780 W_add_address layer-anim" id="layui-layer5" type="dialog"
           times="5" showtime="0" contype="string" style="z-index: 19891019; width: 360px; top: -42.5px; left: 369.5px;">
      <div class="layui-layer-title" style="cursor: move;">
        <!--      标题-->
        <slot name="title"></slot>
        <i class="icon-a-o-close05"></i>
      </div>
      <!--    主题内容-->
      <div id="" class="layui-layer-content">
        <slot name="content"></slot>
      </div>
      <!--    X关闭按钮-->
      <span class="layui-layer-setwin" @click="maskClose">
      <a class="layui-layer-ico layui-layer-close layui-layer-close1" href="javascript:;"></a>
    </span>
      <!--    底部按钮-->
      <div class="layui-layer-btn">
        <a class="layui-layer-btn0">
          <slot name="save"></slot>
        </a>
        <a @click="maskClose" class="layui-layer-btn1">
          <slot name="cancel"></slot>
        </a>
      </div>
      <!--    拖动放大-->
      <span class="layui-layer-resize"></span>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MouJian",
    created(){
    },methods:{
      maskClose(){
        this.$emit('maskClose');
      }
    }
  }
</script>

<style scoped>

</style>