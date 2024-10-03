type Mods = Record<string, boolean | string>

export const classNames = (cls: string, mods: Mods = {}, additional: string[] = []): string => [
    cls,
    ...additional.filter(Boolean),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(mods).filter(([className, value]) => Boolean(value))
        .map(([className]) => className),
].join(' ').trim();
