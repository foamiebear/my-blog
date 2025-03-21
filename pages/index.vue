<template>
  <Tutorial />
</template>

<script>
export default {
  name: 'IndexPage',
  async mounted() {
    let res = await this.$axios.get('/api');

    console.log(res.data);
  },
}
</script>
