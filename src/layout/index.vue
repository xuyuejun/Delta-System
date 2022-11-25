<template>
  <div class="container">
    <div class="content">
      <div class="logo">
        <el-image style="height: 100%" :src="logo" :fit="fill" />
      </div>
      <div class="nav-container">
        <el-row class="nav-group" :gutter="20">
          <el-col :span="6">
            <router-link to="cesium">
              <el-card shadow="always" style="height: 100%; cursor: pointer"> Cesium </el-card>
            </router-link>
          </el-col>
          <el-col :span="6">
            <el-card shadow="hover" style="height: 100%; cursor: pointer"> Test </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="never" style="height: 100%; cursor: pointer"> Never </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="never" style="height: 100%; cursor: pointer"> Never </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '../assets/images/kgb.png'

export default {
  setup() {
    return {
      logo
    }
  }
}
</script>

<style>
.container {
  background-color: #424242;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  display: flex;
  justify-content: center;
  height: 50%;
}

.content {
  width: 80%;
  height: 80%;
}

.nav-container {
  display: flex;
  width: 100%;
  height: 40%;
  justify-content: center;
  align-items: center;
}

.nav-group {
  width: 100%;
  height: 70%;
}
</style>
