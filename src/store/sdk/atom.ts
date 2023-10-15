import { atom } from "jotai";

// SDK
export const deviceIDAtom = atom<string>("");
export const currentTrackAtom = atom<any>(null);
export const isPausedAtom = atom<boolean>(true);
export const currentPositionAtom = atom<number>(0);
export const durationMsAtom = atom<number>(0);
