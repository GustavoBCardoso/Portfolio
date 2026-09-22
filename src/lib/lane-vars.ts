import type { CSSProperties } from "react";
import type { LaneId } from "@/content/curriculum";

/** Exposes a track's band and tint colours as --lane / --lane-tint. */
export const laneVars = (lane: LaneId) =>
  ({
    "--lane": `var(--color-lane-${lane})`,
    "--lane-tint": `var(--color-lane-${lane}-tint)`,
  }) as CSSProperties;
