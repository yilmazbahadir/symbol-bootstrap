var appConfig = {
  title: 'Symbol Bootstrap Wallet',
  constants: {
    EVENTS_THROTTLING_TIME: 6000,
    MAX_LISTENER_RECONNECT_TRIES: 20,
    MAX_PASSWORD_LENGTH: 64,
    MAX_REMOTE_ACCOUNT_CHECKS: 10,
    MAX_SEED_ACCOUNTS_NUMBER: 10,
    MIN_PASSWORD_LENGTH: 8,
    SEED_ACCOUNT_NAME_PREFIX: 'SeedWallet-',
    ANNOUNCE_TRANSACTION_TIMEOUT: 240000,
    DECIMAL_SEPARATOR: Number('1.1').toLocaleString().substring(1, 2),
  },
  languages: [
    { value: 'en-US', label: 'English' },
    { value: 'zh-CN', label: '中文' },
    { value: 'ja-JP', label: '日本語' },
  ],
  marketServerUrl: 'http://app.nemcn.io',
  articlesFeedUrl: 'http://rssmix.com/u/11801188/rss.xml',
}
window.appConfig = appConfig
console.log('appConfig loaded!', appConfig)
