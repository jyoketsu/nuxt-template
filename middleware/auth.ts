export default defineNuxtRouteMiddleware((to, from) => {
  const user = useCookie<{ name: string }>("user");
  if (!user.value) {
    console.log("Heading to", to.path, "Not logged in, redirect to /login");
    const localePath = useLocalePath();
    return localePath(`/login?redirect=${to.path}`);
  }
});
