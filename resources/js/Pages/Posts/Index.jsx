import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Layout from "../../Layouts/Default";

export default function PostIndex({posts, session}) {
    return (
        <Layout>
            <div style={{ marginTop: '100px' }}>
                <Link href="/posts/create" className="btn btn-primary">Create Post</Link>
                {session && session.status === "success" && (
                    <div className="alert alert-success mt-3">{session.message}</div>
                )}

                <div className="card border-0 rounded shadow-sm mt-3">
                    <div className="card-body">
                        <h3 className="card-title text-center">Posts</h3>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Content</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map(post => (
                                    <tr key={post.id}>
                                        <td>{post.title}</td>
                                        <td>{post.content}</td>
                                        <td>
                                            <Link href={`/posts/${post.id}/edit`} className="btn btn-sm btn-primary me-2">Edit</Link>
                                            <Link href={`/posts/${post.id}`} method="delete" as="button" className="btn btn-sm btn-danger">Delete</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
