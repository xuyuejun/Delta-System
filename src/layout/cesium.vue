<template>
  <el-container>
    <el-header style="text-align: left; font-size: 32px">
      <router-link to="/">
        <div>Delta System</div>
      </router-link>
    </el-header>
    <div class="bodyContainer">
      <el-aside>
        <el-menu
          active-text-color="#ffd04b"
          background-color="#2F343D"
          text-color="#fff"
          default-active="1"
          :collapse="true"
        >
          <el-menu-item index="1">
            <el-icon>
              <MapLocation />
            </el-icon>
            <template #title>Cesium</template>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon>
              <VideoPlay />
            </el-icon>
            <template #title>Three.js</template>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon>
              <setting />
            </el-icon>
            <template #title>设置</template>
          </el-menu-item>
          <el-sub-menu index="4">
            <template #title>
              <el-icon>
                <Odometer />
              </el-icon>
              <span>测试按钮</span>
            </template>
            <el-menu-item-group>
              <template #title><span>Group One</span></template>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <div class="cesium-main">Main</div>
    </div>
  </el-container>
</template>

<script>
// import Navbar from './components/Navbar.vue'
// import Sidebar from './components/Sidebar.vue'
// import AppMain from './components/AppMain.vue'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    name: 'vue-cesium'
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}
.el-header {
  background-color: #15171B;
  color: #fff;
  line-height: 60px;
}

.el-main {
  background-color: aqua;
}

.bodyContainer {
  height: calc(100vh - 60px);
  display: flex;
}

.el-aside {
  width: 64px;
  background-color: #2F343D;
}

.cesium-main {
  background-color: bisque;
  width: 100%;
}
</style>
