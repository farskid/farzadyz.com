import { getActivePreview } from "../Preview";

describe("getActivePreview", () => {
  it("should return undefined when videoUrl and slidesUrl are both empty", () => {
    expect(getActivePreview({ videoUrl: "", slidesUrl: "" })).toBe(undefined);
  });
  it("should return videoUrl when only videoUrl is provided", () => {
    expect(getActivePreview({ videoUrl: "test", slidesUrl: "" })).toEqual({
      type: "video",
      url: "test"
    });
  });
  it("should return slidesUrl when only slidesUrl is provided", () => {
    expect(getActivePreview({ videoUrl: "", slidesUrl: "test" })).toEqual({
      type: "slides",
      url: "test"
    });
  });
  it("should return videoUrl when both videoUrl and slidesUrl are provided", () => {
    expect(
      getActivePreview({ videoUrl: "testVideo", slidesUrl: "testSlides" })
    ).toEqual({
      type: "video",
      url: "testVideo"
    });
  });
});
