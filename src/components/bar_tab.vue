<!-- 底部工具栏  --->
<template>
    <div class="bar-tab">
        <ul>
            <li class="bar-item" style="height:1rem;padding-top:0.15rem">
                <a href="#" >
                    <span><i class="fa fa-user-o fa-fw" ></i></span>
                    <p>用户</p>
                </a>
            </li>
            <li class="bar-item">
                <a href="#" >
                    <span><i class="fa fa-user-o fa-fw" ></i></span>
                    <p>用户</p>
                </a>
            </li>
            <li class="bar-item">
                <a href="#" >
                    <span><i class="fa fa-user-o fa-fw" ></i></span>
                    <p>用户</p>
                </a>
            </li>
            <li class="bar-item">
                <a href="#" >
                    <span><i class="fa fa-user-o fa-fw" ></i></span>
                    <p>用户</p>
                </a>
            </li>
        </ul>
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
    .fa{font-size:0.5rem}
    .bar-item a{color:#77bdee}
</style>