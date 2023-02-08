const data = [
  {
    name: "file001",
    type: "file",
    ext: "txt",
    content: "Emontional damage",
  },
  {  
    name: "folder1",
    type: "folder",
    child: [
      {
        name: "file011",
        type: "file",
        ext: "txt",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        name: "file012",
        type: "file",
        ext: "txt",
        content: "Hello World! I'm new file",
      },
      {
        name: "subfolder1",
        type: "folder",
        child: [
          {
            name: "file111",
            type: "file",
            ext: "txt",
            content: "Empty data exist",
          },
          {
            name: "file112",
            type: "file",
            ext: "txt",
            content: "HELLO WORLD !!!",
          },
        ],
      },
    ],
  },
  {
    name: "folder2",
    type: "folder",
    child: [
      {
        name: "file021",
        type: "file",
        ext: "txt",
        content: "HELLO WORLD !!!",
      },
      {
        name: "file022",
        type: "file",
        ext: "txt",
        content: "Lorem Ipsum is bla bla bla",
      },
    ],
  },
];

const config = {
  controller: "./hierarchy",
  // router: "./routers",
  // pages: "./pages",
  // view: "./view",
};

module.exports = {
  data,
  config
};