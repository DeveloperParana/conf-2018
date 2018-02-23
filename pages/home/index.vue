<template lang="html">
  <div class="">
    <about />
    <speakers />
    <schedule />
  </div>
</template>

<script>
  import about from "@/pages/home/components/about";
  import schedule from "@/pages/home/components/schedule";
  import speakers from "@/pages/home/components/speakers";
  export default {
    components: {
      about,
      schedule,
      speakers
    }
  }
</script>

<style lang="css">

</style>
