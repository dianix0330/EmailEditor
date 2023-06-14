/**
 * Renders the main component of the app, which displays a logo, a template, and a footer.
 *
 * @return {JSX.Element} The main component of the app.
 */
import { useState } from "react";
import { Banner, Toggle, SocialCampaign, Alert } from "./components";
import { Template } from "./container";
import { useSelector, useDispatch } from "react-redux";
import actions from "./redux/actions";
import "./styles/App.css";
import "./styles/tailwind-pre-build.css";

function App() {
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState("");
  const [saveMessage, setSaveMessage] = useState("");
  const [showAlert, setShowAlert] = useState(true);

  const bannerURL = useSelector((state) => state.frame.bannerURL);
  const showBanner = useSelector((state) => state.frame.showBanner);
  const templateComponents = useSelector((state) => state.template.components);
  const showSocialCampaign = useSelector(
    (state) => state.frame.showSocialCampaign
  );
  const disptach = useDispatch();

  const setBannerURL = (url) =>
    disptach(actions.frameActions.setBannerURL(url));

  const handleBannerToggle = () => {
    disptach(actions.frameActions.setShowBanner(!showBanner));
  };

  const handleSocialCampaignToggle = () => {
    disptach(actions.frameActions.setShowSocialCampaign(!showSocialCampaign));
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };
  const postComponentsData = (templateComponents) => {
    return templateComponents.map((componentData) => {
      const { id, component, ...rest } = componentData;
      return rest;
    });
  };
  const handleSaveTemplate = async () => {
    setIsSaving(true);
    const templateData = {
      template: {
        subject: "Welcome to your Recruitment test",
        bannerImageUrl: bannerURL,
        showSocialCampaign: showSocialCampaign,
        body: postComponentsData(templateComponents),
      },
    };
    const stringData = JSON.stringify(templateData).replace(/"/g, "'");

    const data = {
      template: stringData,
    };

    const result = await disptach(actions.createTemplate(data));

    if (result.errors) {
      setSaveStatus("error");
    } else {
      setSaveStatus("success");
    }

    setSaveMessage(result.message);
    setShowAlert(true);
    setIsSaving(false);
  };
  return (
    <main className="App bg-gray-300">
      <img src="assets/images/logo.png" className="h-20"></img>
      {showBanner && (
        <Banner bannerURL={bannerURL} setBannerURL={setBannerURL} />
      )}
      <Template />
      <div className="absolute h-48 w-64 left-0 ml-10">
        <Toggle
          label="Show Banner"
          value={showBanner}
          onToggleEvent={handleBannerToggle}
        />
        <Toggle
          label="Show Social Campaign"
          value={showSocialCampaign}
          onToggleEvent={handleSocialCampaignToggle}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSaveTemplate}
        >
          {isSaving ? "Saving..." : "Save Template"}
        </button>
        <div className={`${showAlert ? "fadeOut" : "fadeIn"} absolute`}>
          <Alert
            type={saveStatus}
            message={saveMessage}
            handleClick={handleAlertClose}
          />
        </div>
      </div>
      <hr className="border-t border-gray-500 my-6 w-1/2"></hr>
      {showSocialCampaign && <SocialCampaign />}
      <footer className="flex flex-col w-1/2 align-center p-5">
        <p className="font-poppins text-xl w-full">
          Questions or faq? Contact us at{" "}
          <a href="mailto:Support@apexnetwork.com" className="text-orange-400">
            Support@apexnetwork.com
          </a>
          . If you'd rather not receive this kind of email, Don't want any more
          emails from Apexnetwork?{" "}
          <a
            href="https://unsubscribe@apexnetwork.com"
            className="text-orange-400"
          >
            Unsubscribe
          </a>
          .
        </p>
        <div className="bg-neutral-200 p-6 text-center font-poppins">
          <span>© 2023 Copyright: </span>
          <a
            className="font-semibold text-neutral-600 dark:text-neutral-400"
            href="https://daniel-personal-website.netlify.app/"
          >
            DANIEL AYALA
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
