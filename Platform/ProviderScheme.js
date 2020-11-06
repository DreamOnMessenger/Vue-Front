export default class ProviderScheme {
  getLoginInfo() {}

  getSignupInfo() {}

  login() {}
  signup() {}
  logout() {}

  loadMessages() {}
  loadChatMessages(_chatId) {}
  loadChats() {}
  search(_query, _chatId) {}

  getSettingData() {}
  updateSetting(_setting) {}

  getChatSettingData(_chatId) {}
  updateChatSetting(_chatId, _setting) {}

  createChat(_data) {}

  getMessageActions(_messageId) {}
  doMessageAction(_messageId, _actionId, _data) {}

  getChatActions(_chatId) {}
  doChatAction(_chatId, _actionId, _data) {}
}
