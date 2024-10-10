export default defineNuxtRouteMiddleware(() => {
  console.log("running global middleware");
  const isOpen = useState<boolean>("isOpen");
  if (isOpen.value) {
    isOpen.value = false;
  }
});
