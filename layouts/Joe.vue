<template>
    <div class="g-doc">
        <header class="g-header">
            <div class="inner"></div>
            <div class="inner"></div>
        </header>
        <Nuxt />
        <footer class="g-footer"></footer>
        <div class="m-login"></div>
    </div>
</template>

<script>

export default {
    name: 'JOE',
    data() {
        return {}
    },
    methods: {},
    mounted() { },
    computed: {},
    watch: {},
}

</script>

<style lang="scss">
@font-face {
    font-family: "font-play";
    src: url("@/assets/fonts/PlayRegular.ttf");
}

@font-face {
    font-family: "font-joe";
    src: url("@/assets/fonts/JoeFont.woff2");
}

.g-doc {
    font-family: "font-joe";
    font-size: 14px;
    color: #333;
}
</style>