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
      { title: "What is A11yBase", href: "/what-is-a11ybase" },
      { title: "What A11yBase is NOT", href: "/what-a11ybase-is-not" },
      { title: "Who A11yBase is for", href: "/who-a11ybase-is-for" },
      { title: "How to use A11yBase", href: "/how-to-use-a11ybase" },
      {
        title: "Core Heuristics",
        href: "/core-heuristics",
        noLink: true,
        items: [
          { title: "Overview", href: "/overview" },
          {
            title: "Keyboard Interaction",
            href: "/keyboard-interaction",
            noLink: true,
            items: [
              { title: "Overview", href: "/overview" },
              { title: "Question 1", href: "/question-1" },
            ],
          },
          {
            title: "Screen Reader Support",
            href: "/screen-reader-support",
            noLink: true,
            items: [{ title: "Overview", href: "/overview" }],
          },
          {
            title: "Page Structure",
            href: "/page-structure",
            items: [{ title: "Overview", href: "/overview" }],
          },
          {
            title: "Meaningful Content",
            href: "/meaningful-content",
            items: [{ title: "Overview", href: "/overview" }],
          },
          {
            title: "Readability",
            href: "/readability",
            items: [{ title: "Overview", href: "/overview" }],
          },
          {
            title: "User Quality of Life",
            href: "/user-qol",
            items: [{ title: "Overview", href: "/overview" }],
          },
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
            noLink: true,
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
      {
        title: "Developer Guide",
        href: "/developer-guide",
        noLink: true,
        items: [
          { title: "Overview", href: "/overview" },
          {
            title: "Keyboard Interaction",
            href: "/keyboard-interaction",
            noLink: true,
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
