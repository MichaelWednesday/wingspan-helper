import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    scoresheet: 'Scoresheet',
    playerTitle: 'Player',
    resetPoints: 'Reset points',
    pointsInputTitle: '%{scoreType} points for the %{playerColour} player',
    playerTotalTitle: 'Total points for the %{playerColour} player',
    comingSoon: 'coming soon',
    total: 'Total',
    scoreTypes: ['Birds', 'Bonus cards', 'End-of-round goals', 'Eggs', 'Food on cards', 'Tucked cards'],
    blue: 'blue',
    red: 'red',
    yellow: 'yellow',
    green: 'green',
    purple: 'purple'
  },
  de: {
    scoresheet: 'Scoresheet',
    playerTitle: 'Spieler',
    resetPoints: 'Punkte zurücksetzen',
    pointsInputTitle: 'Punkte für %{scoreType} für Spieler %{playerColour}',
    playerTotalTitle: 'Gesamtpunkte für Spieler %{playerColour}',
    comingSoon: 'kommt bald',
    total: 'Gesamt',
    scoreTypes: ['Vögel', 'Bonuskarten', 'Rundenziele', 'Eier', 'Gelagertes Futter', 'Karten unter Vögeln'],
    blue: 'blue',
    red: 'red',
    yellow: 'yellow',
    green: 'green',
    purple: 'purple'
  },
  pl: {
    scoresheet: 'Karta wyników',
    playerTitle: 'Gracze',
    resetPoints: 'Kasuj punkty',
    pointsInputTitle: '%{scoreType} gracza %{playerColour}',
    playerTotalTitle: 'Suma punktów gracza %{playerColour}',
    comingSoon: 'wkrótce',
    total: 'Suma',
    scoreTypes: ['Ptaki', 'Karty bonusowe', 'Cele', 'Jaja', 'Pożywienie na kartach', 'Karty pod inną kartą'],
    blue: 'niebieskiego',
    red: 'czerwonego',
    yellow: 'żółtego',
    green: 'zielonego',
    purple: 'fioletowego'
  }
}

export default new VueI18n({
  locale: 'pl',
  fallbackLocale: 'en',
  messages
})
