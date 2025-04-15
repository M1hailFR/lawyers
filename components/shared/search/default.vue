<template>
  <div class="mb-8">
    <VInput
      v-model="search"
      :placeholder="settings.placeholder"
      clearable
      class="text-sm" />
    <div
      v-if="settings.tags"
      class="flex items-center gap-2 flex-wrap max-h-[150px] mt-2 overflow-y-auto scroll">
      <VButton
        v-for="tag in settings.tags"
        :key="tag"
        size="small"
        :type="
          selectedTags.has(tag.title.toLowerCase().replace(/\s+/g, ''))
            ? 'flat'
            : 'outline'
        "
        class="text-sm flex items-center gap-1"
        @click="toggleTag(tag)">
        <VIcon :name="tag.icon" />
        <VTitle
          :title="tag.title"
          defaultClass="caption pr-2" />
      </VButton>
    </div>
  </div>
</template>

<script setup>
import { VInput, VButton, VIcon, VTitle } from '~/components/ui'

defineOptions({
  name: 'SharedSearchDefault',
})

const props = defineProps({
  settings: {
    type: Object,
    default: () => ({}),
  },
})

const emit = defineEmits(['update'])

const search = ref('')
const selectedTags = ref(new Map())

const toggleTag = (tag) => {
  const tagId = tag.title.toLowerCase().replace(/\s+/g, '')
  selectedTags.value.has(tagId)
    ? selectedTags.value.delete(tagId)
    : selectedTags.value.set(tagId, { ...tag, id: tagId })
}

const computedCards = computed(() => {
  let filteredCards = props.settings.cards

  const searchValue = search.value?.toLowerCase() || ''
  const selectedTagsSet = new Set(Array.from(selectedTags.value.keys()))

  return filteredCards
    .map((card) => {
      const matchesSearch =
        !searchValue ||
        props.settings.fieldsForSearch.some((field) =>
          card[field]?.toLowerCase().includes(searchValue),
        )

      if (!matchesSearch) return null

      if (selectedTagsSet.size > 0) {
        if (!card?.tags?.length) return null

        const matches = card.tags.reduce((count, cardTag) => {
          const normalizedCardTag = cardTag.toLowerCase().replace(/\s+/g, '')
          return count + (selectedTagsSet.has(normalizedCardTag) ? 1 : 0)
        }, 0)

        return matches > 0 ? { card, matches } : null
      }

      return { card, matches: 0 }
    })
    .filter(Boolean)
    .sort((a, b) => b.matches - a.matches)
    .map((item) => item.card)
})

const update = () => {
  emit('update', computedCards.value)
}

watch(
  computedCards,
  () => {
    update()
  },
  { deep: true },
)

onMounted(() => {
  update()
})
</script>

<style lang="scss" scoped>
.scroll {
  &::-webkit-scrollbar {
    @apply bg-transparent w-1 rounded-lg;
  }
  &::-webkit-scrollbar-track {
    @apply bg-transparent;
  }
}
</style>
