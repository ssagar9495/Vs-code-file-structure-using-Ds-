export const directory = {
  id: 1,
  name: "root",
  isFolder: true,
  item: [
    {
      id: 2,
      name: "public",
      isFolder: true,
      item: [
        {
          id: 3,
          name: "images",
          isFolder: true,
          item: [],
        },
        {
          id: 4,
          name: "index.html",
          isFolder: false,
          item: [],
        },
      ],
    },
    {
      id: 5,
      name: "src",
      isFolder: true,
      item: [
        { id: 6, name: "app.js", isFolder: false, item: [] },
        { id: 7, name: "index.js", isFolder: false, item: [] },
      ],
    },
    {
      id: 8,
      name: "package.json",
      isFolder: false,
      item: [],
    },
  ],
};
