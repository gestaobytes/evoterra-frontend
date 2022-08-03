<template>
  <section class="blog-one">
    <div class="container">
      <div class="block-title text-center">
        <p>nosso blog</p>
        <h3>Dicas e Artigos</h3>
        <div class="leaf">
          <img src="@/static/images/resources/leaf.png" alt="" />
        </div>
      </div>
      <div class="row">
        <div class="col-xl-4 col-lg-4" v-for="(i, index) in 3" :key="index">
          <div class="blog_one_single wow fadeInUp" data-wow-delay="300ms">
            <div class="blog_one_image">
              <div class="blog_image">
                <img
                  :src="'images/blog/blog-' + i + '.webp'"
                  alt="Blog One Image"
                />
                <div class="blog_one_date_box">
                  <p>01 Ago, 2022</p>
                </div>
              </div>
              <div class="blog-one__content">
                <h3>
                  <nuxt-link to="/news_detail">
                    Título {{ i }} do artigo que fica bem agradável com até 60
                    caracteres</nuxt-link
                  >
                </h3>
                <div class="blog_one_text">
                  <p>
                    There are lorem ipsum is simply free many variations of
                    ipsum the majority suffered.
                  </p>
                </div>
                <div class="read_more_btn">
                  <nuxt-link to="/news_detail"
                    ><i class="fa fa-angle-right"></i>Saiba mais</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlogOne",
};
</script>

<style scoped>
</style>
