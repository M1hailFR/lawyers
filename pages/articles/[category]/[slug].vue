<template>
  <div class="container">
    <h1>{{ article.title }}</h1>
    <div class="article-meta">
      <span>{{ formatDate(article.date) }}</span>
      <NuxtLink
        :to="`/articles/${categorySlug}`"
        class="back-link"
        >← Назад к списку</NuxtLink
      >
    </div>

    <div
      class="article-content"
      v-html="article.content"></div>

    <div class="article-footer">
      <h3>Поделиться статьей</h3>
      <!-- Кнопки для шаринга -->
    </div>
  </div>
</template>

<script setup>
import { ARTICLES_GRID_CONFIG } from '~/configs/pages/articles'

const route = useRoute()
const categorySlug = route.params.category
const articleSlug = route.params.slug

// Находим категорию и статью
const category = computed(() => {
  let foundCategory = null
  
  // Перебираем все группы карточек (буквенные группы)
  for (const letterGroup of ARTICLES_GRID_CONFIG.block_fields.cards) {
    // Ищем карточку с нужным slug в текущей группе
    const foundCard = letterGroup.cards.find(card => card.slug === categorySlug)
    if (foundCard) {
      foundCategory = foundCard
      break
    }
  }
  
  return foundCategory || { articles: [] }
})

const article = computed(() => {
  return (
    category.value.articles.find((a) => a.slug === articleSlug) || {
      title: 'Статья не найдена',
      content: 'Запрашиваемая статья не существует',
      description: 'Статья не найдена',
      date: new Date().toISOString()
    }
  )
})

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('ru-RU')
}

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

<style scoped>
.article-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 2rem;
  color: #666;
}

.article-content {
  line-height: 1.8;
}

.article-footer {
  margin-top: 3rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}
</style>
