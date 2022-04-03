// Configuration
window.Config = {

  // Site Name
  SiteName: 'Uptime Status',

  // Site URL
  SiteUrl: '/',

  // UptimeRobot Api 域名
  // Enter domain name part. default isuptimerobot.com's domain
  // Uptimerobot's api sometimes will report CROS error, you can fill in you own reverse proxy domain name
  // more details are from https://github.com/yb/uptime-status/ 
  ApiDomain: 'api.uptimerobot.com',
  
  // UptimeRobot Api Keys
  // Support both Monitor-Specific and  Read-Only type's Api Key
  ApiKeys: [
    'm791244724-b42a93574ec7c6a5ea809b73',
    'm791267304-951c351f521da117c47eab8d',
    'm791267317-9ee1c697360fb8849c0e3bb5',
    'm791267349-71f3642ebc5d2c24339b3771',
    'm791267367-293b03b00905556a16df97f4',
  ],

  // if shows monitored site's URL
  ShowLink: false,

  // Show how many days of log. 
  // API can have 90 days, although free plan says only for 60 days.
  // 60 is the free plan's number for log days. 
  CountDays: 90,

  // Navigation menu at top right. 
  Navi: [
    {
      text: 'Homepage',
      url: 'https://51sec.org/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/51sec/uptime-status'
    }
  ]
};
