export const setSubject = (subject) => ({
  type: 'SET_SUBJECT',
  payload: subject
})

export const setBaseURL = (baseURL) => ({
  type: 'SET_BASE_URL',
  payload: baseURL
})

export const setShowBanner = (showBanner) => ({
  type: 'SET_SHOW_BANNER',
  payload: showBanner
})

export const setShowSocialCampaign = (showSocialCampaign) => ({
  type: 'SET_SHOW_SOCIAL_CAMPAIGN',
  payload: showSocialCampaign
})

export const addComponent = (templateID, component) => ({
  type: 'ADD_COMPONENT',
  payload: {
    templateID,
    component
  },
})