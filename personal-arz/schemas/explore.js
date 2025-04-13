export default {
    name: "explore",
    title: "Explore",
    type: "document",
    
    fields: [
        {
            name: "index",
            title: "Index",
            type: "number",
          },
      {
        name: "text",
        title: "Text",
        type: "string",
      },
      {
        name: "img",
        title: "Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
    ],

  }