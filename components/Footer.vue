<template>
  <div>
    <footer class="site-footer">
      <div class="site-footer_farm_image">
        <img
          src="@/static/images/resources/site-footer-farm.png"
          alt="Farm Image"
        />
      </div>
      <div class="container">
        <div class="row no-gutters">
          <div class="col-xl-4 col-lg-4 col-md-6">
            <div
              class="footer-widget__column footer-widget__about wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div class="footer-widget__title">
                <img
                  src="@/static/images/resources/logo-horizontal.webp"
                  alt=""
                />
              </div>
              <div class="footer-widget_about_text">
                <p>
                  Desde 2012, a EVOTERRA presta consultoria agronômica
                  especializada aos produtores de grãos e fibras na região do
                  MAPITOBAPA.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-6">
            <div
              class="footer-widget__column footer-widget__link wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div class="footer-widget__title">
                <h3>Empresa</h3>
              </div>
              <ul class="footer-widget__links-list list-unstyled">
                <li><nuxt-link to="sobre-nos">Sobre nós</nuxt-link></li>
                <li>
                  <nuxt-link
                    :to="{ path: '/sobre-nos', hash: 'team' }"
                    v-scroll-to="{ el: '#team' }"
                    >Colaboradores</nuxt-link
                  >
                </li>
                <li><nuxt-link to="servicos">Serviços</nuxt-link></li>
                <!-- <li><nuxt-link to="servicos">Serviços</nuxt-link></li> -->
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6">
            <div
              class="footer-widget__column footer-widget__news wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div class="footer-widget__title">
                <h3>Artigos</h3>
              </div>
              <ul class="footer-widget__news list-unstyled">
                <li>
                  <div class="footer-widget__news_image">
                    <img
                      src="@/static/images/resources/footer-1-img-1.jpg"
                      alt=""
                    />
                  </div>
                  <div class="footer-widget__news_text">
                    <p>
                      <a href="/news_detail">
                        Learn 10 Best Tips for New Formers</a
                      >
                    </p>
                  </div>
                  <div class="footer-widget__news_date_box">
                    <p>30 Oct, 2020</p>
                  </div>
                </li>
                <li>
                  <div class="footer-widget__news_image">
                    <img
                      src="@/static/images/resources/footer-1-img-2.jpg"
                      alt=""
                    />
                  </div>
                  <div class="footer-widget__news_text">
                    <p>
                      <a href="/news_detail"
                        >Farmer Sentiment Darkens Hopes Fade</a
                      >
                    </p>
                  </div>
                  <div class="footer-widget__news_date_box">
                    <p>30 Oct, 2020</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6">
            <div
              class="footer-widget__column footer-widget__contact wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div class="footer-widget__title">
                <h3>Contatos</h3>
              </div>
              <div class="footer-widget_contact">
                <p>Avenida Tocantins<br />Balsas-MA</p>
                <a href="mailto:contato@evoterra.com">contato@evoterra.com</a
                ><br />
                <a href="tel:777-888-0000">777 888 0000</a>
                <div class="site-footer__social">
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- <div class="site-footer_bottom">
        <div class="container">
          <div class="site-footer_bottom_copyright">
            <p>@ All copyright 2022, <a href="#">Gestão Bytes</a></p>
          </div>
          <div class="site-footer_bottom_menu">
            <ul class="list-unstyled">
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Termos de Uso</a></li>
            </ul>
          </div>
        </div>
      </div> -->

    <a
      @click="scrollTop"
      href="#"
      class="scroll-to-target scroll-to-top"
      :style="`display: ${scrollBtn ? 'block' : 'none'}`"
      ><i class="fa fa-angle-up"></i
    ></a>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      scrollBtn: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      if (window.scrollY > 70) {
        this.scrollBtn = true;
      } else if (window.scrollY < 70) {
        this.scrollBtn = false;
      }
    },

    scrollTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
</style>
