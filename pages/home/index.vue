<template lang="html">
  <div class="">
    <about />
    <speakers />
    <schedule />
    <prices />
  </div>
</template>

<script>
  import about from "@/pages/home/components/about";
  import schedule from "@/pages/home/components/schedule";
  import speakers from "@/pages/home/components/speakers";
  import prices from "@/pages/home/components/prices";
  export default {
    components: {
      about,
      schedule,
      speakers,
      prices
    }
  }
</script>

<style lang="css">

</style>
