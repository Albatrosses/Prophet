<template>
  <div class="coding-panel">
    <div class="editor-content" :style="contentHeight">
      <div class="col-num">
        <div class="col-num-item" v-for="n in colNum" :key="n">{{ n }}</div>
      </div>
      <textarea class="editor-text" autofocus v-model="text"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "coding-panel",
  data() {
    return {
      text: ""
    };
  },
  computed: {
    colNum() {
      let colArray = this.text.match(/\n/g);
      if (!colArray) {
        return 1;
      } else {
        return colArray.length + 1;
      }
    },
    contentHeight() {
      let height = this.colNum * 21;
      return `height: ${height}px`;
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
.coding-panel {
  overflow: auto;
  @include full;
  .editor-content {
    display: flex;
    background: $content;
    width: 100%;
    min-height: 100%;
    .col-num {
      flex: 0 0 40px;
      width: 100%;
      min-height: 100%;
      padding: 1px;
      .col-num-item {
        line-height: 20px !important;
      }
    }
    .editor-text {
      @include full;
      flex: auto;
      background: $editor;
      min-height: 100%;
      color: inherit;
      appearance: none;
      resize: none;
      outline: none;
      border: none;
      padding: 1px;
      font-family: "Courier New", Courier, monospace;
      line-height: 20px !important;
    }
  }
}
</style>
