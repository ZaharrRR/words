import { defineStore } from 'pinia'

interface Word {
  position: number
  cells: Cell[]
}

interface Cell {
  letter: string
  status: '' | 'partially' | 'absent' | 'exactly'
}

interface State {
  word: string
  wordsArr: Word[]

  currentPosition: number
  maxPosition: number

  isWin: boolean
  isDefeat: boolean
}

export const useGameStore = defineStore('gameStore', {
  state: (): State => ({
    word: '',
    wordsArr: [],

    currentPosition: 1,
    maxPosition: 5,

    isWin: false,
    isDefeat: false
  }),

  getters: {},

  actions: {
    setWord(word: string) {
      this.word = word
    },

    checkWord(tryWord: string) {
      const wordLetters = this.word.split('')
      const tryWordLetters = tryWord.split('')

      for (let i = 0; i < 5; i++) {
        if (wordLetters[i] === tryWordLetters[i]) {
          this.wordsArr[this.currentPosition - 1].cells[i].status = 'exactly'
        } else if (wordLetters.includes(tryWordLetters[i])) {
          this.wordsArr[this.currentPosition - 1].cells[i].status = 'partially'
        } else {
          this.wordsArr[this.currentPosition - 1].cells[i].status = 'absent'
        }
        this.wordsArr[this.currentPosition - 1].cells[i].letter = tryWordLetters[i]
      }

      this.currentPosition++

      this.checkGame()
    },

    checkGame() {
      const lastWord = this.wordsArr[this.currentPosition - 2]
      const isWin = lastWord.cells.every((cell) => cell.status === 'exactly')

      if (isWin) {
        this.isWin = true
      } else if (this.currentPosition === this.maxPosition + 1) {
        this.isDefeat = true
      } else return
    },

    geterateWordsArr() {
      this.wordsArr = []
      for (let i = 0; i < 5; i++) {
        this.wordsArr.push({
          position: i + 1,
          cells: [
            {
              letter: '',
              status: ''
            },
            {
              letter: '',
              status: ''
            },
            {
              letter: '',
              status: ''
            },
            {
              letter: '',
              status: ''
            },
            {
              letter: '',
              status: ''
            }
          ]
        })
      }
    }
  }
})
