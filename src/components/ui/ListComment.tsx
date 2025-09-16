'use client'

import React, { useState, useEffect, useRef } from 'react'
import avt_default from '@/assets/icons/avatar-default.png'
import CommentForm from './CommentForm'

interface CommentItem {
    id: number
    name: string
    date: string
    text: string
    isChild?: boolean
}

const commentsData: CommentItem[] = [
    {
        id: 1,
        name: 'John Doe',
        date: 'Jan 08, 2021 14:41 pm',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae odio ut tortor fringilla cursus sed quis odio.',
    },
    {
        id: 2,
        name: 'Helen Doe',
        date: 'Jan 08, 2021 14:41 pm',
        text: 'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.',
        isChild: true,
    },
    {
        id: 3,
        name: 'Anna Doe',
        date: 'Jan 08, 2021 14:41 pm',
        text: 'Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.',
    },
]

const ListComment = () => {
    const [replyTo, setReplyTo] = useState<number | null>(null)
    const formRef = useRef<HTMLDivElement | null>(null)

    const handleReplyClick = (id: number) => {
        setReplyTo(replyTo === id ? null : id) // toggle
    }

    // Detect click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                formRef.current &&
                !formRef.current.contains(event.target as Node)
            ) {
                setReplyTo(null)
            }
        }

        if (replyTo !== null) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [replyTo])

    return (
        <div className="comments bordered padding-30 rounded">
            <ul className="comments">
                {commentsData.map((comment) => (
                    <li
                        key={comment.id}
                        className={`comment rounded ${comment.isChild ? 'child' : ''}`}
                    >
                        <div className="thumb">
                            <img src={avt_default.src} alt="Avt Default" />
                        </div>
                        <div className="details">
                            <h4 className="name">
                                <a href="#">{comment.name}</a>
                            </h4>
                            <span className="date">{comment.date}</span>
                            <p>{comment.text}</p>
                            <button
                                type="button"
                                className="btn btn-default btn-sm"
                                onClick={() => handleReplyClick(comment.id)}
                            >
                                Reply
                            </button>

                            {/* Hiện form comment khi bấm Reply */}
                            {replyTo === comment.id && (
                                <div className="mt-3" ref={formRef}>
                                    <CommentForm />
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListComment
