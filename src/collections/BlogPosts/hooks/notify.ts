import { BlogPost } from "@/payload-types";
import { CollectionAfterChangeHook } from "payload";

export const sendEmailNotification: CollectionAfterChangeHook<BlogPost> = async ({
    doc,
    previousDoc,
    req: { payload }
}) => {
    // Check if the post is being published for the first time
    if (previousDoc.publishedStatus === 'draft' && doc.publishedStatus === 'published') {
        const subscribers = [];
        try {
            // Get all email subscribers
            const result = await payload.find({
                collection: 'email-subscribers',
                depth: 0,
                pagination: false
            })
            if (!result.docs || !result.docs.length) throw new Error('No email subscribers found');
            subscribers.push(...result.docs.map(subscriber => subscriber.email));
        } catch (error) {
            payload.logger.error('Error fetching email subscribers:', error);
        }

        // If no subscribers, skip sending email
        if (!subscribers.length) {
            payload.logger.warn('No email subscribers found, skipping email notification.');
            return doc;
        }

        // Send email to each subscriber
        for (const email of subscribers) {
            try {
                await payload.sendEmail({
                    to: email,
                    subject: doc.title,
                    text: `Hi,

        I've just published a new blog post.

        Title: ${doc.title}
        Subtitle: ${doc.subtitle}

        Read it here: https://www.jakegrella.com/blog/${doc.slug}
        `,
                    html: `
                <p>Hi,</p>
                <p>I've just published a new blog post.</p>
                <a href="https://www.jakegrella.com/blog/${doc.slug}" style="display: block; padding: 16px; border: 1px solid #eee; border-radius: 8px; text-decoration: none; background: #fafafa; margin: 16px 0;">
                    <h2 style="margin: 0 0 8px 0; color: #333;">${doc.title}</h2>
                    <p style="margin: 0; color: #666;">${doc.subtitle}</p>
                    <p style="margin: 0; color: #666; padding-top: 16px; font-style: italic;">Click to read on jakegrella.com</p>
                </a>
                <p style="padding-bottom: 16px;">Direct link: <a href="https://www.jakegrella.com/blog/${doc.slug}">https://www.jakegrella.com/blog/${doc.slug}</a></p>
                <p>If you have any comments or questions, just reply to this email and I will follow up.</p>
                <p>Have a good day!</p>
                <p>— Jake Grella</p>
                <p style="padding-top: 16px;">PS: You received this email because you subscribed to my email list. If you want to unsubscribe from these emails, please reply to this email with "unsubscribe" in the body or subject line, and I will remove you from the list.</p>
                `
                })
            } catch (error) {
                payload.logger.error(`Error sending email to ${email}:`, error);
            }
        }
    }

    return doc
}