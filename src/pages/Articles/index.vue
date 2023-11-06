<template>
  <div class='container'>
    <Breadcrumb :breadcrumb='breadcrumb' />
    <ArticleItem :article-title='articleTitle' />
  </div>
</template>

<script lang="ts">
import { ArticleItem } from '../../entities/ArticleItem'
import { Breadcrumb } from '../../entities/Breadcrumb'
import { ProjectItem } from '../../entities/ProjetcItem'
export default {
  components: {
    Breadcrumb,
    ProjectItem,
    ArticleItem
  },
  data() {
    return {
      breadcrumb: {
        title: 'Статьи',
        isArticle: false
      },
      articleTitle: [
        {
          name: 'Неоморфизм и почему он плох.',
          to: '/articles/neomorphism',
          date: '1 апреля 2023 года.'
        }
      ]
    }
  },

}
</script>
