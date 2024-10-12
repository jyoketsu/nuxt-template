export default defineNuxtRouteMiddleware((to) => {
  console.log("Heading to", to.path, "Not logged in, redirect to /login");
  const localePath = useLocalePath();
  return localePath("/login");
});
