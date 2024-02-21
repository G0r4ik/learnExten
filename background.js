// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// When you specify "type": "module" in the manifest background,
// you can include the service worker as an ES Module,
import { tldLocales } from './locales.js'

// Add a listener to create the initial context menu items,
// context menu items only need to be created at runtime.onInstalled
chrome.runtime.onInstalled.addListener(async () => {
  chrome.contextMenus.create({
    id: '1',
    title: 'Добавить слово в словарь',
    type: 'normal',
    contexts: [
      // 'page',
      'selection',
      'editable',
    ],
  })
  chrome.contextMenus.create({
    id: '2',
    title: 'Что то еще',
    type: 'normal',
    contexts: [
      // 'page',
      'selection',
      'editable',
    ],
  })
})

// Open a new search tab when the user clicks a context menu
chrome.contextMenus.onClicked.addListener((item, tab) => {
  console.log(item)
  console.log(item.selectionText)
  console.log(tab)
  // const tld = item.menuItemId
  // const url = new URL(`https://google.${tld}/search`)
  // url.searchParams.set('q', item.selectionText)
  // chrome.tabs.create({ url: url.href, index: tab.index + 1 })
})

// Add or removes the locale from context menu
// when the user checks or unchecks the locale in the popup
chrome.storage.onChanged.addListener(({ enabledTlds }) => {
  if (typeof enabledTlds === 'undefined') return

  const allTlds = Object.keys(tldLocales)
  const currentTlds = new Set(enabledTlds.newValue)
  const oldTlds = new Set(enabledTlds.oldValue ?? allTlds)
  const changes = allTlds.map(tld => ({
    tld,
    added: currentTlds.has(tld) && !oldTlds.has(tld),
    removed: !currentTlds.has(tld) && oldTlds.has(tld),
  }))

  for (const { tld, added, removed } of changes) {
    if (added) {
      chrome.contextMenus.create({
        id: tld,
        title: tldLocales[tld],
        type: 'normal',
        contexts: ['selection'],
      })
    } else if (removed) {
      chrome.contextMenus.remove(tld)
    }
  }
})

/*


только англицский учим

words {
  id: 1
  word: Developer,
  translate: Разработчик,  
}

users_words {
  id_user 1
  id_word 1
}
  
progress: {
  id: 1
  id_user: 1
  word_id: 1,
  progress_count: 0
  next_show: 26.12.2024
}



---



sentenses {
  id 1
  sentense: Developer sleep
  sentenseTranwlate: Разраб спит
}

Пользователь создает\входит в аккаунт и выбирает язык

Если слова в db нет, то добавляем его в words
Если слово было в db, то 


*/
