<template>
  <div
    class="el-tab-pane tab_pane_1"
    v-if="!lazy || loaded || active"
    v-show="active"
    role="tabpanel"
    :aria-hidden="!active"
    :id="`pane-${paneName}`"
    :aria-labelledby="`tab-${paneName}`"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "ElTabPane",

  componentName: "ElTabPane",

  props: {
    label: String,
    labelContent: Function,
    name: String,
    closable: Boolean,
    disabled: Boolean,
    lazy: Boolean
  },

  data() {
    return {
      index: null,
      loaded: false
    };
  },
  watch: {
    active: function(_active) {
      this.loaded = _active ? true : false;
    }
  },
  computed: {
    isClosable() {
      return this.closable || this.$parent.closable;
    },
    active() {
      let _active = this.$parent.currentName === (this.name || this.index);
      return _active;
    },
    paneName() {
      return this.name || this.index;
    }
  },

  updated() {
    this.$parent.$emit("tab-nav-update");
  }
};
</script>
