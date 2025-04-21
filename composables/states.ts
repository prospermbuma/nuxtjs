import { useState } from "nuxt/app";

export const useColor = () => useState<string>('color', () => 'blue');