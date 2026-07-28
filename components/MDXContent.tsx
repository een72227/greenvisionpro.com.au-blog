import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { slugify } from "@/lib/utils";
import type { ReactNode } from "react";

function textFromChildren(children: ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(textFromChildren).join("");
  return "";
}

const components = {
  h2: (props: { children?: ReactNode }) => {
    const text = textFromChildren(props.children);
    return (
      <h2 id={slugify(text)} className="scroll-mt-28">
        {props.children}
      </h2>
    );
  },
  h3: (props: { children?: ReactNode }) => {
    const text = textFromChildren(props.children);
    return (
      <h3 id={slugify(text)} className="scroll-mt-28">
        {props.children}
      </h3>
    );
  },
  img: (props: { src?: string; alt?: string }) => (
    <span className="relative my-6 block aspect-video w-full overflow-hidden rounded-xl2">
      <Image src={props.src || ""} alt={props.alt || ""} fill className="object-cover" />
    </span>
  ),
};

export default function MDXContent({ source }: { source: string }) {
  return (
    <div className="prose-article">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
