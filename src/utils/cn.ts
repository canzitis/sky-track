import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...utils: ClassValue[]) {
  return twMerge(clsx(utils));
}
