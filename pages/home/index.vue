<template lang="html">
  <div>
    <about />
    <!-- <speakers /> -->
    <!-- <buytickets /> -->
    <!-- <schedule /> -->
    <tickets />
    <location />
    <contact />
    <div class="sponsors-support--bg">
      <sponsors />
      <support />
    </div>
  </div>
</template>

<script>
import about from "@/pages/home/components/about";
// import schedule from "@/pages/home/components/schedule";
// import buytickets from "@/components/buytickets";
// import speakers from "@/pages/home/components/speakers";
import tickets from "@/pages/home/components/tickets";
import location from "@/pages/home/components/location";
import contact from "@/pages/home/components/contact";
import sponsors from "@/pages/home/components/sponsors";
import support from "@/pages/home/components/support";

export default {
  components: {
    about,
    // schedule,
    // buytickets,
    // speakers,
    tickets,
    location,
    contact,
    sponsors,
    support
  }
}
</script>

<style lang="scss">
.sponsors-support--bg {
    background: $color-white;
    padding-top: 100px;
    padding-bottom: 100px;
}
</style>
