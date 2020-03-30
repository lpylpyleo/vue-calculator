<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">计算</router-link>
            <router-link to="/convert">换算</router-link>
        </div>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<style lang="scss">
    $primary-color: #ff6700;

    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
        width: 100%;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
        display: flex;
        flex-direction: column;
        user-select: none;
    }

    #nav {
        padding: 15px;

        a {
            font-weight: bold;
            color: #2c3e50;
            margin: 0 20px;
            text-decoration-line: none;
            font-size: 18px;

            &.router-link-exact-active {
                color: $primary-color;
            }
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .2s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
