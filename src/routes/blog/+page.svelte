<script lang="ts">
	import { formatDate } from '../../lib/utils';
	import * as config from '$lib/config';
	import BreadCrumbs from '../../lib/components/Breadcrumbs.svelte';

 import Img from "../../lib/components/custom/Img.svelte"
	
	export let data;
</script>

<div class="breadcrumbs">
<BreadCrumbs />
</div>
<div>
	

<div class="container">
	{#each data.posts as post}
		<div class="card" id={post.id}>
			<div class="card__header">
				<a href={post.slug}>
					<Img src={`/cloud.jpg`} alt={`image is not avilable`} />
				</a>
			</div>
			<div class="card__body">
				<!-- <span class="tag tag-blue">{post.Technology}</span> -->
				<a href={post.slug}>
					<h4>{post.title}</h4>
				</a>
			
				<p class="post_description">{post.description}</p>
		
			</div>
			<div class="card__footer">
				<div class="user">
					<img src="https://i.pravatar.cc/40?img=1" alt="user__image" class="user__image" />
					<div class="user__info">
						<!-- <h5>{post.developerInfo}</h5> -->
						<small>{post.date}</small>
						<p class="blog_post">posted 2 days ago</p>
					</div>
					
				</div>
			</div>
		</div>
	{/each}
</div>
</div>
<style>


.post_description{
	font-size: 15px;
	margin-top: 8px;
}
.blog_post{
	font-size: 14px;
}
.breadcrumbs{
	margin-bottom: 4%;
	display: flex;
	
}


	@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');

	*,
	*::before,
	*::after {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	body {
		font-family: 'Quicksand', sans-serif;
		display: grid;
		place-items: center;
		height: 100vh;
		background: #7f7fd5;
		background: linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
	}

	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		max-width: 1200px;
		margin-block: 2rem;
		gap: 2rem;
	}

	img {
		max-width: 100%;
		display: block;
		object-fit: cover;
	}

	.card {
		display: flex;
		flex-direction: column;
		width: clamp(20rem, calc(20rem + 2vw), 22rem);
		overflow: hidden;
		box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
		border-radius: 1em;
		background: #ece9e6;
		background: linear-gradient(to right, #ffffff, #ece9e6);
	}

	.card__body {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.tag {
		align-self: flex-start;
		padding: 0.25em 0.75em;
		border-radius: 1em;
		font-size: 0.75rem;
	}

	.tag + .tag {
		margin-left: 0.5em;
	}

	.tag-blue {
		background: #56ccf2;
		background: linear-gradient(to bottom, #2f80ed, #56ccf2);
		color: #fafafa;
	}

	.tag-brown {
		background: #d1913c;
		background: linear-gradient(to bottom, #ffd194, #d1913c);
		color: #fafafa;
	}

	.tag-red {
		background: #cb2d3e;
		background: linear-gradient(to bottom, #ef473a, #cb2d3e);
		color: #fafafa;
	}

	.card__body h4 {
		font-size: 1.5rem;
		text-transform: capitalize;
	}

	.card__footer {
		display: flex;
		padding: 0.9rem;
		margin-top: auto;
	}

	.user {
		display: flex;
		gap: 0.5rem;
	}

	.user__image {
		border-radius: 50%;
		width:60px;
		height: 60px;
	}

	.user__info > small {
		color: #666;
	}

	#sidebar {
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

#topic-list {
  list-style: none;
}

#topic-list li {
  margin-bottom: 10px;
  cursor: pointer;
}

.highlighted {
  font-weight: bold;
  color: red;
}

 
</style>
