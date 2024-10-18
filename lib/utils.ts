import { FarmTestData } from '@/database/dummy/farms';
import { FarmType } from '@/types';
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const loadFarmsData = async (start: number = 0, limit: number | undefined, sort: boolean = false) => {
  const farms = (!limit) ? await FarmTestData.slice(start) : await FarmTestData.slice(start, limit);

  if (sort) return farms.sort((a, b) => (a?.priority || 0) - (b?.priority || 0));

  return farms;
}


export const filterFarm = async (type: FarmType, start: number = 0, limit: number | undefined) => {
  const farms = await loadFarmsData(start, limit);

  farms.filter((farm) => farm.type === type)
}

