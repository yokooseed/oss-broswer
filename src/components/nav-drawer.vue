<template>
<div>
    <v-navigation-drawer
        permanent
        location="left"
        class="bg-drawer"
        width="210"
        v-model="global.isShowBar"
    >
        <v-list>
            <v-list-item><img src="../svg/drawer/logo.svg" /></v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list density="compact" nav>
            <v-list-item
                v-for="(item, index) in navDrawer.items"
                :key="index"
                :value="item.value"
                :title="item.title"
                :active="navDrawer.activeIndex == index"
                :prepend-icon="item.props.prependIcon"
                @click="jumpto(item.value, item.title, index)"
                color="primary"
            ></v-list-item>
        </v-list>
    </v-navigation-drawer>
</div>
</template>

<style>

.bg-drawer {
    min-height: 100vh;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    max-width: 200px;
}
</style>

<script>
import { navDrawerStore } from '@/store/nav-drawer.js'

export default {
    setup() {
        const navDrawer = navDrawerStore()
        return { navDrawer }
    },
    methods: {
        jumpto(value, title, index){
            if(this.navDrawer.items[index].auth == true && this.global.islogin == false) {
                this.dialog.show("无权限访问", "访问需要登录,请先登录")
                return
            }
            this.jumpView(value, title)
            this.navDrawer.activeIndex = index
        },
    },
}
</script>