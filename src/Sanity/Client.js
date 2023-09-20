import {createClient}from "@sanity/client";
import  ImageUrlBuilder  from "@sanity/image-url";

const  client= createClient({
  projectId: "i6u9981u", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
});

const builder = ImageUrlBuilder(client);

export const  urlFor=(source)=> {
	return builder.image(source);
}

export default client;