<script>
    export let data;
</script>

<div>
    게시글 목록
</div>

<ul>
    {#each  data.data.posts as post}
    <li>
        <a href="/post/{post.id}">
            {post.subject}
        </a>

    </li>
    {/each}
</ul>