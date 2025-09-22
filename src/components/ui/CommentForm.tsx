"use client";

import { postComment } from "@/lib/db/post";
import React, { useState } from "react";

interface CommentFormProps {
  postId: string;
}

const CommentForm = ({ postId }: CommentFormProps) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name.trim()) {
      setError("Tên không được để rỗng!");
      return;
    }

    if (!comment.trim()) {
      setError("Bình luận không được để rỗng!");
      return;
    }

    try {
      setLoading(true);
      // Fake API call (replace bằng API thực tế)
      await postComment({
        content: comment.trim(),
        name: name.trim(),
        postId,
      });

      setSuccess(`Cám ơn ${name}, bình luận của bạn đã được gửi!`);
      setName("");
      setComment("");
    } catch (err) {
      setError("Đã xảy ra lỗi. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="comment-form padding-10 mb-10">
      <form
        id="comment-form"
        className="comment-form"
        method="post"
        onSubmit={handleSubmit}
      >
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
            {/* Name input */}
            <div className="form-group mb-3">
              <input
                type="text"
                name="InputName"
                id="InputName"
                className="form-control"
                placeholder="Tên của bạn..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="column col-md-12">
            {/* Comment textarea */}
            <div className="form-group">
              <textarea
                name="InputComment"
                id="InputComment"
                className="form-control"
                rows={4}
                placeholder="Bình luận của bạn ở đây..."
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
          {loading ? "Đang gửi..." : "Bình luận"}
        </button>
      </form>
    </div>
  );
};

CommentForm.displayName = "CommentForm";
export default CommentForm;
