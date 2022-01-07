import { NextPage } from "next";
import { useRef } from "react";
import { Remarkable } from "remarkable";
import { Box } from "@chakra-ui/react";
import fs from "fs/promises";
import { useRouter } from "next/router";
import { createMachine, assign } from "xstate";
import { useMachine } from "@xstate/react";
import { createMarkdownParser } from "../src/utils";

const autoCVMachine = createMachine({
  id: "autoCV",
  initial: "pending_md_render",
  states: {
    pending_md_render: {
      entry: ["renderMdToHTMLAndSave"],
      always: "waiting_for_assets",
    },
    waiting_for_assets: {
      invoke: {
        src: "listenToOnLoad",
      },
      on: {
        load_finished: "printing",
      },
    },
    printing: {
      entry: ["setPrintFileName", "printPrompt"],
      invoke: {
        src: "listenToAfterPrint",
      },
      on: {
        print_done: "done",
      },
    },
    done: {
      type: "final",
      entry: ["goBackToCVPage"],
    },
  },
});

const DownloadPage: NextPage<{ md: string }> = ({ md }) => {
  const router = useRouter();
  const printContent = useRef<HTMLDivElement>(null!);

  const [state] = useMachine(autoCVMachine, {
    context: {
      html: "",
    },
    services: {
      listenToOnLoad: () => (sendBack) => {
        let loadCount = 0;
        const foundImages = printContent.current.querySelectorAll("img");
        const imgCount = foundImages.length;

        const onSingleLoaded = () => {
          loadCount++;
          if (loadCount === imgCount) {
            sendBack({ type: "load_finished" });
          }
        };

        foundImages.forEach((img) => {
          img.addEventListener("load", onSingleLoaded);
        });

        return () => {
          foundImages.forEach((img) => {
            img.removeEventListener("load", onSingleLoaded);
          });
        };
      },
      listenToAfterPrint: () => (sendBack) => {
        const afterPrintHandler = () => {
          sendBack({ type: "print_done" });
        };
        window.addEventListener("afterprint", afterPrintHandler);
        return () => {
          window.removeEventListener("afterprint", afterPrintHandler);
        };
      },
    },
    actions: {
      setPrintFileName: () => {
        document.title = "Farzad Yousefzadeh Resume";
      },
      printPrompt: () => {
        window.print();
      },
      saveHTML: assign((_, e) => ({
        html: e.html,
      })),
      goBackToCVPage: () => {
        router.push("/cv");
      },
      renderMdToHTMLAndSave: assign(() => {
        const parser = createMarkdownParser();
        const html = parser.render(md, {});
        return {
          html,
        };
      }),
    },
  });

  return (
    <Box
      className="print-only"
      dangerouslySetInnerHTML={{ __html: state.context.html }}
      ref={printContent}
    />
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      md: (await fs.readFile("content/cv.md")).toString(),
    },
  };
};

export default DownloadPage;
