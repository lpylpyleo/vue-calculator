<template>
    <div class="calculation-history">
        <div class="inner">
            <div class="history-line">
                <div class="expression">{{expression}}</div>
                <div class="result">{{result}}</div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "CalculationHistory",
        computed: {
            expression() {
                return this.$store.state.expression
            },
            result() {
                if (!isNaN(this.$store.state.expression.slice(-1))) {
                    return eval(this.$store.state.expression.replace(/×/g, '*').replace(/÷/g, '/').replace(/％/g,'%'));
                } else {
                    return this.$store.state.expression;
                }
            }
        }
    }
</script>

<style scoped>
    .calculation-history {
        flex-grow: 1;
        padding: 0 24px;
        display: flex;
        flex-direction: column-reverse;
    }

    .inner {
        border-bottom: #ececec solid 1px;
        height: 100%;
        display: flex;
        flex-direction: column-reverse;
    }

    .history-line {
        text-align: end;
    }

    .expression{
        font-size: 36px;
        font-weight: bold;
    }

    .result{
        color: #828282;
        font-size: 30px;
    }


</style>