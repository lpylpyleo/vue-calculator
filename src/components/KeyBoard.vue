<template>
    <div id="keyboard">
        <div class="text" :style="{color: isNaN(button)?'#ff6700':'black'}" :key="button" v-for="button in buttons">
            {{button}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "KeyBoard",
        data() {
            return {
                buttons: ['AC', '⌫', '％', '+', '7', '8', '9', '×', '4', '5', '6', '−', '1', '2', '3', '+', '💱', '0', '.', '=']
            }
        }
    }
</script>

<style scoped>
    #keyboard {
        /*background-color: #ff6700;*/
        height: 550px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-auto-rows: 110px 110px 110px 110px 110px;
    }

    .text {
        margin: auto 0;
        font-size: 32px;
        font-weight: bold;
        text-align: center;
    }

</style>