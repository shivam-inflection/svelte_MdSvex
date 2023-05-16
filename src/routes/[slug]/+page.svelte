<script lang="ts">
	import Pagination from '../../lib/components/Pagination.svelte';
	import { formatDate } from '$lib/utils';
	import { title } from '$lib/config';
	import { Subtitles } from 'lucide-svelte';

	export let data;
	// console.log("data------", data.meta.subTitle);

</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>
<div style="display:flex">
	<div style="width:17%">
		<!-- {data.meta.subTitle} -->
 
		<div class="scrolling_list">
			
			
			<a href="/">Section 3</a>
			<a href="/">Section 4</a>
			<a href="/">Section 5</a>
			<a href="/">Section 6</a>
		</div>
		<div id="sidebar">
			<ul id="topic-list" />
		</div>
	</div>
	<div style="width:87%">
		<article>
			<!-- Title -->
			<hgroup>
				<h1>{data.meta.title}</h1>

				<p>Published at {formatDate(data.meta.date)}</p>
			</hgroup>

			<div class="user_Info">
				<div style="display: flex; ">
					<div>
						<img src="/avatar.png" style="width:35px; heigth:25px" alt="Avatar" class="avatar" />
					</div>
					<div style="margin-top:5px; margin-left:10px;">
						<span>User Name</span>
					</div>
					<div style="margin-left:10px;">
						<button style="height:35px; background-color:blue; color:white;">Follow</button>
					</div>
				</div>
			</div>
			<!-- Tags -->
			<div class="tags">
				{#each data.meta.categories as category}
					<span class="surface-4">&num;{category}</span>
				{/each}
			</div>

			<!-- Post -->
		
			<div class="prose" >
			<svelte:component this={data.content} />
			</div>
		</article>
	</div>
</div>

<style>
	.user_Info {
		padding-top: 20px;
	}

	/* .hr_line {
	 display: grid;
} */

	.scrolling_list {
		position: fixed;
	}

	.published_date {
		font-size: 15px;
		margin-left: 15px;
		margin-bottom: 5px;
	}
	.owner_Published {
		font-size: 17px;
		font-weight: 600;
		margin-left: 15px;
	}
	.follow_btn {
		width: 90%;
		margin-top: 20px;
		margin-left: 15px;
		background: #000fe6;
		border: 1px solid #000fe6;
		color: white;
		margin-bottom: 20px;
		font-weight: 200;
		font-size: 14px;
	}
	/* .owner_name{
		font-weight: 800;
		margin-top: 8px;
		margin-left: 8px;
		font-size: 25px;
		
		
	} */
	/* .avatar {
  justify-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
	margin-left: 15px;
} */
	.owner_detail {
		height: 400px;
		width: 350px;
		border: 1px solid rgb(204, 203, 203);
		border-radius: 8px;
		justify-content: center;
	}
	/* aside{
	float:right;
} */
	article {
		max-inline-size: 1400px;
		margin-inline: auto;
	}

	h1 {
		text-transform: capitalize;
	}

	h1 + p {
		margin-top: var(--size-2);
		color: var(--text-2);
	}

	.tags {
		display: flex;
		margin-bottom: 20px;
		gap: var(--size-3);
		margin-top: var(--size-4);
	}

	.tags > * {
		padding: var(--size-2) var(--size-3);
		border-radius: var(--radius-round);
	}

	.prose pre {
		width: 800px;
	}
	.scrolling_list {
		display: grid;
	}
</style>
