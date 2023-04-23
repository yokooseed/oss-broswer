<template>
  <v-app>
    <navDrawer/>
    <v-main>
      <div class="router-view">
        <router-view v-slot="{ Component }">
          <headbar/>
          <v-breadcrumbs :items="global.breadcrumbs" v-show="global.isShowBar">
            <template v-slot:divider>
              <v-icon icon="mdi-chevron-right"></v-icon>
            </template>
          </v-breadcrumbs>
          <div class="router-view-inner" v-if="global.isShowBar">
            <h1 style="margin-bottom: 20px;">{{  global.title }} </h1>
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
          </div>
          <div v-else>
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
          </div>
        </router-view>
      </div>
    </v-main>
    <dialog-view></dialog-view>
    <snackbar></snackbar>
    <popup></popup>
  </v-app>
</template>

<style>
.fade-enter-from, .fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
.fade-enter-to, .fade-leave-from {
    opacity: 1;
}
.fade-enter-active {
    transition: all 0.5s ease;
}
.fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.6, 0.6, 1);
}


.router-view {
    background-color: rgb(231, 235, 246);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    min-height: 100vh;
}

.router-view-inner {
    margin-left: 20px;
    margin-right: 20px;
}
</style>

<script>
import navDrawer from '@/components/nav-drawer.vue'
import headBar from '@/components/head-bar.vue'
import dialog from '@/components/dialog.vue'
import snackbar from '@/components/snackbar.vue'
import popup from '@/components/popup.vue'

export default {
  name: 'App',
  components: {
    'navDrawer': navDrawer,
    'headbar': headBar,
    'dialog-view': dialog,
    'snackbar': snackbar,
    'popup': popup,
  },
}
</script>

