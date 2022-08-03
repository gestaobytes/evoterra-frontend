<template>
  <section class="news_detail">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 col-lg-7">
          <div class="news_detail_left">
            <div class="news_detail_image_box">
              <img src="@/static/images/blog/blog-1.webp" alt="" />
              <div class="news_detail_date_box">
                <p>01 Ago, 2022</p>
              </div>
            </div>
            <div class="news_detail_content">
              <h2>Titulo da matéria clicada. </h2>
              <p class="news_detail_one_text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some injected or
                words which don't look even slightly believable. If you are
                going to use a passage of Lorem Ipsum, you need to be sure there
                isn't anything embarrassing hidden in the middle of text. All
                the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true
                generator on the Internet. It uses a dictionary of over 200
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable.
              </p>
              
            </div>
            <div class="news_detail__bottom">
              <div class="news_detail__social-list">
                <a href="#"><i class="fab fa-facebook-square"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-dribbble"></i></a>
              </div>
            </div>
            
          </div>
        </div>
        <div class="col-xl-4 col-lg-5">
          <div class="sidebar">
            <div class="sidebar__single sidebar__post">
              <h3 class="sidebar__title">Artigos mais recentes</h3>
              <ul class="sidebar__post-list list-unstyled">
                <li>
                  <div class="sidebar__post-image">
                    <img src="@/static/images/blog/lp-1-1.jpg" alt="" />
                  </div>
                  <div class="sidebar__post-content">
                    <h3>
                      <nuxt-link to="/news_detail"
                        >Agriculture Miracle you Don't Know About</nuxt-link
                      >
                    </h3>
                  </div>
                </li>
                <li>
                  <div class="sidebar__post-image">
                    <img src="@/static/images/blog/lp-1-2.jpg" alt="" />
                  </div>
                  <div class="sidebar__post-content">
                    <h3>
                      <nuxt-link to="/news_detail"
                        >Agriculture Miracle you Don't Know About</nuxt-link
                      >
                    </h3>
                  </div>
                </li>
                <li>
                  <div class="sidebar__post-image">
                    <img src="images/blog/lp-1-3.jpg" alt="" />
                  </div>
                  <div class="sidebar__post-content">
                    <h3>
                      <nuxt-link to="/news_detail"
                        >Agriculture Miracle you Don't Know About</nuxt-link
                      >
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
            <div class="sidebar__single sidebar__category">
              <h3 class="sidebar__title">Categories</h3>
              <ul class="sidebar__category-list list-unstyled">
                <li><a href="#">Agricultura</a></li>
                <li><a href="#">Comida Orgânica</a></li>
                <li><a href="#">Soluções para o campo</a></li>
                <li><a href="#">Meio ambiente</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlogSingle",
};
</script>