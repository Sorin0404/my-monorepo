import {
  HelloWorld,
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
} from "@my-monorepo/shared";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";

import { useState } from "react";

function App() {
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
    {
      value: "next.js1",
      label: "Next.js1",
    },
    {
      value: "sveltekit1",
      label: "SvelteKit1",
    },
    {
      value: "nuxt.js1",
      label: "Nuxt.js1",
    },
    {
      value: "remix1",
      label: "Remix1",
    },
    {
      value: "astro1",
      label: "Astro1",
    },
    {
      value: "next.js2",
      label: "Next.js2",
    },
    {
      value: "sveltekit2",
      label: "SvelteKit2",
    },
    {
      value: "nuxt.js2",
      label: "Nuxt.js2",
    },
    {
      value: "remix2",
      label: "Remix2",
    },
    {
      value: "astro2",
      label: "Astro2",
    },
  ];

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <main className="min-h-screen bg-white p-8 flex flex-col items-center gap-4">
      <HelloWorld />
      <p className="text-xl text-gray-600">
        Web Application with TailwindCSS 4.1
      </p>
      <Button>Click me</Button>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? frameworks.find((framework) => framework.value === value)?.label
              : "Select framework..."}
            <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search framework..." />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
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
    </main>
  );
}

export default App;
