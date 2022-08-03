<template>
  <div class="site_header__header_three_wrap">
    <div class="topbar-three">
      <div class="container-box">
        <div class="topbar_three_content clearfix">
          <div class="logo-box-three float-left">
            <a href="/index3" class="main-nag__logo">
              <img src="@/static/images/resources/logo-2.png" alt="" />
            </a>
          </div>

          <div class="topbar_three_nav_box float-left">
            <nav
              :class="`header-navigation stricky clearfix ${
                sticky ? 'stricked-menu stricky-fixed' : ''
              }`"
            >
              <div class="container">
                <div class="main_nav_header_three_content clearfix">
                  <div class="mobile_menu_icon_three">
                    <a href="#" class="side-menu__toggler">
                      <i
                        @click="mobileToggle = !mobileToggle"
                        class="fa fa-bars"
                      ></i>
                    </a>
                  </div>
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
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <nuxt-link to="/login">
                <i class="fab fa-dribbble"></i
              ></nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nav
      class="mobile-nav__container"
      :style="`display: ${mobileToggle ? 'block' : 'none'}`"
    >
      <!-- content is loading via js -->

      <ul class="main-nav__navigation-box">
        <li class="dropdown current">
          <div class="menu-holder">
            Home<button class="dropdown-btn">
              <i class="fa fa-angle-right"></i>
            </button>
          </div>
          <ul>
            <li><nuxt-link to="/">Home 01</nuxt-link></li>
            <li><nuxt-link to="/index2">Home 02</nuxt-link></li>
            <li><nuxt-link to="/index3">Home 03</nuxt-link></li>
            <li><nuxt-link to="/index4">Home 04</nuxt-link></li>
            <li><nuxt-link to="/index5">Home 05</nuxt-link></li>
            <li class="dropdown">
              <div class="menu-holder">
                Header Versions<button class="dropdown-btn">
                  <i class="fa fa-angle-right"></i>
                </button>
              </div>
              <ul>
                <li><nuxt-link to="/">Header 01</nuxt-link></li>
                <li><nuxt-link to="/index2">Header 02</nuxt-link></li>
                <li><nuxt-link to="/index3">Header 03</nuxt-link></li>
                <li><nuxt-link to="/index4">Header 04</nuxt-link></li>
                <li><nuxt-link to="/index5">Header 05</nuxt-link></li>
              </ul>
              <!-- /.sub-menu -->
            </li>
          </ul>
          <!-- /.sub-menu -->
        </li>
        <li class="dropdown">
          <div class="menu-holder">
            Services<button class="dropdown-btn">
              <i class="fa fa-angle-right"></i>
            </button>
          </div>
          <ul>
            <li><nuxt-link to="/servicos">Services</nuxt-link></li>
            <li>
              <nuxt-link to="/service-detail">Services Detail</nuxt-link>
            </li>
          </ul>
          <!-- /.sub-menu -->
        </li>
        <li class="dropdown">
          <div class="menu-holder">
            Our Projects<button class="dropdown-btn">
              <i class="fa fa-angle-right"></i>
            </button>
          </div>
          <ul>
            <li><nuxt-link to="/projects">Projects</nuxt-link></li>
            <li>
              <nuxt-link to="/projects_detail">Projects Detail</nuxt-link>
            </li>
          </ul>
          <!-- /.sub-menu -->
        </li>
        <li class="dropdown">
          <div class="menu-holder">
            Shop<button class="dropdown-btn">
              <i class="fa fa-angle-right"></i>
            </button>
          </div>
          <ul>
            <li><nuxt-link to="/product">Products</nuxt-link></li>
            <li><nuxt-link to="/product-detail">Product Detail</nuxt-link></li>
            <li><nuxt-link to="/cart">Cart</nuxt-link></li>
            <li><nuxt-link to="/checkout">Checkout</nuxt-link></li>
          </ul>
          <!-- /.sub-menu -->
        </li>
        <li class="dropdown">
          <div class="menu-holder">
            Pages<button class="dropdown-btn">
              <i class="fa fa-angle-right"></i>
            </button>
          </div>
          <ul>
            <li><nuxt-link to="/sobre-nos">About</nuxt-link></li>
            <li><nuxt-link to="/why_choose_us">Why Choose Us</nuxt-link></li>
            <li><nuxt-link to="/farmers">Farmers</nuxt-link></li>
            <li><nuxt-link to="/gallery">Gallery</nuxt-link></li>
          </ul>
          <!-- /.sub-menu -->
        </li>
        <li class="dropdown">
          <div class="menu-holder">
            News<button class="dropdown-btn">
              <i class="fa fa-angle-right"></i>
            </button>
          </div>
          <ul>
            <li><nuxt-link to="/news">News</nuxt-link></li>
            <li><nuxt-link to="/news_detail">News Details</nuxt-link></li>
          </ul>
          <!-- /.sub-menu -->
        </li>
        <li>
          <nuxt-link to="/contact">Contact</nuxt-link>
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
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
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
