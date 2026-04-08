import SlideLayout from "../SlideLayout";
import capcut1 from "@/assets/slides/capcut-1.jpg";
import capcut2 from "@/assets/slides/capcut-2.jpg";

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
    <div className="flex h-full px-20 py-16 gap-10">
      <div className="flex-1 flex flex-col">
        <h2 className="text-[40px] font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
          Content Creation Process
        </h2>
        <p className="text-[20px] mb-6" style={{ color: "#D4A853" }}>Voiceover Informational Short Video</p>
        <p className="text-[17px] mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
          Voiceover style informational videos are most popular on our page because users can discuss the video topic in the comments, gaining more views and traction.
        </p>
        <ol className="space-y-3 flex-1">
          {steps.map((s, i) => (
            <li key={i} className="flex gap-3 text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
              <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[13px] font-bold" style={{ background: "rgba(0,168,150,0.2)", color: "#00A896" }}>
                {i + 1}
              </span>
              <span>{s}</span>
            </li>
          ))}
        </ol>
      </div>
      <div className="w-[520px] flex flex-col gap-4 justify-center">
        <div className="rounded-xl overflow-hidden border" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <img src={capcut1} alt="CapCut editing process" className="w-full h-auto" />
        </div>
        <div className="rounded-xl overflow-hidden border" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <img src={capcut2} alt="CapCut editing timeline" className="w-full h-auto" />
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide17CreationProcess;
