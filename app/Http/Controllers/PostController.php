<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    //
    public function index()
    {
        // get all posts
        $posts = Post::latest()->get();
        $session = session('success');

        // return the view with posts
        return inertia('Posts/Index', [
            'posts' => $posts,
            'session' => $session
        ]);
    }

    public function create()
    {
        return inertia('Posts/Create');
    }

    public function store(Request $request)
    {
        // validate the request
        $request->validate([
            'title' => 'required',
            'content' => 'required'
        ]);

        // create a new post
        Post::create($request->all());

        // redirect to the posts index page
        return redirect()->route('posts.index')->with('success', 'Post created successfully');
    }
    
    public function edit(Post $post)
    {
        return inertia('Posts/Edit', [
            'post' => $post
        ]);
    }

    public function update(Request $request, Post $post)
    {
        // validate the request
        $request->validate([
            'title' => 'required',
            'content' => 'required'
        ]);

        // update the post
        $post->update($request->all());

        // redirect to the posts index page
        return redirect()->route('posts.index')->with('success', 'Post updated successfully');
    }

    public function destroy(Post $post)
    {
        // delete the post
        $post->delete();

        // redirect to the posts index page
        return redirect()->route('posts.index')->with('success', 'Post deleted successfully');
    }
}
