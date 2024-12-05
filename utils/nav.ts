export interface Nav {
  title: string;
  path: string;
  exactActive?: boolean;
  subLinks?: Nav[];
}
export const getNavs: () => Nav[] = () => {
  return [
    {
      title: "pages.home",
      path: "/",
      exactActive: true,
    },
    { title: "pages.docs", path: "/docs" },
    {
      title: "pages.page1",
      path: "/page1",
      subLinks: [
        { title: "page1.nav.index", path: "/page1", exactActive: true },
        { title: "page1.nav.childPage", path: "/page1/child" },
        { title: "page1.nav.keyedPage", path: "/page1/12" },
        { title: "page1.nav.anchor", path: "/page1/anchor" },
        { title: "page1.nav.amap", path: "/page1/amap" },
      ],
    },
    { title: "pages.page3", path: "/page3" },
    { title: "pages.page4", path: "/page4" },
  ];
};
