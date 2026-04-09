import SlideLayout from "../SlideLayout";

const steps = [
  "Choosing an existing voiceover clip from the @christophermarleystudio Instagram page, where he talks about the deep meaning of the pieces or shares facts about some of the specimens.",
  'Copy the Instagram post link into Publer.com, and download using the "photo and video downloader".',
  "Upload the file from Publer into CapCut — our primary platform used for content editing.",
  'Replace videos from our pool of content of the exhibit in the "SEATTLE" Google Drive folder, keeping the voiceover audio, edit and add effects/captions.',
  "Choose royalty-free instrumentals to play in the background of the voiceover.",
  'Once satisfied, CapCut allows you to easily post your edited video to TikTok by selecting "Export", then "Upload to TikTok".',
  "Add a caption pertaining to the video, add appropriate and engaging hashtags, then post or schedule the video.",
];

const Slide17CreationProcess = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-14">
      <h2 className="text-[44px] font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
        Content Creation Process
      </h2>
      <p className="text-[22px] mb-4" style={{ color: "#D4A853" }}>Voiceover Informational Short Video</p>
      <div className="rounded-xl px-8 py-4 mb-6" style={{ background: "rgba(0,168,150,0.05)", border: "1px solid rgba(0,168,150,0.15)" }}>
        <p className="text-[19px] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
          Voiceover style informational videos are most popular on our page because users can discuss the video topic in the comments, gaining more views and traction.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-x-10 gap-y-4 flex-1">
        {steps.map((s, i) => (
          <div key={i} className="flex gap-4 items-start rounded-xl px-5 py-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <span className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[16px] font-bold mt-0.5" style={{ background: "rgba(0,168,150,0.2)", color: "#00A896" }}>
              {i + 1}
            </span>
            <span className="text-[18px] leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide17CreationProcess;
