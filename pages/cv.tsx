import { NextPage } from "next";
import { Layout } from "../src/Layout";
import { getAllPosts } from "../src/posts";
import { Seo } from "../src/Seo";
import cvInfo from "../content/cv.json";
import { Appearances } from "../src/Appearance";
import {
  Box,
  Button,
  Divider,
  Heading,
  Text,
  List,
  ListItem,
  Link,
  VStack,
} from "@chakra-ui/react";
import { useMemo } from "react";
import { useMetadata } from "../src/MetadataContext";
import NextLink from "next/link";

function separateByAt(str: string) {
  return str.split("@");
}

function keyToTitle(key: string) {
  return key.replace(/_/g, " ");
}

function prepareJobExperiences<T extends { title: string }>(
  experiences: T[]
): Array<T & { position: string; company: string }> {
  return experiences.map((job) => {
    const [position, company] = separateByAt(job.title);
    return {
      position,
      company,
      ...job,
    };
  });
}

const JobExperience: React.FC<{
  position: string;
  date: string;
  company: string;
}> = ({ position, date, company, children }) => (
  <Box
    as="section"
    display="flex"
    flexDirection="column"
    gridGap="3"
    className="job-experience"
  >
    <Heading as="h3" fontSize="l">
      <strong>
        {position} {company && `at ${company}`}
      </strong>
      <Box as="small" marginTop="1" display="block">
        {date}
      </Box>
    </Heading>
    {children}
    <Divider />
  </Box>
);

const CVSection: React.FC<{ title: string; textArray?: string[] }> = ({
  title,
  textArray = [],
  children,
}) => (
  <Box
    as="section"
    display="flex"
    flexDirection="column"
    gridGap="7"
    className="cv-section"
  >
    <Heading fontSize="2xl" style={{ textTransform: "capitalize" }}>
      <strong>{title}</strong>
    </Heading>
    {textArray.map((t, i) => (
      <Text key={i}>{t}</Text>
    ))}
    {children}
  </Box>
);

const CV: NextPage = () => {
  const { skills, my_technologies, education } = cvInfo;

  const jobExperiences = useMemo(
    () => prepareJobExperiences(cvInfo.jobExperiences),
    []
  );

  const { default: metadata } = useMetadata();

  return (
    <>
      <Seo title={(defaultTitle) => `CV | ${defaultTitle}`} />
      <Layout>
        <Box display="flex" flexDirection="column" gridGap="5">
          <Box>
            <NextLink passHref href="/cvdownload">
              <Link
                as={Button}
                color="white"
                bg="gray.900"
                _hover={{ bg: "gray.700" }}
                _focus={{ bg: "gray.700" }}
              >
                Download My Latest CV
              </Link>
            </NextLink>
          </Box>

          <Divider />

          <CVSection title="my technologies">
            <Text>{my_technologies.join(" , ")}</Text>
          </CVSection>

          <Divider />

          <CVSection title="skills">
            <Box display="flex" flexDirection="column" gridGap="7">
              {Object.keys(skills).map((skill, i) => (
                <Box display="flex" flexDirection="column" gridGap="2" key={i}>
                  <Heading as="h3" textTransform="capitalize" fontSize="l">
                    <strong>{keyToTitle(skill)}</strong>
                  </Heading>
                  <Text style={{ marginTop: 0 }}>
                    {skills[skill].join(" , ")}
                  </Text>
                </Box>
              ))}
            </Box>
          </CVSection>

          <Divider />

          <CVSection title="education">
            <Box>
              {education.map((edu) => (
                <Text key={edu}>{edu}</Text>
              ))}
            </Box>
          </CVSection>

          <Divider />

          <CVSection title="professional experiences">
            <List
              listStyleType="none"
              paddingLeft="4"
              display="flex"
              flexDirection="column"
              gridGap="5"
              className="job-list"
            >
              {jobExperiences.map((job, i) => (
                <ListItem key={i}>
                  <JobExperience
                    position={job.position}
                    company={job.company}
                    date={job.date}
                  >
                    {job.description}
                  </JobExperience>
                </ListItem>
              ))}
            </List>
          </CVSection>

          <CVSection title="appearances">
            <Appearances level={3} />
          </CVSection>
          <Divider />

          <CVSection title="Community contributions and Open Source">
            <VStack alignItems="flex-start" fontSize="md">
              <Box>
                <Heading as="h3" fontSize="l">
                  Long time StackOverflow contributor{" "}
                  <small
                    style={{
                      whiteSpace: "nowrap",
                      paddingLeft: "1rem",
                      fontWeight: "normal",
                    }}
                  >
                    {/* TODO: Have it as a build script that's written to the disk */}
                    {/* with a reputation of: {metadata.stackoverflowReputation} */}
                  </small>
                </Heading>
              </Box>
              <Box>
                For <abbr title="Open Source Software">OSS</abbr> contributions,
                checkout my{" "}
                <Link
                  textDecoration="underline"
                  isExternal
                  href={metadata.social.github.link}
                  whiteSpace="nowrap"
                >
                  GitHub Profile
                </Link>
              </Box>
            </VStack>
          </CVSection>
        </Box>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
};

export default CV;
