import { RichText } from '@graphcms/rich-text-react-renderer';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogRichText({ content }) {
    return (
        <div>
            <RichText 
                content={content}
                renderers={{
                    h1: ({ children }) => <h1 className="text-6xl my-4 font-serif">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-5xl my-4 font-serif">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-4xl my-4 font-serif">{children}</h3>,
                    h4: ({ children }) => <h4 className="text-3xl my-4 font-serif">{children}</h4>,
                    h5: ({ children }) => <h5 className="text-2xl my-4 font-serif">{children}</h5>,
                    h6: ({ children }) => <h6 className="text-xl my-4 font-serif">{children}</h6>,
                    bold: ({ children }) => <strong>{children}</strong>,
                    a: ({ children, href }) => (
                        <Link 
                            href={href} 
                            target="_blank"
                            className="text-blue-400 hover:underline"
                        >
                            {children}
                        </Link>
                    ),
                    blockquote: ({ children }) => (
                        <div className="my-4 ml-[30px] pl-[15px] border-l-[3px] border-gray-400">
                            {children}
                        </div>
                    ),
                    code: ({ children }) => <code className="bg-gray-800 p-1 border rounded-md text-xs">{children}</code>,
                    img: ({ src, altText, height, width }) => (
                        <Image 
                            src={src}
                            alt={altText}
                            height={height}
                            width={width}
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                            placeholder="blur"
                            className="my-6 max-w-3xl mx-auto object-contain"
                        />
                    ),
                    ul: ({ children }) => <ul className="list-disc my-2">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal my-2">{children}</ol>,
                    table: ({ children }) => <table className="table-auto w-full my-4">{children}</table>,
                    table_head: ({ children }) => <thead>{children}</thead>,
                    table_header_cell: ({ children }) => <th className="p-4 text-left border-b-2">{children}</th>,
                    table_body: ({ children }) => <tbody>{children}</tbody>,
                    table_row: ({ children }) => <tr className="hover:bg-teal-700">{children}</tr>,
                    table_cell: ({ children }) => <td className="p-4 border-b border-dotted border-gray-600">{children}</td>,
                }}
            />
        </div>
    )
}