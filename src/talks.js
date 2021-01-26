import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import talks from "./talks/index.json";
import { rhythm } from "./utils/typography";
import { SiteHeader } from "../components/SiteHeader";
import { buttons } from "./constants";
import "./talks.css";
import { Preview } from "../components/Preview";
import ElementQueries from "css-element-queries/src/ElementQueries";

function separateEventFromTitle(titleAndEvent) {
  const [title, event] = titleAndEvent.split("@");
  return [title, event && `@`.concat(event)];
}

class Talk extends React.Component {
  componentDidMount() {
    ElementQueries.init();
  }
  render() {
    const {
      title,
      url,
      slidesUrl,
      videoUrl,
      description,
      preview,
      type,
      audioUrl,
    } = this.props;
    const [originalTitle, event] = separateEventFromTitle(title);
    return (
      <section className="talk-head">
        <h3 className="talk-title">
          <a href={url} target="_blank" rel="nofollow">
            {originalTitle}
            {event && <small className="talk-event">{event}</small>}
          </a>
        </h3>
        {/* Audio link on mobile */}
        {type === "podcast" && (
          <a
            href={url}
            target="_blank"
            rel="nofollow"
            className="visible-mobile"
          >
            Listen to the <strong>podcast</strong> here
          </a>
        )}
        {/* Audio Player */}
        {type === "podcast" && (
          <a
            href={url}
            target="_blank"
            rel="nofollow"
            className="hidden-mobile"
          >
            <audio src={audioUrl} controls className="audio" />
          </a>
        )}
        <Preview videoUrl={videoUrl} slidesUrl={slidesUrl} title={title} />
        {/* Preview image */}
        {preview && (
          <p style={{ margin: "1em 0" }}>
            <img src={preview} />
          </p>
        )}
        {/* Description text */}
        <p style={{ margin: "1em 0", lineHeight: 2 }}>{description}</p>
      </section>
    );
  }
}

export const TalksList = ({ talks }) => {
  return (
    <div className="talks-container" style={{ position: "relative" }}>
      {Object.keys(talks)
        .reverse()
        .map((key, index) => {
          const talk = talks[key];
          return (
            <div className="talk-container" key={key}>
              <Talk {...talk} />
            </div>
          );
        })}
    </div>
  );
};

export default class Talks extends React.Component {
  render() {
    const { data } = this.props;
    const {
      avatar,
      site: { siteMetadata },
    } = data;
    const { title, description, author, social } = siteMetadata;
    return (
      <Layout title={title} description={description} isLimited={false}>
        <SiteHeader>
          <SiteHeader.Avatar
            avatar={avatar.childImageSharp.fixed}
            author={author}
          />
          <h1>{author}</h1>
          <nav style={{ marginBottom: rhythm(1) }}>
            <SiteHeader.Navbar />
          </nav>
          <div>
            <SiteHeader.Button
              href="https://twitter.com/intent/follow?original_referer=http%3A%2F%2Flocalhost%3A8000%2F&amp;amplref_src=twsrc%5Etfw&amp;screen_name=farzad_yz&amp;tw_p=followbutton"
              external={true}
              color={buttons.blue}
            >
              Follow {social.twitterHandle} on Twitter
            </SiteHeader.Button>
          </div>
        </SiteHeader>
        <TalksList talks={talks} />
      </Layout>
    );
  }
}

export const TalksQuery = graphql`
  query TalksQuery {
    avatar: file(absolutePath: { regex: "/farzadyz_new.jpg/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        author
        social {
          twitterHandle
          twitter
          github
          linkedin
          medium
          stackoverflow
        }
      }
    }
  }
`;
