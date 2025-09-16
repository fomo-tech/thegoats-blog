'use client'

import React, { useState } from 'react'

const CommentForm = () => {
    const [comment, setComment] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setSuccess('')

        if (!comment.trim()) {
            setError('Comment cannot be empty!')
            return
        }

        try {
            setLoading(true)
            // Fake API call
            await new Promise((resolve) => setTimeout(resolve, 1000))

            setSuccess('Your comment has been submitted successfully!')
            setComment('')
        } catch (err) {
            setError('Something went wrong. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="comment-form padding-10 mb-10">
            <form id="comment-form" className="comment-form" method="post" onSubmit={handleSubmit}>
                {/* Messages */}
                {error && (
                    <div className="messages text-danger mb-2">
                        <i className="fa-solid fa-circle-exclamation me-1"></i> {error}
                    </div>
                )}
                {success && (
                    <div className="messages text-success mb-2">
                        <i className="fa-solid fa-circle-check me-1"></i> {success}
                    </div>
                )}

                <div className="row">
                    <div className="column col-md-12">
                        {/* Comment textarea */}
                        <div className="form-group">
                            <textarea
                                name="InputComment"
                                id="InputComment"
                                className="form-control"
                                rows={4}
                                placeholder="Your comment here..."
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    name="submit"
                    id="submit"
                    value="Submit"
                    disabled={loading}
                    className="btn btn-default"
                >
                    {loading ? (
                        <>
                            Submitting...
                        </>
                    ) : (
                        <>
                            Submit
                        </>
                    )}
                </button>
            </form>
        </div>
    )
}

export default CommentForm
