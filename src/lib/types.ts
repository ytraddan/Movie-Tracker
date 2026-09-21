import { ComponentType, SVGProps } from "react";
import { COLLECTION_TABS, HOME_TABS } from "./constants";

export type CollectionTabId = (typeof COLLECTION_TABS)[number]["id"];
export type HomeTabId = (typeof HOME_TABS)[number]["id"];

export interface Tab<T extends string> {
  id: T;
  label: string;
  emptyMessage: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
}
