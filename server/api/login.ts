// this is a sample code for login api
const config = useRuntimeConfig();
const { apiUrl } = config;

export default defineEventHandler(async (event) => {
  // 确保是 POST 请求
  if (event.node.req.method !== "POST") {
    return {
      status: 405,
      message: "Method Not Allowed",
    };
  }

  // 解析请求体
  const body = await readBody(event);

  const response = await $fetch(`${apiUrl}/terminalUser/login`, {
    method: "POST",
    body,
  });
  return response;
});
