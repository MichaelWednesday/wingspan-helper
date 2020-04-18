<template>
  <div>
        <button
          v-for="l in languages"
          :key="l"
          :class="{ active: (l === currentLanguage) }"
          @click="toggleLanguage(l)">
          {{ l }}
        </button>
        <span>{{ $t('language') }}</span>
      </div>
</template>

<script>
export default {
  name: 'LanguageChooser',
  data () {
    return {
      languages: ['en', 'de', 'pl']
    }
  },
  computed: {
    currentLanguage () {
      return this.$store.state.language
    }
  },
  methods: {
    toggleLanguage (newLang) {
      this.$store.dispatch('toggleLanguage', newLang)
    }
  }
}
</script>

<style>

</style>
