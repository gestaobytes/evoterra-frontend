<template>
  <section class="welcome_one">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6">
          <div class="block-title text-left">
            <p>BEM VINDO AO FUTURO</p>
            <h3>Muito prazer, somos a EVOTERRA</h3>
            <div class="leaf">
              <img src="@/static/images/resources/leaf.png" alt="" />
            </div>
          </div>
          <div class="growing_box">
            <!-- <div class="growing_icon_box">
              <span class="icon-harvest"></span>
            </div> -->
            <div class="growing_text">
              <p>
                Sempre em busca da qualidade e de soluções inovadoras com
                excelência e respeito ao meio ambiente.
              </p>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div class="welcome_text">
            <p>
              Nosso corpo técnico possui mais de 15 anos de experiência na área
              de assessoria/consultoria agronômica especializada para os
              produtores de grãos e fibras na região do MAPITOBAPA.
            </p>
          </div>
          <div
            class="welcome_video_box"
            style="
              background-image: url(/images/resources/welcome_video_bg.webp);
            "
          >
            <a
              href="https://www.youtube.com/watch?v=V62FWrqbT4E"
              class="welcome_video_btn videoTwo"
              ><i class="fa fa-play"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WelcomeOne",
  mounted() {
    new GLightbox({
      selector: ".videoTwo",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
    });
  },
};
</script>

<style scoped>
</style>
