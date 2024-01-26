<script>
    export let data;
</script>

<div>
<div>
    상세페이지
</div>
    <h2>{data.data.article.subject}</h2>
    <p>{data.data.article.content}</p>
    <p>{data.data.article.price}</p>
    <p>{data.data.article.area}</p>
    <p>{data.data.article.createDate}</p>
</div>