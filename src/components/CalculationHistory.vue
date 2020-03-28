<template>
    <div class="calculation-history">
        <div class="inner"></div>
    </div>
</template>

<script>
    export default {
        name: "CalculationHistory"
    }
</script>

<style scoped>
    .calculation-history{
        /*background-color: aqua;*/
        /*height: 100%;*/
        flex-grow: 1;
        padding: 0 24px;
    }
    .inner{
        border-bottom: #ececec solid 1px;
        height: 100%;
    }
</style>