<template lang="html">
  <div class="">
    <about />
    <speakers />
    <buytickets />
    <schedule />
    <tickets />
    <location />
    <contact />
  </div>
</template>

<script>
  import about from "@/pages/home/components/about";
  import schedule from "@/pages/home/components/schedule";
  import speakers from "@/pages/home/components/speakers";
  import tickets from "@/pages/home/components/tickets";
  import buytickets from "@/components/buytickets";
  import location from "@/pages/home/components/location";
  import contact from "@/pages/home/components/contact";
  export default {
    components: {
      about,
      schedule,
      speakers,
      tickets,
      buytickets,
      location,
      contact
    }
  }
</script>
