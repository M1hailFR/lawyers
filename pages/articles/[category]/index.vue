<template>
    <div>
      <h1>{{ category.title }}</h1>
      
      
      <!-- <div class="grid grid-cols-1 gap-4 mt-8">
        <div v-for="article in category.articles" :key="article.slug" class="card p-4 rounded-xl">
          <h2>{{ article.title }}</h2>
          <p>{{ article.description }}</p>
          <div class="flex justify-between items-center mt-4">
            <span>{{ formatDate(article.date) }}</span>
            <NuxtLink :to="`/articles/${category.slug}/${article.slug}`" class="btn">Читать далее</NuxtLink>
          </div>
        </div>
      </div> -->
    </div>
  </template>

<script setup>
import { ARTICLES_GRID_CONFIG } from '~/configs/pages/articles'

  const route = useRoute()
  const categorySlug = route.params.category
  
  const category = computed(() => {
    return ARTICLES_GRID_CONFIG.block_fields.cards.find(c => c.slug === categorySlug) || {
      title: 'Категория не найдена',
      description: '',
      articles: []
    }
  })
  
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('ru-RU')
  }
  </script>