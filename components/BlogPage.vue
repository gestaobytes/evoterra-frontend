<template>
  <section class="service_four service_page">
    <div class="container">
      <div class="service_four_top"></div>

      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-lg-4" v-for="(i, index) in 6" :key="index">
            <div class="blog_one_single mb-30">
              <div class="blog_one_image">
                <div class="blog_image">
                  <img
                    :src="'images/blog/blog-' + i + '.webp'"
                    alt="Blog One Image"
                  />
                  <div class="blog_one_date_box">
                    <p>30 Oct, 2019</p>
                  </div>
                </div>
                <div class="blog-one__content">
                  <h3>
                    <nuxt-link to="/news_detail"
                      >Título {{ i }} do artigo que fica bem agradável com até
                      60 caracteres</nuxt-link
                    >
                  </h3>
                  <div class="blog_one_text">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam laborum nemo animi ducimus, veniam beatae ex.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="our_projects_btn">
              <a href="#" class="thm-btn">Carregar mais</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlogPage",
};
</script>

<style scoped>
</style>
