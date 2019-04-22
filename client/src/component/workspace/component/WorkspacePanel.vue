<template>
  <div class="workspace-panel"></div>
</template>

<script>
import http from "src/interfaces/server/";
// import { ASYNC_UPLOAD_FILE_LIST } from "";
export default {
  name: "workspace-panel",
  mounted() {
    let test = http();
    console.log(test);
  }
};
</script>

<style lang="scss" rel="stylesheet/scss"></style>
