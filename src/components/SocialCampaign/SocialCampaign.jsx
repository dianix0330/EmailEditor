export default function SocialCampaign() {
  return (
    <div className="flex flex-col w-1/2 align-center p-5">
      <div className="flex flex-row w-1/2 item-center pb-5">
        <img
          src="assets/images/twitter.png"
          alt="Twitter"
          className="h-10 w-10 mr-5"
        />
        <img
          src="assets/images/facebook.png"
          alt="Facebook"
          className="h-10 w-10 mr-5"
        />
        <img
          src="assets/images/linkedin.png"
          alt="LinkedIn"
          className="h-10 w-10 mr-5"
        />
        <img
          src="assets/images/camera.png"
          alt="Camera"
          className="h-10 w-10 mr-5"
        />
      </div>
      <p className="font-poppins text-xl w-full">
        Get the most of Apex network by installing our mobile app. You can log
        in by using your existing emails address and password.
      </p>
      <div className="w-full flex flex-row mt-5 mb-5">
        <div className="flex flex-row rounded-xl h-12 w-44 p-4 border border-solid border-black rounded-xl items-center z-5 cursor-pointer justify-center mr-5">
          <img src="assets/images/Apple.png" className="h-8 w-8 mr-2" />
          <div className="flex flex-col">
            <p className="text-xs">Get it on</p>
            <p className="text-base font-bold">App Store</p>
          </div>
        </div>
        <div className="flex flex-row rounded-xl h-12 w-44 p-4 border border-solid border-black rounded-xl items-center z-5 cursor-pointer justify-center mr-5">
          <img src="assets/images/Google.png" className="h-8 w-8 mr-2" />
          <div className="flex flex-col">
            <p className="text-xs">Get it on</p>
            <p className="text-base font-bold">Google Play</p>
          </div>
        </div>
      </div>
    </div>
  );
}
