<template>
  <div class="container">
    <VVerticalPadding
      :desktop-padding="ARTICLES_SLUG_GRID_CONFIG.desktopPadding"
      :mobile-padding="ARTICLES_SLUG_GRID_CONFIG.mobilePadding">
      <BlockCardBlog :fields="CONFIG" />
    </VVerticalPadding>
  </div>
</template>

<script setup>
import { VVerticalPadding } from '~/components/ui'
import { BlockCardBlog } from '~/components/blocks'

import { ARTICLES_SLUG_GRID_CONFIG } from '~/configs/pages/articles'

const route = useRoute()
const categorySlug = route.params.category
const articleSlug = route.params.slug

const CONFIG = computed(() => {
  let foundCategory = null
  let foundArticle = null

  // Находим категорию
  for (const letterGroup of ARTICLES_SLUG_GRID_CONFIG.block_fields.cards) {
    const foundCard = letterGroup.cards.find(
      (card) => card.slug === categorySlug,
    )
    if (foundCard) {
      foundCategory = foundCard
      break
    }
  }

  // Если категория не найдена, возвращаем пустой конфиг
  if (!foundCategory || !foundCategory.articles) {
    return {
      ...ARTICLES_SLUG_GRID_CONFIG.block_fields,
      cards: [],
    }
  }

  // Находим конкретную статью по slug
  foundArticle = foundCategory.articles.find(
    (article) => article.slug === articleSlug
  )

  // Если статья не найдена, возвращаем пустой конфиг
  if (!foundArticle) {
    return {
      ...ARTICLES_SLUG_GRID_CONFIG.block_fields,
      cards: [],
    }
  }

  // Возвращаем конфиг с одной карточкой-статьей
  return {
    ...ARTICLES_SLUG_GRID_CONFIG.block_fields,
    ...foundArticle,
   
  }
})

// Получаем статью для мета-тегов
const article = computed(() => {
  return CONFIG.value || {
    title: 'Статья не найдена',
    description: 'Запрашиваемая статья не существует',
  }
})

useHead({
  title: article.value.title,
  meta: [
    { name: 'description', content: article.value.description },
    { property: 'og:title', content: article.value.title },
    { property: 'og:description', content: article.value.description },
    {
      property: 'og:url',
      content: `https://your-site.com/articles/${categorySlug}/${articleSlug}`,
    },
  ],
})
</script>

<style scoped></style>
