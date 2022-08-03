<template>
  <section class="service_two">
    <div class="container">
      <div class="block-title text-center">
        <p>O que fazemos</p>
        <h3>Alguns de nossos serviços</h3>
        <div class="leaf">
          <img src="@/static/images/resources/leaf.png" alt="" />
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <ul class="service_2_top list-unstyled">

            <li class="service_2_single wow fadeInUp">
              <div class="service_2_image">
                <img
                  src="@/static/images/service/manejo-pragas.webp"
                  alt="Manejo de Pragas"
                />
              </div>
              <h3>
                <nuxt-link to="/service-detail">
                  Manejo <br/> de pragas
                </nuxt-link>
              </h3>
            </li>
            <li class="service_2_single wow fadeInUp">
              <div class="service_2_image">
                <img
                  src="@/static/images/service/plantas-daninhas.webp"
                  alt="Plantas Daninhas"
                />
              </div>
              <h3>
                <nuxt-link to="/service-detail">
                  Manejo <br/> de daninhas
                </nuxt-link>
              </h3>
            </li>
            <li class="service_2_single wow fadeInUp">
              <div class="service_2_image">
                <img
                  src="@/static/images/service/analise-de-solo.webp"
                  alt="Análise de Solo"
                />
              </div>
              <h3>
                <nuxt-link to="/service-detail">
                  Análises <br/> de solo
                </nuxt-link>
              </h3>
            </li>
            <li class="service_2_single wow fadeInUp">
              <div class="service_2_image">
                <img
                  src="@/static/images/service/manejo-de-solo.webp"
                  alt="Manejo de solo"
                />
              </div>
              <h3>
                <nuxt-link to="/service-detail">
                  Manejo <br/> de solo
                </nuxt-link>
              </h3>
            </li>

          </ul>
        </div>
      </div>
      <hr />
    </div>
  </section>
</template>

<script>
export default {
  name: "ServiceTwo",
};
</script>

<style scoped>
</style>
