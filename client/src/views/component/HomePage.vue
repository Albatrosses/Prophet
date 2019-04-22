<template>
  <div class="home-page">
    <header class="header-panel">我是头部</header>
    <div class="content">
      <div class="listing-panel">
        <nav class="tools-listing">我是导航</nav>
        <div class="tools-panel"></div>
      </div>
      <div class="work-panel">
        <coding-panel class="coding"></coding-panel>
        <div class="code-map">代码地图</div>
      </div>
    </div>
    <footer class="footer-panel">我是底部</footer>
  </div>
</template>

<script>
import CodingPanel from "src/component/coding/component/CodingPanel";
export default {
  name: "HomePage",
  components: {
    "coding-panel": CodingPanel
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.home-page {
  @include full;
  display: flex;
  flex-direction: column;
  .header-panel {
    flex: 0 0 30px;
  }
  .content {
    flex: auto;
    display: flex;
    .listing-panel {
      flex: 0 0 300px;
    }
    .work-panel {
      flex: auto;
      display: flex;
      @include full;
      .coding {
        flex: auto;
      }
      .code-map {
        flex: 0 0 100px;
      }
    }
  }
  .footer-panel {
    flex: 0 0 20px;
  }
}
</style>
