<template>
  <div class="container">
    <VVerticalPadding
      :desktop-padding="ARTICLES_CATEGORY_GRID_CONFIG.desktopPadding"
      :mobile-padding="ARTICLES_CATEGORY_GRID_CONFIG.mobilePadding">
      <BlockGridWithCards :fields="CONFIG" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="MAIN_REFERENCE_GRID_CONFIG.desktopPadding"
      :mobile-padding="MAIN_REFERENCE_GRID_CONFIG.mobilePadding">
      <BlockGridWithCards :fields="MAIN_REFERENCE_GRID_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="MAIN_PHONE_BANNER2_CONFIG.desktopPadding"
      :mobile-padding="MAIN_PHONE_BANNER2_CONFIG.mobilePadding">
      <BlockBannerDefault :fields="MAIN_PHONE_BANNER2_CONFIG.block_fields" />
    </VVerticalPadding>
  </div>
</template>

<script setup>
import { VVerticalPadding } from '~/components/ui'
import { ARTICLES_CATEGORY_GRID_CONFIG } from '~/configs/pages/articles'
import {
  MAIN_PHONE_BANNER2_CONFIG,
  MAIN_REFERENCE_GRID_CONFIG,
} from '~/configs/pages/main'

import {
  BlockBannerDefault,
  BlockGridWithCards,
  BlockFormCallback,
} from '~/components/blocks'

const route = useRoute()
const categorySlug = route.params.category

const CONFIG = computed(() => {
  let foundCategory = null

  for (const letterGroup of ARTICLES_CATEGORY_GRID_CONFIG.block_fields.cards) {
    const foundCard = letterGroup.cards.find(
      (card) => card.slug === categorySlug,
    )
    if (foundCard) {
      foundCategory = foundCard
      break
    }
  }

  if (!foundCategory || !foundCategory.articles) {
    return {
      ...ARTICLES_CATEGORY_GRID_CONFIG.block_fields,
      cards: [],
    }
  }

  // const articleCards = foundCategory.articles.map((article) => ({
  //   slug: article.slug,
  //   title: article.title,
  //   text: article.description || '',
  //   image: foundCategory.image || '/images/pages/main/management.png',
  //   cardVariant: 'outline',
  //   link: `/articles/${categorySlug}/${article.slug}`,
  //   date: article.date,
  // }))

  return {
    ...ARTICLES_CATEGORY_GRID_CONFIG.block_fields,
    cards: foundCategory.articles,
  }
})
</script>
