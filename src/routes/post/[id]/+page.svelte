<script>
    export let data;
</script>

<div>
<div>
    상세페이지
</div>
    <h2>{data.data.post.subject}</h2>
    <p>{data.data.post.content}</p>
    <p>{data.data.post.createTime}</p>
</div>