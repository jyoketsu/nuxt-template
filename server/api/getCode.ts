// This is an example of an API route that sends a code to a mobile number
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const { apiUrl } = config;
  const { mobile } = getQuery(event);

  const response = await $fetch(`${apiUrl}/mobile/send?mobile=${mobile}`);
  return response;
});
