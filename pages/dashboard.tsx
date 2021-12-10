import {
  Wrap,
  Switch,
  Table,
  Tbody,
  Td,
  Tr,
  Th,
  Thead,
  Link as ChakraLink,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import { Layout } from "../src/Layout";
import { getAllPosts } from "../src/posts";
import { Post } from "../src/types";
import Link from "next/link";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { formatDate } from "../src/utils";
import { createMachine, assign, send as globalSend } from "xstate";
import { asEffect, useMachine, useSelector } from "@xstate/react";
import { useKey } from "../src/useKey";
import { ReactNode, useEffect, useRef } from "react";

const editableFieldMachine = createMachine({
  id: "editableField",
  initial: "visual",
  on: {
    set_input_element: {
      actions: [
        assign({
          inputElement: (_, e) => e.inputElement,
        }),
      ],
    },
  },
  states: {
    visual: {
      on: {
        edit: "edit",
      },
    },
    edit: {
      initial: "preparing",
      on: {
        is_ready: ".ready",
      },
      states: {
        preparing: {
          // A hack to work around coditional rendering
          entry: [globalSend({ type: "is_ready" }, { delay: 100 })],
        },
        ready: {
          entry: ["focusInput"],
          on: {
            update_tmp_value: {
              actions: ["updateTmpValue"],
            },
            commit_edit: {
              actions: ["commitTmpValue"],
              target: "#editableField.visual",
            },
            cancel_edit: {
              actions: ["clearTmpValue"],
              target: "#editableField.visual",
            },
          },
        },
      },
    },
  },
});

interface EditableFieldProps {
  initialValue?: string;
  children: ({ value }: { value: string }) => ReactNode;
}

const EditableField: React.FC<EditableFieldProps> = ({
  initialValue,
  children,
}) => {
  const inputRef = useRef<HTMLInputElement>(null!);
  const [state, send, service] = useMachine(
    editableFieldMachine.withContext({
      inputRef,
    }),
    {
      context: { value: initialValue, getInputElement: () => inputRef.current },
      actions: {
        updateTmpValue: assign({
          tmpValue: (_, e) => e.tmpValue,
        }),
        commitTmpValue: assign({
          value: (ctx) => ctx.tmpValue,
        }),
        focusInput: (ctx) => {
          ctx.inputRef.current.focus();
        },
      },
    }
  );
  const value = useSelector(service, (state) => state.context.value);
  useKey("Escape", () => {
    send({ type: "cancel_edit" });
  });

  return state.matches("visual") ? (
    <Box
      onDoubleClick={() => {
        send({ type: "edit" });
      }}
    >
      {children({ value })}
    </Box>
  ) : (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        send({ type: "commit_edit" });
      }}
    >
      <FormControl>
        <Input
          ref={inputRef}
          defaultValue={value}
          onChange={(e) => {
            send({ type: "update_tmp_value", tmpValue: e.target.value });
          }}
        />
      </FormControl>
    </form>
  );
};

const Dashboard: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Layout isExtended>
      <Table variant="simple" fontSize="1rem">
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Draft</Th>
            <Th>Published At</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {posts.map((p) => (
            <Tr key={p.slug}>
              <Td>
                <EditableField initialValue={p.title}>
                  {({ value }) => (
                    <Box as="p" marginBottom="2" fontSize="1.2em">
                      <strong>{value}</strong>
                    </Box>
                  )}
                </EditableField>
                <Link href={`/blog/${p.slug}`} passHref>
                  <ChakraLink textDecoration="underline">{p.slug}</ChakraLink>
                </Link>
              </Td>
              <Td>
                <Switch
                  defaultChecked={p.draft}
                  onChange={(e) => {}}
                  id={p.slug}
                />
              </Td>
              <Td>{formatDate(p.publishedAt)}</Td>
              <Td>
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Publish
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Farzadyz.com</MenuItem>
                    <MenuDivider />
                    <MenuItem>Dev.to</MenuItem>
                    <MenuDivider />
                    <MenuItem>Twitter thread</MenuItem>
                    <MenuDivider />
                    <MenuItem>Medium.com</MenuItem>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getAllPosts();
  return {
    props: { posts },
  };
};

export default Dashboard;
