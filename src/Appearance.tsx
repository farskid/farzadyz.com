import talks from "../content/talks.json";
import {
  Link,
  Text,
  List,
  ListItem,
  Divider,
  Heading,
  Wrap,
  WrapItem,
  HStack,
  VStack,
  Box,
  HeadingProps,
} from "@chakra-ui/react";
import { useMetadata } from "./MetadataContext";
import React, { useMemo } from "react";
import { PodcastIcon, TalkIcon } from "../src/Icons";
import {
  track,
  trackPodcastLink,
  trackPodcastPlay,
  trackTalkLink,
  trackTalkSlides,
  trackTalkVideo,
} from "./analytics";

function sortTalksByLatest<T extends { year: number }>(talks: T[]): T[] {
  const groupedByYear = talks.reduce((group, talk) => {
    const talkGroup = group[talk.year] || [];
    return { ...group, [talk.year]: talkGroup.concat(talk) };
  }, {} as Record<number, T[]>);
  const backToArray = Object.values(groupedByYear)
    .map((group) => group.reverse())
    .flat();
  return backToArray.sort((a, b) => (a.year > b.year ? -1 : 0));
}

const talksToAppearances = (talks: Array<{ title: string; type: string }>) =>
  Object.values(talks)
    .map((t) => {
      return {
        ...t,
        originalTitle: t.title,
        title: t.title.split("@")[0],
        event: `@` + t.title.split("@")[1],
      };
    })
    .reduce(
      // @ts-ignore
      (appr, t) => {
        if (t.type === "talk") {
          // @ts-ignore
          return { ...appr, talks: appr.talks.concat(t) };
        } else if (t.type === "podcast") {
          // @ts-ignore
          return { ...appr, podcasts: appr.podcasts.concat(t) };
        }
      },
      { talks: [], podcasts: [] }
    );

const HeadingComponent: React.FC<{ level?: number } & HeadingProps> = ({
  level,
  children,
  ...props
}) =>
  level === 2 ? (
    <Heading {...props} fontSize="2xl">
      <strong>{children}</strong>
    </Heading>
  ) : (
    <Heading {...props} as="h3" fontSize="l">
      <strong>{children}</strong>
    </Heading>
  );

export const Appearances: React.FC<{ level?: number }> = ({ level = 2 }) => {
  const { default: metadata } = useMetadata();
  const appearances = useMemo(
    () => talksToAppearances(sortTalksByLatest(talks)),
    []
  );
  return (
    <VStack
      gridGap="5"
      alignItems="stretch"
      paddingLeft={level === 3 ? "5" : 0}
    >
      <VStack alignItems="stretch" gridGap="4">
        <HeadingComponent level={level}>Social Media</HeadingComponent>

        <Wrap gridGap="2">
          {Object.keys(metadata.social).map((social, i) => (
            <WrapItem key={i}>
              <Link
                isExternal
                className="text-capitalize"
                textDecoration="underline"
                textTransform="capitalize"
                // @ts-expect-error
                href={metadata.social[social].link}
              >
                {social}
              </Link>
            </WrapItem>
          ))}
        </Wrap>

        <Divider />
      </VStack>

      <VStack alignItems="stretch" gridGap="4">
        <HeadingComponent level={level} id="talks">
          Conference Talks and Meetups
        </HeadingComponent>

        <List listStyleType="none">
          {/* @ts-ignore */}
          {appearances.talks.map((talk, i) => {
            return (
              <ListItem key={i} marginBottom="6">
                <HStack alignItems="flex-start">
                  <TalkIcon />
                  <VStack alignItems="stretch">
                    <Heading as="h4" fontSize="md">
                      <Link
                        isExternal
                        href={talk.videoUrl || talk.slidesUrl}
                        onClick={() => {
                          trackTalkLink(talk.title);
                        }}
                      >
                        <Text>
                          <strong>{talk.title}</strong>
                        </Text>
                      </Link>
                    </Heading>

                    <Text as="small">{talk.event}</Text>

                    <HStack>
                      {talk.slidesUrl && (
                        <Link
                          isExternal
                          href={talk.slidesUrl}
                          textDecoration="underline"
                          onClick={() => {
                            trackTalkSlides(talk.title);
                          }}
                        >
                          Slides
                        </Link>
                      )}
                      {talk.videoUrl && (
                        <Link
                          isExternal
                          href={talk.videoUrl}
                          textDecoration="underline"
                          onClick={() => {
                            trackTalkVideo(talk.title);
                          }}
                        >
                          Video
                        </Link>
                      )}
                    </HStack>
                  </VStack>
                </HStack>
              </ListItem>
            );
          })}
        </List>

        <Divider />
      </VStack>

      <VStack alignItems="stretch" gridGap="4">
        <HeadingComponent level={level} id="podcasts">
          Podcasts
        </HeadingComponent>

        <List listStyleType="none">
          {/* @ts-ignore */}
          {appearances.podcasts.map((podcast, i) => {
            return (
              <ListItem key={i} marginBottom="6">
                <HStack alignItems="flex-start">
                  <PodcastIcon />
                  <VStack alignItems="stretch" flex="1">
                    <Heading as="h4" fontSize="md">
                      <Link
                        isExternal
                        href={podcast.audioUrl}
                        onClick={() => {
                          trackPodcastLink(podcast.event);
                        }}
                      >
                        <Text>
                          <strong>{podcast.title.concat(podcast.event)}</strong>
                        </Text>
                      </Link>
                    </Heading>

                    <Text>
                      {podcast.audioUrl && (
                        <Box
                          as="audio"
                          display="block"
                          width="100%"
                          onPlay={() => {
                            trackPodcastPlay(podcast.event);
                          }}
                          preload="none"
                          src={podcast.audioUrl}
                          controls
                        />
                      )}
                    </Text>
                  </VStack>
                </HStack>
              </ListItem>
            );
          })}
        </List>

        <Divider />
      </VStack>

      <VStack alignItems="stretch" gridGap="4">
        <HeadingComponent level={level}>Others</HeadingComponent>

        <List listStyleType="none">
          <ListItem className="appearance appearance-wide">
            <HStack alignItems="flex-start">
              <img
                loading="lazy"
                src="https://static.packt-cdn.com/products/9781838641443/cover/smaller"
                width="100"
                height="124"
                alt="Learn React Hooks by Daniel Bugl published by Packt publications"
              />
              <VStack alignItems="stretch">
                <Heading as="h4" fontSize="md">
                  <strong>
                    Technical reviewer of the book <em>`Learn React Hooks`</em>
                  </strong>
                </Heading>
                <Text as="small">
                  by <em>Daniel Bugl</em> published by{" "}
                  <em>Packt publications</em>
                </Text>
                <HStack>
                  <Link
                    isExternal
                    textDecoration="underline"
                    href="https://www.goodreads.com/book/show/48611191-learn-react-hooks#other_reviews"
                    onClick={() => {
                      track(
                        "https://www.goodreads.com/book/show/48611191-learn-react-hooks#other_reviews"
                      );
                    }}
                  >
                    <Text as="small">Goodreads</Text>
                  </Link>
                  <Link
                    isExternal
                    textDecoration="underline"
                    href="https://www.packtpub.com/product/learn-react-hooks/9781838641443"
                    onClick={() => {
                      track(
                        "https://www.packtpub.com/product/learn-react-hooks/9781838641443"
                      );
                    }}
                  >
                    <Text as="small">Packt</Text>
                  </Link>
                </HStack>
              </VStack>
            </HStack>
          </ListItem>
        </List>
      </VStack>
    </VStack>
  );
};
