<script lang="ts">
	import { formatDate } from '$lib/utils'

	export let data
	console.log(data.content);
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>
<div style="display:flex">
	<div style="width:18%">
		<div class="scrolling_list">
	      
			  <div class="hr_line">
					 <li><a href="/">Section 1</a></li>
					 <li><a href="/">Section 2</a></li>
					 <li><a href="/">Section 3</a></li>
					 <li><a href="/">Section 4</a></li>
					 <li><a href="/">Section 5</a></li>
					 <li><a href="/">Section 6</a></li>
				<div>

				</div>
				
				
			
			</div>
		
			<div id="sidebar">
				<ul id="topic-list"></ul>
			</div>
	</div>
</div>
<div style="width:62%">
<article>
  <!-- Title -->
	<hgroup>
		
		<h1 >{data.meta.title}</h1>
	
		<p>Published at {formatDate(data.meta.date)}</p>
	
	</hgroup>



  <!-- Tags -->
	<div class="tags">
		{#each data.meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>

	

  <!-- Post -->
	<div class="prose" id="#section1">
		<svelte:component this={data.content} />
	</div>
</article>

</div>
<div style="width:10%">
	<aside>
     <div class="owner_detail ">
			<div style="display: flex; gap:20px; padding-top:10px">
        <img src="./avator.jpg" alt="Avatar" class="avatar">
				<span class="owner_name">Shivam Newase</span>
			</div>
			
			<div style="">
				<button class="follow_btn">Follow</button>
				<!-- svelte-ignore a11y-label-has-associated-control -->
				
			</div>
			<div style="display:grid">
				<span class="owner_Published">Published</span>
				<span class="published_date">10-Apr-2023</span>
				<span class="owner_Published">Joined</span>
				<span class="published_date">10-Apr-2023</span>
				<span class="owner_Published">Role</span>
				<span class="published_date">Developer</span>
			</div>
          
					 
		 </div>
	</aside>
</div>
</div>
<style>


.hr_line {
	 display: grid;
}
hr.new5 {
  border: 1px solid green;
  border-radius: 5px;
}

.scrolling_list{
	position: fixed;
}

	.published_date{
		font-size:15px;
		margin-left: 15px;
		margin-bottom: 15px;

	}
	.owner_Published{
		font-size:17px;
		font-weight: 600;
		margin-left: 15px;

	}
	.follow_btn{
		 width: 90%;
		 margin-top: 20px;
		 margin-left: 15px;
		 background: #000fe6;
		 border: 1px solid #000fe6;
		 color: white;
		 margin-bottom:20px;
		 font-weight: 200;
		 font-size: 14px;
	}
	.owner_name{
		font-weight: 800;
		margin-top: 8px;
		margin-left: 8px;
		font-size: 25px;
		
		
	}
	.avatar {
  justify-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
	margin-left: 15px;
}
	.owner_detail{
		height: 400px;
		width: 350px;
		border: 1px solid rgb(204, 203, 203);
		border-radius: 8px;
		justify-content: center;
		
	}
aside{
	float:right;
}
	article {
		max-inline-size: 1000px;
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
		gap: var(--size-3);
		margin-top: var(--size-7);
	}

	.tags > * {
		padding: var(--size-2) var(--size-3);
		border-radius: var(--radius-round);
	}

	.prose  pre{
		width: 800px;
	}
	.scrolling_list{
		display: grid;

	}
</style>
