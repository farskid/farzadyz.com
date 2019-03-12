import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import talks from "../talks/index.json";
import { rhythm } from "../utils/typography";
import { SiteHeader } from "../components/SiteHeader";
import { buttons } from "../constants";

class Talk extends React.Component {
  state = { pending: true, iframeHeight: 0 };
  componentDidMount() {
    setTimeout(() => {
      if (this.iframeWrapper && this.iframe) {
        const h = this.iframeWrapper.clientHeight;
        this.setState({ pending: false, iframeHeight: h });
      }
    }, 0);
  }
  render() {
    const { pending, iframeHeight } = this.state;
    const { title, url, embed, description } = this.props;
    return (
      <section
        style={{
          marginBottom: rhythm(2),
          marginTop: rhythm(2),
          border: "1px solid #eee",
          padding: `${rhythm(1)} ${rhythm(1)} 0`,
          borderRadius: rhythm(0.25),
          boxShadow: "rgb(238, 238, 238) 0px 0px 20px 2px"
        }}
      >
        <h3>
          <a
            href={url}
            target="_blank"
            style={{
              marginBottom: embed ? rhythm(1) : 0,
              display: "block"
            }}
          >
            {title}
          </a>
        </h3>
        <p>{description}</p>
        {embed ? (
          <a
            href={embed}
            target="_blank"
            className="visible-mobile"
            style={{ marginBottom: rhythm(1), display: "block" }}
          >
            Watch the talk on Youtube
          </a>
        ) : null}
        {embed ? (
          <div
            className="hidden-mobile hidden-print"
            style={{
              height: 0,
              paddingBottom: "56.25%",
              backgroundColor: "#eee",
              position: "relative",
              margin: `0 -${rhythm(1)}`
            }}
            ref={node => (this.iframeWrapper = node)}
          >
            <iframe
              src={embed}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                display: "block",
                width: "100%",
                height: iframeHeight,
                borderRadius: rhythm(0.25)
              }}
              ref={node => (this.iframe = node)}
            />
            {pending ? (
              <p
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)"
                }}
              >
                Loading talk video
              </p>
            ) : null}
          </div>
        ) : null}
      </section>
    );
  }
}

export const TalksList = ({ talks }) => {
  return Object.keys(talks)
    .reverse()
    .map((key, index) => {
      const talk = talks[key];
      return (
        <Talk
          key={index}
          title={talk.title}
          url={talk.url}
          embed={talk.embed}
          description={talk.description}
        />
      );
    });
};

export default class Talks extends React.Component {
  render() {
    const { data } = this.props;
    const {
      avatar,
      site: { siteMetadata }
    } = data;
    const { title, description, author, social } = siteMetadata;
    return (
      <Layout title={title} description={description}>
        <SiteHeader siteMetadata={siteMetadata} author={author} avatar={avatar}>
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
              href="mailto:farskid@gmail.com?subject=We'd like to hire you as a consultant"
              color={buttons.black}
            >
              Hire Me as a Consultant
            </SiteHeader.Button>
            <SiteHeader.Button
              href="mailto:farskid@gmail.com?subject=We'd like to hire you to give a talk for us"
              color={buttons.green}
            >
              Hire Me to give a Talk
            </SiteHeader.Button>
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
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
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
