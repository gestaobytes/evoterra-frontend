<template>
  <section class="banner-section banner-three">
    <div class="banner-carousel-three owl-theme owl-carousel">
      <no-ssr>
        <carousel :items="1" :autoplay="true" :nav="false">
          <!-- Slide Item -->
          <div class="slide-item">
            <div
              class="image-layer"
              style="
                background-image: url(/images/main-slider/slide_v3_1.jpg);
              "
            ></div>
            <div class="auto-container">
              <div class="content-box">
                <div class="content">
                  <div class="inner">
                    <div class="big_text">
                      <h2>Consultoria agronômica</h2>
                    </div>
                    <div class="sub-title">
                      O desafio para produção de alimentos com sustentabilidade
                      é crescente, por isso auxiliamos o agricultor em seus
                      desafios diários, visando excelência e rentabilidade.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide-item">
            <div
              class="image-layer"
              style="
                background-image: url(/images/main-slider/slide_v3_2.jpg);
              "
            ></div>
            <div class="auto-container">
              <div class="content-box">
                <div class="content">
                  <div class="inner">
                    <div class="big_text">
                      <h2>Agricultura de precisão</h2>
                    </div>
                    <div class="sub-title">
                      Utilizamos as mais modernas ferramentas para diagnósticos
                      e avaliações, com amostragens e correção de solo, imagens
                      de satélite e uso de Drones.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </carousel>
      </no-ssr>
    </div>
  </section>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
