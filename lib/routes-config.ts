// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      {
        title: "Core Heuristics",
        href: "/core-heuristics",
        items: [
          {
            title: "Keyboard Interaction",
            href: "/keyboard-interaction",
            items: [{ title: "Question 1", href: "/question-1" }],
          },
          { title: "Screen Reader Support", href: "/screen-reader-support" },
          { title: "Page Structure", href: "/page-structure" },
          { title: "Meaningful Content", href: "/meaningful-content" },
          { title: "Readability", href: "/readability" },
          { title: "User Quality of Life", href: "/user-quality-of-life" },
        ],
      },
    ],
  },
  {
    title: "Design Principals",
    href: "/design-principals",
    noLink: true,
    items: [{ title: "Overview", href: "/overview" }],
  },
  {
    title: "Visual Foundation",
    href: "/visual-foundation",
    noLink: true,
    items: [{ title: "Overview", href: "/overview" }],
  },
  {
    title: "Components",
    href: "/compnennts",
    noLink: true,
    items: [{ title: "Overview", href: "/overview" }],
  },
  {
    title: "Guides",
    href: "/guides",
    noLink: true,
    items: [
      { title: "Overview", href: "/overview" },
      {
        title: "Design Guide",
        href: "/design-guide",
        noLink: true,
        items: [
          { title: "Overview", href: "/overview" },
          {
            title: "Keyboard Interaction",
            href: "/keyboard-interaction",
            items: [
              { title: "Overview", href: "/overview" },
              {
                title: "Question 1",
                href: "/question-1",
              },
            ],
          },
        ],
      },
      { title: "Developer Guide", href: "/developer-guide" },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
