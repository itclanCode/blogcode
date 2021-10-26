<template>
  <div>
    <div align="right" v-show="ShowShareLink">
      <ShareLink />
    </div>
    <div align="center" v-show="ShowDaShang">
      <DaShang />
    </div>
  </div>
</template>

<script>
import DaShang from './DaShang';
import ShareLink from './ShareLink';

export default {
  name: 'FooterLink',
  props: ['isShareLink', 'isDaShang'],
  components: {
    DaShang,
    ShareLink,
  },
  data() {
    return {
      ShowShareLink: this.isShareLink,
      ShowDaShang: this.isDaShang,
    };
  },
};
</script>

<style lang="scss" scoped></style>
