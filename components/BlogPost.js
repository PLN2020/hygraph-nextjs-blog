import { RichText } from '@graphcms/rich-text-react-renderer';

export default function BlogPost({ content }) {
    return (
        <div>
            <RichText 
                content={content}
                renderers={{
                    h1: ({ children }) => <h1 className="text-blue text-xl">{children}</h1>,
                    bold: ({ children }) => <strong>{children}</strong>,
                }}
            />
        </div>
    )
}