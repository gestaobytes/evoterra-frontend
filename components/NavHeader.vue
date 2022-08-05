<template>
  <div class="site_header__header_three_wrap">
    <div class="topbar-three">
      <div class="container-box">
        <div class="topbar_three_content clearfix">
          <div class="logo-box-three float-left">
            <nuxt-link to="/" class="main-nag__logo">
              <img src="@/static/images/resources/logo-2.png" alt="" />
            </nuxt-link>
          </div>

          <div class="topbar_three_nav_box float-left">
            <nav
              :class="`header-navigation stricky clearfix ${
                sticky ? 'stricked-menu stricky-fixed' : ''
              }`"
            >
              <div class="container">
                <div class="main_nav_header_three_content clearfix">
                  <div class="main-nav__main-navigation three float-left">
                    <img
                      src="@/static/images/resources/logo-horizontal.webp"
                      alt=""
                      v-show="sticky"
                    />
                    <ul class="main-nav__navigation-box">
                      <li class="dropdown current">
                        <nuxt-link to="/">Home</nuxt-link>
                      </li>

                      <li class="dropdown">
                        <nuxt-link to="#">Empresa</nuxt-link>
                        <ul>
                          <li>
                            <nuxt-link to="/sobre-nos">Sobre nós</nuxt-link>
                          </li>
                          <li>
                            <nuxt-link
                              :to="{ path: '/sobre-nos', hash: 'team' }"
                              v-scroll-to="{ el: '#team' }"
                              >Colaboradores</nuxt-link
                            >
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <nuxt-link to="/servicos">Serviços</nuxt-link>
                      </li>
                      <li class="dropdown">
                        <nuxt-link to="/blog">Blog</nuxt-link>
                      </li>
                      <li>
                        <a href="#">Contato</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div class="topbar_three_right_box">
            <div class="topbar-one__social home-four">
              <a
                href="https://www.facebook.com/Evoterra-Consultoria-Agron%C3%B4mica-504788166323947"
                ><i class="fab fa-facebook-f"></i
              ></a>
              <a href="https://www.instagram.com/evoterra_consultoriaa/"
                ><i class="fab fa-instagram"></i
              ></a>
              <!-- <a href="#"><i class="fab fa-twitter"></i></a> -->
              <nuxt-link to="/login">
                <i class="fab fa-dribbble"></i
              ></nuxt-link>

              <a aria-label="Open Menu" @click="drawer">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-6 h-6"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nav
      class="mobile-nav__container"
      :style="`display: ${mobileToggle ? 'block' : 'none'}`"
    >
      <ul class="main-nav__navigation-box">
        <li class="dropdown current">
          <div class="menu-holder">
            Home<button class="dropdown-btn">
              <i class="fa fa-angle-right"></i>
            </button>
          </div>
          <ul>
            <li><nuxt-link to="/">Home</nuxt-link></li>
          </ul>
        </li>
        <li class="dropdown">
          <div class="menu-holder">
            Empresa<button class="dropdown-btn">
              <i class="fa fa-angle-right"></i>
            </button>
          </div>
          <ul>
            <li>
              <nuxt-link to="/sobre-nos">Sobre nós</nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="{ path: '/sobre-nos', hash: 'team' }"
                v-scroll-to="{ el: '#team' }"
                >Colaboradores</nuxt-link
              >
            </li>
          </ul>
        </li>
        <li>
          <nuxt-link to="/servicos">Serviços</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/blog">Blog</nuxt-link>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavHeader",
  data() {
    return {
      sticky: false,
      mobileToggle: false,
    };
  },
  // computed: {
  //   drawer: {
  //     get() {
  //       return this.$store.state.drawer.show;
  //     },
  //     set(val) {
  //       this.$store.dispatch("drawer/SET_DRAWER", val);
  //     },
  //   },
  // },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    drawer() {
      this.$store.dispatch("drawer/SET_DRAWER", !this.$store.state.drawer.show);
    },

    handleScroll() {
      if (window.scrollY > 70) {
        this.sticky = true;
      } else if (window.scrollY < 70) {
        this.sticky = false;
      }
    },
  },
};
</script>
