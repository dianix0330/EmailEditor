const setSubject = (subject) => ({
  type: 'SET_SUBJECT',
  payload: subject
})

const setBaseURL = (baseURL) => ({
  type: 'SET_BASE_URL',
  payload: baseURL
})

const setShowBanner = (showBanner) => ({
  type: 'SET_SHOW_BANNER',
  payload: showBanner
})

const setShowSocialCampaign = (showSocialCampaign) => ({
  type: 'SET_SHOW_SOCIAL_CAMPAIGN',
  payload: showSocialCampaign
})

export default {
  setSubject,
  setBaseURL,
  setShowBanner,
  setShowSocialCampaign,
}