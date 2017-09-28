<template>
    <div id="index">
        <headerComponent></headerComponent>
        <div id="content">
            <slideComponent></slideComponent>
        </div>
        <barComponent></barComponent>
        <!-- flex弹性布局 -->
        <div id="jgg" class="jgg">
            <div class="jgg-item">
                <img src="http://www.myshop.com/upload/images/1.jpg">
                <p>相关介绍</p>
            </div>
            <div class="jgg-item">
                <img src="http://www.myshop.com/upload/images/3.jpg">
                <p>相关介绍</p>
            </div>
            <div class="jgg-item">
                <img src="http://www.myshop.com/upload/images/7.jpg">
                <p>相关介绍</p>
            </div>
            <div class="jgg-item">
                <img src="http://www.myshop.com/upload/images/10.jpg">
                <p>相关介绍</p>
            </div>
            <div class="jgg-item">
                <img src="http://www.myshop.com/upload/images/15.jpg">
                <p>相关介绍</p>
            </div>
            <div class="jgg-item">
                <img src="http://www.myshop.com/upload/images/7.jpg">
                <p>相关介绍</p>
            </div>

        </div>
        <!-- 弹性布局end -->

        <!-- 杂项 -->
        <div id="ext">
            <div class="ext-item">
                <div class="ext-img flex-item">
                    <img src="http://www.myshop.com/upload/images/7.jpg">
                </div>
                <div class="ext-con flex-item">
                    <h2>我就当标题来用吧。。。</h2>
                    <p>我是一些简介的东西咯，不知道乍弄。。。。。我是一些简介的东西咯，不知道乍弄。。。。。</p>
                </div>
            </div>

            <div class="ext-item">
                <div class="ext-img flex-item">
                    <img src="http://www.myshop.com/upload/images/7.jpg">
                </div>
                <div class="ext-con flex-item">
                    <h2>我就当标题来用吧。。。</h2>
                    <p>我是一些简介的东西咯，不知道乍弄。。。。。我是一些简介的东西咯，不知道乍弄。。。。。</p>
                </div>
            </div>

            <div class="ext-item">
                <div class="ext-img flex-item">
                    <img src="http://www.myshop.com/upload/images/7.jpg">
                </div>
                <div class="ext-con flex-item">
                    <h2>我就当标题来用吧。。。</h2>
                    <p>我是一些简介的东西咯，不知道乍弄。。。。。我是一些简介的东西咯，不知道乍弄。。。。。</p>
                </div>
            </div>
            <div class="ext-item">
                <div class="ext-img flex-item">
                    <img src="http://www.myshop.com/upload/images/7.jpg">
                </div>
                <div class="ext-con flex-item">
                    <h2>我就当标题来用吧。。。</h2>
                    <p>我是一些简介的东西咯，不知道乍弄。。。。。我是一些简介的东西咯，不知道乍弄。。。。。</p>
                </div>
            </div>
        </div>
        <!-- 杂项end -->

        <!-- 广告位 -->
        <div id="ad">
            <img src="http://www.myshop.com/upload/images/ad.jpg">
        </div>
        <!-- 广告位end -->
        <div style="height:1.3rem"></div>
    </div>

</template>

<script>
    export default {
        data: () => ({
            show: true
        })
    }
</script>

<style>
#content{margin-top:1rem}
#ad{width:100%;height:2rem;overflow: hidden;margin-top:0.3rem}
#ad img{width:100%;}
</style>