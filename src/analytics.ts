import splitbee from "@splitbee/web";

export const track = (href: string) => {
  splitbee.track("click_link", { href });
};

export const trackTwitterFollow = () => {
  splitbee.track("twitter_follow");
};

export const trackCVDownload = () => {
  splitbee.track("cv_download");
};

export const trackPodcastLink = (title: string) => {
  splitbee.track("podcast_link", { title });
};

export const trackPodcastPlay = (title: string) => {
  splitbee.track("podcast_play", { title });
};

export const trackTalkLink = (title: string) => {
  splitbee.track("talk_link", { title });
};

export const trackTalkSlides = (title: string) => {
  splitbee.track("talk_slides", { title });
};

export const trackTalkVideo = (title: string) => {
  splitbee.track("talk_video", { title });
};
