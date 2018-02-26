<template lang="html">
  <div class="">
    <about />
    <speakers />
    <buytickets />
    <schedule />
    <tickets />
  </div>
</template>

<script>
  import about from "@/pages/home/components/about";
  import schedule from "@/pages/home/components/schedule";
  import speakers from "@/pages/home/components/speakers";
  import tickets from "@/pages/home/components/tickets";
  import buytickets from "@/components/buytickets";
  export default {
    components: {
      about,
      schedule,
      speakers,
      tickets,
      buytickets
    }
  }
</script>

<style lang="css">

</style>
