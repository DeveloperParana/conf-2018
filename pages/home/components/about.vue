<template>
  <div class="about--block size margin content container justify-content-center" id="about">

    <div class="about--block--title col-6">
      <h2>
          <span>sobre o</span>
          <span>dev parana</span>
          <span>conference</span>
      </h2>
    </div>

    <div class="about--block--title col-6">
      <p><strong>Are you into React, React Native, GraphQL and hungry to learn from the best?</strong></p>
      <p><strong>React Day Berlin is a brand new event in the city, the first of its kind - a full day conference for engineers working with the React technology stack.</strong></p>
      <p>Careful balance of practical and visionary talks from renowned speakers make React Day a unique place to meet and learn from the most forward-thinking international community members, influencers and open source maintainers.</p>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about--block {
  margin-top: 7rem;
  h2 {
    span {
      display: block;
      width: 100%;
      font-size: 2rem;
    }
    @media screen and (min-width: 400px) and (max-width: 1200px) {
      span {
        font-size: calc(16px + (90 - 16) * (100vw - 400px) / (1200 - 400));
      }
    }
    @media screen and (min-width: 1200px) {
      span {
        font-size: 7vw;
      }
    }
  }
  .about--block--title {
    p {
      margin-bottom: 2rem;
      font-size: 1.2rem;
      line-height: 1.7em;
      font-weight: 300;
    }
  }
}
</style>
