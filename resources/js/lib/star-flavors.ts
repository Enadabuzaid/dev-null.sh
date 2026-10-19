export type StarFlavor = 'star' | 'ship' | 'fire' | 'bug' | 'brain' | 'coffee';

/**
 * The flavors a star can have, in the picker's order, with what each one says.
 */
export const starFlavors: {
    flavor: StarFlavor;
    emoji: string;
    meaning: string;
}[] = [
    { flavor: 'star', emoji: '⭐', meaning: 'Star it' },
    { flavor: 'ship', emoji: '🚀', meaning: 'Ship it' },
    { flavor: 'fire', emoji: '🔥', meaning: 'This is fire' },
    { flavor: 'bug', emoji: '🐛', meaning: 'Found a bug' },
    { flavor: 'brain', emoji: '🧠', meaning: 'Big brain' },
    { flavor: 'coffee', emoji: '☕', meaning: 'Worth a coffee' },
];

export const flavorEmoji = (flavor: StarFlavor): string =>
    starFlavors.find((candidate) => candidate.flavor === flavor)?.emoji ?? '⭐';
