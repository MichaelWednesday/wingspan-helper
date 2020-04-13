import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    scoresheet: 'Scoresheet',
    playerTitle: 'Player',
    resetPoints: 'Reset points',
    pointsInputTitle: '%{scoreType} points for player %{playerNum}',
    playerTotalTitle: 'total points for player %{playerNum}',
    comingSoon: 'coming soon',
    total: 'Total',
    scoreTypes: ['Birds', 'Bonus cards', 'End-of-round goals', 'Eggs', 'Food on cards', 'Tucked cards']
  },
  de: {
    scoresheet: 'Scoresheet',
    playerTitle: 'Spieler',
    resetPoints: 'Punkte zurücksetzen',
    pointsInputTitle: 'Punkte für %{scoreType} für Spieler %{playerNum}',
    playerTotalTitle: 'Gesamtpunkte für Spieler %{playerNum}',
    comingSoon: 'kommt bald',
    total: 'Gesamt',
    scoreTypes: ['Vögel', 'Bonuskarten', 'Rundenziele', 'Eier', 'Gelagertes Futter', 'Karten unter Vögeln']
  },
  pl: {
    scoresheet: 'Karta wyników',
    playerTitle: 'Gracze',
    resetPoints: 'Kasuj punkty',
    pointsInputTitle: '%{scoreType} gracza %{playerNum}',
    playerTotalTitle: 'suma punktów dla gracza %{playerNum}',
    comingSoon: 'wkrótce',
    total: 'Suma',
    scoreTypes: ['Ptaki', 'Karty bonusowe', 'Cele', 'Jaja', 'Pożywienie na kartach', 'Karty pod inną kartą']
  }
}

export default new VueI18n({
  locale: 'pl',
  fallbackLocale: 'en',
  messages
})
