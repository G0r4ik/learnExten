const a = {
  users: {
    1: {
      id: 1,
      email: 'egor@gmail.com',
      username: 'egor',
      date_of_registration: '11.11.2011',
      settings: {
        swapTranslation: false,
      },
      learn: {
        EN_RU: [
          {
            id: 1,
            word: 'Develop',
            tWord: 'Разработка',
            sentence: 'Develop is top',
            tSentence: 'Разработка топ',
            progress: 0,
            startLearning: '11.11.2021',
            nextShow: '12.11.2021',
          },
        ],
        RU_EN: [],
      },
    },
  },
}

const b = {
  users: {
    1: {
      id: 1,
      email: 'egor@gmail.com',
      username: 'egor',
      date_of_registration: '11.11.2011',
      settings: {
        swapTranslation: false,
      },
    },
  },
  learn: {
    EN_RU: [
      {
        id: 1,
        userId: 1,
        word: 'Develop',
        tWord: 'Разработка',
        sentence: 'Develop is top',
        tSentence: 'Разработка топ',
        progress: 0,
        startLearning: '11.11.2021',
        nextShow: '12.11.2021',
      },
    ],
    RU_EN: [],
  },
}

const c = {
  users: {
    1: {
      id: 1,
      email: 'egor@gmail.com',
      username: 'egor',
      date_of_registration: '11.11.2011',
      settings: {
        swapTranslation: false,
      },
      learn: [
        {
          id: 1,
          word: 'Develop',
          tWord: 'Разработка',
          sentence: 'Develop is top',
          tSentence: 'Разработка топ',
          progress: 0,
          startLearning: '11.11.2021',
          nextShow: '12.11.2021',
          targetLang: 'RU',
          sourceLang: 'EN',
        },
      ],
    },
  },
}
