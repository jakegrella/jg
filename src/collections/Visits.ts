import type { CollectionConfig } from 'payload';

export const Visits: CollectionConfig = {
    slug: 'visits',
    admin: {
        // useAsTitle: 'email',
    },
    fields: [
        {
            name: 'sessionID',
            label: 'Session ID',
            type: 'text',
            required: true,
        },
        {
            name: 'ip',
            label: 'IP Address',
            type: 'text',
            required: true,
        },
        {
            name: 'visitedAt',
            label: 'Visited At',
            type: 'date',
            required: true,
        },
        {
            name: 'path',
            label: 'Path',
            type: 'text',
            required: true,
        },
        {
            name: 'userAgent',
            label: 'User Agent',
            type: 'text',
        },
        {
            name: 'referrer',
            label: 'Referrer',
            type: 'text',
        }
    ],
};
