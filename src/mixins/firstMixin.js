export default {
    props: {
        addDialogVisible: {
            type: Boolean,
            default: false,
          },
    },
    methods: {
        hideDialog() {
            this.$emit("update:addDialogVisible", this.addDialogVisible);
          },
    },
}