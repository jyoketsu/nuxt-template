export function useThemes() {
  const themeCookie = useCookie("theme-color");

  const ui = computed(() => useAppConfig()?.ui || {});
  const theme = computed(() => themeCookie.value || ui.value.primary);

  function setTheme(themeValue: string) {
    console.log("---setTheme---");
    ui.value.primary = themeValue;
    themeCookie.value = themeValue;
  }

  return {
    theme,
    setTheme,
  };
}
