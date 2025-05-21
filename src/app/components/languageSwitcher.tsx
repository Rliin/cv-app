'use client';

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTranslations } from "next-intl";
import {useRouter, usePathname} from 'next/navigation';


const LanguageSwitcher = () => {
  const t = useTranslations("localization")
  const [position, setPosition] = useState(t("currentLanguage"))
  const router = useRouter();
  const pathname = usePathname();

  
  const changeLanguage = (locale: string) => {
    const segments = pathname.split('/');
    segments[1] = locale; 
    const newPath = segments.join('/');
    router.push(newPath);
  };

  const handleValueChange = (newValue: string) => {
    setPosition(newValue);
    changeLanguage(newValue);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="BCustom" size="BCustomSize">{position}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-33 mt-2 mb-4">
        <DropdownMenuRadioGroup value={position} onValueChange={handleValueChange}>
          <DropdownMenuRadioItem value="EN">English</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="TR">Türkçe</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="DE">Deutsch 🛠️</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
