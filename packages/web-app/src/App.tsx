import {
  cn,
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  HelloWorld,
} from "@my-monorepo/shared";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import "./locales/i18n";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

function App() {
  const { t } = useTranslation("app");

  const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <main className="min-h-screen bg-white p-8 flex flex-col items-center gap-4">
      <HelloWorld />
      <p className="text-xl text-gray-600">{t("summary")}</p>
      <Button
        onClick={() => {
          alert(t("button.alert"));
        }}
      >
        {t("button.click")}
      </Button>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? frameworks.find((framework) => framework.value === value)?.label
              : t("combobox.placeholder")}
            <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder={t("combobox.placeholder")} />
            <CommandList>
              <CommandEmpty>{t("combobox.noFrameworkFound")}</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <CheckIcon
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <div className="flex gap-2">
        <Button variant={"secondary"} onClick={() => changeLanguage("ko")}>
          한국어
        </Button>
        <Button variant={"secondary"} onClick={() => changeLanguage("en")}>
          English
        </Button>
      </div>
    </main>
  );
}

export default App;
