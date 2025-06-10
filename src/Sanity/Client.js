import {createClient}from "@sanity/client";
import  ImageUrlBuilder  from "@sanity/image-url";

const  client= createClient({
  projectId: "i6u9981u", // find this at manage.sanity.io or in your sanity.json
  dataset: "production",
  token:"skHOqdHfOifcz7S1x8Q0epODi5YxUUUG8d20FoGzn06aUeaKDnGaG0JNBJ4vn3UllFM5BYdFLXjUXbmp9au1ooaOrBeC5L2dRkLjXy5MPSyru4NPXdvp3x1sVnHrTcVKuLLzNv6GrZ7V9Tyipq9DsRNOKUKVoMAgQSIV8bHIvPu4bKk1ciNF"
  // this is from those question during 'sanity init'
});

const builder = ImageUrlBuilder(client);

export const  urlFor=(source)=> {
	return builder.image(source);
}

export default client;