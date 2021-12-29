import React, {createContext, useState, useContext} from 'react'

export const PostContext = createContext()

export function PostProvider({children}) {
    const [image, setImage] = useState(null)
    const [title, setTitle] = useState('')
    const [tags, setTags] = useState([])
    const [markdown, setMarkdown] = useState('')

    const handleTitle = (event) => {
        setTitle(event.currentTarget.value)
    }

    const handleTags = (event, values) => {
        setTags(values)
    }

    const handleMarkdown = (event) => {
        setMarkdown(event.currentTarget.value)
    }

    return <PostContext.Provider
        value={{
            image,
            setImage,
            title,
            setTitle: handleTitle,
            tags,
            setTags: handleTags,
            markdown,
            setMarkdown: handleMarkdown
    }}
    >
        {children}
    </PostContext.Provider>
}

export function usePost() {
    const context = useContext(PostContext)
    const {
        title,
        setTitle,
        image,
        setImage,
        tags,
        setTags,
        markdown,
        setMarkdown
    } = context

    return {
        title,
        setTitle,
        image,
        setImage,
        tags,
        setTags,
        markdown,
        setMarkdown
    }
}