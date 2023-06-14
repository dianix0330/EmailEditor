const setSubject = (subject) => ({
  type: 'SET_SUBJECT',
  payload: subject
})

const setBannerURL = (baseURL) => ({
  type: 'SET_BANNER_URL',
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
  setBannerURL,
  setShowBanner,
  setShowSocialCampaign,
}