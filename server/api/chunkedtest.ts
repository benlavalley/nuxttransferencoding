
export default defineEventHandler(async (event) => {
	try {
	  const body = await readBody(event);
	  console.log('NUXT received request with headers: ', event.headers)
	  console.log('NUXT received request httpVersion: ', event.node.req.httpVersion)
	  console.log('NUXT received request with  BODY: ', body)
	  return true;
	} catch (error: any) {
		console.log('Error in /api/test: ', error.message)
	  throw new Error('Error in /api/test: ')
	}
  });
  