chrome.storage.local.get('email', data => (email.value = data.email))

getCode.addEventListener('click', () => {
  chrome.storage.local.set({ email: email.value })
  // send
})
login.addEventListener('click', () => {})
