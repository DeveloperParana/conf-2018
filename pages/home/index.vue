<template lang="html">
  <div class="">
    <about />
    <speakers />
    <schedule />
    <tickets />
  </div>
</template>

<script>
  import about from "@/pages/home/components/about";
  import schedule from "@/pages/home/components/schedule";
  import speakers from "@/pages/home/components/speakers";
  import tickets from "@/pages/home/components/tickets";
  export default {
    components: {
      about,
      schedule,
      speakers,
      tickets
    }
  }
</script>

<style lang="css">

</style>
