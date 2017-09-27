<template>
    <div id="index">
        <headerComponent></headerComponent>
        <div id="content">
            <slideComponent></slideComponent>
        </div>
        <barComponent></barComponent>
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
</style>