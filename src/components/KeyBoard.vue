<template>
    <div id="keyboard">
        <div class="text" :style="{color: getColor(button)}" :key="button" v-for="button in buttons"
             @click="handleClick">
            {{button}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "KeyBoard",
        data() {
            return {
                buttons: ['AC', '⌫', '％', '÷', '7', '8', '9', '×', '4', '5', '6', '−', '1', '2', '3', '+', '⇧', '0', '.', '=']
            }
        },
        methods: {
            handleClick(e) {
                let char = e.target.innerText;
                // console.log(char + ' pressed');
                switch (char) {
                    case 'AC':
                        this.$store.commit('clear');
                        break;
                    case '⌫':
                        this.$store.commit('del');
                        break;
                    // case '％':
                    //     this.$store.commit('append','%');
                    //     break;
                    default:
                        this.$store.commit('append', char);
                }
            },
            getColor(str){
                return isNaN(str)?'#ff6700':'black';
            }
        },
        computed:{

        }
    }
</script>

<style scoped>
    #keyboard {
        /*background-color: #ff6700;*/
        height: 450px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-auto-rows: 1fr 1fr 1fr 1fr 1fr;
    }

    .text {
        margin: auto 0;
        font-size: 32px;
        /*font-weight: bold;*/
        text-align: center;
    }

</style>