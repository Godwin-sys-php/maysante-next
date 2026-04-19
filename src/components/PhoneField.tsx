"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const COUNTRIES = [
  { code: "BE", dial: "+32", flag: "🇧🇪" },
  { code: "FR", dial: "+33", flag: "🇫🇷" },
  { code: "LU", dial: "+352", flag: "🇱🇺" },
  { code: "NL", dial: "+31", flag: "🇳🇱" },
  { code: "DE", dial: "+49", flag: "🇩🇪" },
  { code: "CH", dial: "+41", flag: "🇨🇭" },
  { code: "GB", dial: "+44", flag: "🇬🇧" },
];

interface PhoneFieldProps {
  value: string;
  onChange: (value: string) => void;
  id?: string;
  name?: string;
  placeholder?: string;
  className?: string;
}

export default function PhoneField({
  value: _value,
  onChange,
  id,
  name: _name,
  placeholder = "4XX XX XX XX",
  className,
}: PhoneFieldProps) {
  const [dialCode, setDialCode] = useState("+32");
  const [localNumber, setLocalNumber] = useState("");

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^\d\s\-]/g, "");
    setLocalNumber(raw);
    const digits = raw.replace(/\D/g, "").replace(/^0+/, "");
    onChange(digits ? `${dialCode}${digits}` : "");
  };

  const handleDialChange = (newDial: string) => {
    setDialCode(newDial);
    const digits = localNumber.replace(/\D/g, "").replace(/^0+/, "");
    onChange(digits ? `${newDial}${digits}` : "");
  };

  return (
    <div className={cn("flex mt-1.5", className)}>
      <Select value={dialCode} onValueChange={handleDialChange}>
        <SelectTrigger className="w-[100px] shrink-0 rounded-r-none border-r-0 bg-background/60 backdrop-blur focus:z-10">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {COUNTRIES.map((c) => (
            <SelectItem key={c.code} value={c.dial}>
              {c.flag} {c.dial}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        id={id}
        type="tel"
        value={localNumber}
        onChange={handleNumberChange}
        placeholder={placeholder}
        inputMode="numeric"
        className="rounded-l-none bg-background/60 backdrop-blur"
      />
    </div>
  );
}
