export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "618057c1178d8d172bdd026b",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-content-sync-studio",
                  apiId: "60ff1343-d880-4bee-9322-a51f96fb2252",
                },
                {
                  buildHookId: "618057c149793614098b1135",
                  title: "Blog Website",
                  name: "sanity-gatsby-content-sync",
                  apiId: "b2031eb6-10f9-4818-985a-787553e21fbe",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/pvorozhe/sanity-gatsby-content-sync",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-content-sync.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
