const initialState = {
  subject: "",
  bannerURL: "",
  showBanner: false,
  showSocialCampaign: false,
}

export default function frameSlice(state = initialState, action) {
  switch (action.type) {
    case "SET_SUBJECT":
      return { ...state, subject: action.payload };
    case "SET_BANNER_URL":
      return { ...state, bannerURL: action.payload };
    case "SET_SHOW_BANNER":
      return { ...state, showBanner: action.payload };
    case "SET_SHOW_SOCIAL_CAMPAIGN":
      return { ...state, showSocialCampaign: action.payload };
    default:
      return state;
  }
}