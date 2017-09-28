<!-- 头部标题栏  --->
<template>
        <header id="header" class="header">
            <div id="title">
                <div id="logo">
                   <div class="logo">
                       <img src="../assets/mylogo.png">
                   </div>
                </div>
                <div id="heder-act">
                    <i class="fa fa-envelope-o fa-fw" ></i>
                    <i class="fa fa-search-minus fa-fw" ></i>
                    <i class="fa fa-heart-o fa-fw" ></i>
                </div>
            </div>
        </header>
</template>

<script>
    export default {
        data: () => ({
            show: true
        })
    }
</script>

<style>
    #heder-act .fa{color:#77bdee}
</style>