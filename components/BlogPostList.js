"use client"

import Link from "next/link"
import { sliceStartAtom, sliceEndAtom, currentPageAtom } from "../storage/atoms"
import { useAtom } from "jotai"

export default function BlogPostList({ posts }) {

    const [currentSliceStart, setCurrentSliceStart] = useAtom(sliceStartAtom)
    const [currentSliceEnd, setCurrentSliceEnd] = useAtom(sliceEndAtom)
    const [currentPage, setCurrentPage] = useAtom(currentPageAtom)

    const nextPage = () => {
        setCurrentSliceStart(currentSliceStart + 2)
        setCurrentSliceEnd(currentSliceEnd + 2)
        setCurrentPage(currentPage + 1)
    }

    const previousPage = () => {
        setCurrentSliceStart(currentSliceStart - 2)
        setCurrentSliceEnd(currentSliceEnd - 2)
        setCurrentPage(currentPage - 1)
    }

    return (
        <>
            <ul>
                {posts.slice(currentSliceStart, currentSliceEnd).map((post) => (
                    <li key={post.node.id}>
                        <Link
                            href={`/blog/${post.node.slug}`}
                        >
                            {post.node.title}
                        </Link>
                    </li>
                ))}
            </ul>
            
            {currentSliceStart >= 2 && <button onClick={previousPage}>Previous</button>}
            {currentSliceEnd < 3 && <button onClick={nextPage}>Next</button>}
        </>
    )
}