import React from "react";
import Layout from "../../Layouts/Default";
import { Inertia } from "@inertiajs/inertia";

export default function CreatePost({ errors }) {
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");

    const storePost = (e) => {
        e.preventDefault();
        Inertia.post("/posts", { title, content });
    };

    return (
        <Layout>
            <div style={{ marginTop: "100px" }}>
            <div className="card border-0 rounded shadow-sm mt-3">
            <div className="card-body">
                <form onSubmit={storePost}>
                    <h3 className="card-title text-center">Create Post</h3>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className={`form-control ${errors.title ? 'is-invalid' : ''}`} id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="content" className="form-label">Content</label>
                        <textarea className={`form-control ${errors.content ? 'is-invalid' : ''}`} id="content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                        {errors.content && <div className="invalid-feedback">{errors.content}</div>}
                    </div>
                    {errors.content && <div className="alert alert-danger">{errors.content}</div>}
                    <button type="submit" className="btn btn-primary">Create Post</button>
                </form>
            </div>
            </div>
            </div>
        </Layout>
    );
}